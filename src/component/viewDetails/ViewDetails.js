import "./viewDetails.css";
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
