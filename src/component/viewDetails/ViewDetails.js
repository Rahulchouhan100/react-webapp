// import React, { useEffect, useState } from "react";
import "./viewDetails.css";
// import data from "../../utils/constant.json";
// import { getItems } from "../../utils/helper";

// const ViewDetails = ({ viewPage }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     setUserData(getItems());
//   }, []);
//   if (!userData) return;
//   // console.log(userData);
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date of Birth</th>
//             <th>Phone</th>
//             <th>Email</th>
//             {viewPage && <th colSpan={2}>Actions</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((userData, index) => (
//             <tr key={index}>
//               <td>{userData.fullName}</td>
//               <td>{userData.dateOfBirth}</td>
//               <td>{userData.phoneNumber}</td>
//               <td>{userData.email}</td>
//               {viewPage && (
//                 <td>
//                   <button>Edit</button>
//                 </td>
//               )}
//               {viewPage && (
//                 <td>
//                   <button>Delete</button>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewDetails;

import UserData from "../userData/UserData";

const ViewDetails = () => {
  return (
    <>
      <div className="user-container">
        <UserData editPage={false} />
      </div>
    </>
  );
};

export default ViewDetails;
