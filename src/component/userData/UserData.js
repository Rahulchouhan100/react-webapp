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

  useEffect(() => {
    setUserData(getItems());
  }, []);

  if (!userData) return;

  const removeUser = (data) => {
    const filterData = getItems().filter((value) => {
      return value.fullName != data.fullName;
    });
    setUserData(filterData);
    setItems(filterData);
  };

  const updateUser = (e, data) => {
    let updatedUser = { ...data };
    updatedUser = { ...updatedUser, fullName: e.target.value };
    console.log("update user" + updatedUser);

    console.log(e.target.value);

    console.log(data);

    // const arr = getItems();
    // arr.push(addformUserData);
    // setItems(arr);
  };
  const handlerEdit = (e, data) => {
    console.log("data" + e.target.value);
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
              <td>
                {" "}
                {showPopUp && selectedIndex == index ? (
                  <input
                    type="text"
                    value={userDetail.fullName}
                    onChange={(e) => handlerEdit(e, userDetail)}
                  ></input>
                ) : (
                  userDetail.fullName
                )}
              </td>
              <td>
                {showPopUp && selectedIndex == index ? (
                  <input type="text" value={userDetail.dateOfBirth}></input>
                ) : (
                  userDetail.dateOfBirth
                )}
              </td>
              <td>
                {showPopUp && selectedIndex == index ? (
                  <input type="text" value={userDetail.phoneNumber}></input>
                ) : (
                  userDetail.phoneNumber
                )}
              </td>
              <td>
                {showPopUp && selectedIndex == index ? (
                  <input type="text" value={userDetail.email}></input>
                ) : (
                  userDetail.email
                )}
              </td>
              {editPage && (
                <td>
                  <button
                    onClick={() => {
                      setShowPopUp(!showPopUp);
                      setSelectedIndex(index);
                    }}
                  >
                    <img src={editIcon} alt="edit-icon" className="edit-icon" />
                  </button>
                  {/* {showPopUp && (
                    <>
                      <button onClick={() => handlePopUpClose()}>
                        showpopup
                      </button>
                    </>
                  )} */}
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
      {/* <div>
        {showPopUp && (
          <div className="form-container">
            <div className="form-box">
              <label htmlFor="">Name :</label> <br />
              <input
                type="text"
                maxLength="50"
                required="required"
                value={userData[index].fullName}
                // onChange={(e) => {
                //   setUserData( prev => { ...prev , fullName: e.target.value});
                // }}
                onChange={(e) => updateUser(e, userData[index])}
              />
              <br />
              <label htmlFor="">Date Of Birth :</label> <br />
              <input
                type="date"
                required="required"
                value={userData[index].dateOfBirth}
                // onChange={(e) => {
                //   setAddFormUserData({
                //     ...addformUserData,
                //     dateOfBirth: e.target.value,
                //   });
                // }}
              />
              <br />
              <label htmlFor="">Phone :</label> <br />
              <input
                type="number"
                required="required"
                value={userData[index].phoneNumber}
                // onChange={(e) => {
                //   setAddFormUserData({
                //     ...addformUserData,
                //     phoneNumber: e.target.value,
                //   });
                // }}
              />
              <br />
              <label htmlFor="">Email :</label> <br />
              <input
                type="email"
                required="required"
                value={userData[index].email}
                // onChange={(e) => {
                //   setAddFormUserData({
                //     ...addformUserData,
                //     email: e.target.value,
                //   });
                // }}
              />
              <br />
              <div className="btn">
                <button onClick={(e) => saveUserData(e)}>Save</button>
              </div>
            </div>
          </div>
        )}
        ;
      </div> */}
    </div>
  );
};

export default UserData;
