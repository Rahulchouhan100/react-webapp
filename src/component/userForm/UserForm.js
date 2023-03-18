import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./userForm.css";
import { getItems, setItems } from "../../utils/helper";

const UserForm = () => {
  const [addformUserData, setAddFormUserData] = useState({
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
  });

  const calculateAge = () => {
    const monthDiff =
      Date.now() - new Date(addformUserData.dateOfBirth).getTime();
    const age_dt = new Date(monthDiff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    // console.log("age::", age > 18);
    return age > 18;
  };
  const validateDuplicateEntry = () => {
    let flag = true;
    const data = getItems();
    if (!data) return true;
    data.map((value) => {
      if (
        value.email === addformUserData.email ||
        value.phoneNumber === addformUserData.phoneNumber
      ) {
        flag = false;
      }
    });
    !flag &&
      alert("Duplicte entry for either email or phoneNumber please verify!");
    return flag;
  };

  const saveUserData = () => {
    // console.log(getItems());
    if (
      !addformUserData.fullName.length ||
      addformUserData.fullName.length > 50 ||
      !addformUserData.dateOfBirth ||
      !calculateAge() ||
      !validateDuplicateEntry() ||
      !addformUserData.email ||
      !addformUserData.phoneNumber.length ||
      addformUserData.phoneNumber.length > 10
    )
      return;
    if (!getItems()) {
      const items = [];
      items.push(addformUserData);
      setItems(items); // saved to local storage
    } else {
      // console.log(...getItems());
      const arr = getItems();
      arr.push(addformUserData);
      setItems(arr); // object to string
    }

    // to form empty
    setAddFormUserData({
      fullName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
    });
  };

  const handlePhoneNumber = (e) => {
    setAddFormUserData({
      ...addformUserData,
      phoneNumber: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <label htmlFor="">Name :</label> <br />
        <input
          type="text"
          maxLength="50"
          required="required"
          value={addformUserData.fullName}
          onChange={(e) => {
            setAddFormUserData({
              ...addformUserData,
              fullName: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="">Date Of Birth :</label> <br />
        <input
          type="date"
          required="required"
          value={addformUserData.dateOfBirth}
          onChange={(e) => {
            setAddFormUserData({
              ...addformUserData,
              dateOfBirth: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="">Phone :</label> <br />
        <input
          type="tel"
          required="required"
          maxLength="10"
          pattern="[0-9]*"
          value={addformUserData.phoneNumber}
          onChange={(e) => handlePhoneNumber(e)}
        />
        <br />
        <label htmlFor="">Email :</label> <br />
        <input
          type="email"
          required="required"
          value={addformUserData.email}
          onChange={(e) => {
            setAddFormUserData({
              ...addformUserData,
              email: e.target.value,
            });
          }}
        />
        <br />
        <div className="btn">
          <button onClick={(e) => saveUserData(e)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
