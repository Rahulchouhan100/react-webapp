import React from "react";
import UserForm from "./userForm/UserForm";
import "./body.css";
import { Link } from "react-router-dom";
import ViewDetails from "./viewDetails/ViewDetails";

const Body = () => {
  return (
    <div>
      <nav className="navbar">
        <section>
          <h1>User</h1>
        </section>
        <section>
          <ul>
            <Link to="/" className="link">
              <li className="nav-item">User Form</li>
            </Link>
            <Link to="/viewdetails" className="link">
              <li className="nav-item">View Details</li>
            </Link>
            <Link to="/editdetails" className="link">
              <li className="nav-item">Edit Details</li>
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  );
};
export default Body;
