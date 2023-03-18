import React, { useEffect, useState } from "react";
import "./userData.css";
import data from "../../utils/constant.json";
import { getItems, setItems } from "../../utils/helper";
import deleteIcon from "../../assest/delete.png";
import editIcon from "../../assest/edit.png";

const UserData = ({ editPage }) => {
  const [userData, setUserData] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    setUserData(getItems());
  }, []);

  if (!userData) return;

  const validateDuplicateEntry = () => {
    let flag = true;
    const data = getItems();
    if (!data) return true;
    data.map((value) => {
      if (value.phoneNumber === singleUser.phoneNumber) {
        flag = false;
      }
    });
    !flag && alert("Duplicte entry  phoneNumber please verify!");
    return flag;
  };

  const removeUser = (data) => {
    const filterData = getItems().filter((value) => {
      return value.fullName != data.fullName;
    });
    setUserData(filterData);
    setItems(filterData);
  };

  const updateUserData = () => {
    if (
      !singleUser.phoneNumber.length ||
      singleUser.phoneNumber.length > 10 ||
      !validateDuplicateEntry()
    )
      return;
    userData[selectedIndex] = singleUser;
    // console.log("finalUserData::", userData);
    setUserData(userData);
    setItems(userData);
    setShowPopUp(false);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            {editPage && <th colSpan={2}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {userData.map((userDetail, index) => (
            <tr key={index}>
              <td>{userDetail.fullName}</td>
              <td>{userDetail.dateOfBirth}</td>
              <td>{userDetail.phoneNumber}</td>
              <td>{userDetail.email}</td>
              {editPage && (
                <td>
                  <button
                    onClick={() => {
                      setShowPopUp(!showPopUp);
                      setSelectedIndex(index);
                      setSingleUser(userData[index]);
                    }}
                  >
                    <img src={editIcon} alt="edit-icon" className="edit-icon" />
                  </button>
                </td>
              )}
              {editPage && (
                <td>
                  <button
                    onClick={() => {
                      removeUser(userDetail);
                    }}
                  >
                    <img
                      src={deleteIcon}
                      alt="delete-icon"
                      className="delete-icon"
                    />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {showPopUp && (
          <div className="form-container">
            <div className="form-box">
              <label htmlFor="">Name :</label> <br />
              <input
                type="text"
                maxLength="50"
                required="required"
                value={singleUser.fullName}
                onChange={(e) =>
                  setSingleUser({ ...singleUser, fullName: e.target.value })
                }
              />
              <br />
              <label htmlFor="">Date Of Birth :</label> <br />
              <input
                type="date"
                required="required"
                value={singleUser.dateOfBirth}
                onChange={(e) =>
                  setSingleUser({ ...singleUser, dateOfBirth: e.target.value })
                }
              />
              <br />
              <label htmlFor="">Phone :</label> <br />
              <input
                type="number"
                required="required"
                maxLength="10"
                pattern="[0-9]*"
                value={singleUser.phoneNumber}
                onChange={(e) =>
                  setSingleUser({ ...singleUser, phoneNumber: e.target.value })
                }
              />
              <br />
              <label htmlFor="">Email :</label> <br />
              <input
                type="email"
                required="required"
                value={singleUser.email}
                onChange={(e) =>
                  setSingleUser({ ...singleUser, email: e.target.value })
                }
              />
              <br />
              <div className="btn">
                <button
                  onClick={() => {
                    updateUserData();
                  }}
                  className="update-btn"
                >
                  UPDATE
                </button>
                <button
                  onClick={() => {
                    setShowPopUp(false);
                  }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserData;
