import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./userForm.css";
import { getItems, setItems } from "../../utils/helper";

// const getItems = () => {
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   return userData;
// };

// const setItems = (items) => {
//   localStorage.setItem("userData", JSON.stringify(items));
// };

const UserForm = () => {
  const [addformUserData, setAddFormUserData] = useState({
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
  });

  const saveUserData = () => {
    console.log(getItems());
    if (!getItems()) {
      const items = [];
      items.push(addformUserData);
      setItems(items);
    } else {
      // console.log(...getItems());
      const arr = getItems();
      arr.push(addformUserData);
      setItems(arr);
    }
    console.log(getItems());

    setAddFormUserData({
      fullName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
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
        />{" "}
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
        />{" "}
        <br />
        <label htmlFor="">Phone :</label> <br />
        <input
          type="number"
          required="required"
          value={addformUserData.phoneNumber}
          onChange={(e) => {
            setAddFormUserData({
              ...addformUserData,
              phoneNumber: e.target.value,
            });
          }}
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

// import { useState } from 'react';

// function DateOfBirthInput() {
//   const [dob, setDob] = useState('');

//   const handleDateChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     const today = new Date();
//     const age = today.getFullYear() - inputDate.getFullYear();
//     const monthDiff = today.getMonth() - inputDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < inputDate.getDate())) {
//       age--;
//     }
//     if (age >= 18) {
//       setDob(event.target.value);
//     } else {
//       setDob('');
//       alert('You must be at least 18 years old to use this service.');
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="dob">Date of Birth:</label>
//       <input
//         type="date"
//         id="dob"
//         name="dob"
//         value={dob}
//         max={new Date().toISOString().slice(0, 10)}
//         onChange={handleDateChange}
//       />
//     </div>
//   );
// }

// export default DateOfBirthInput;
