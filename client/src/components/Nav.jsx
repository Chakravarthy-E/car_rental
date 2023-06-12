import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/nav.css";
// Import the CSS file for styling

const Nav = () => {
  const navigate = useNavigate();

  function logOutHandler() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="nav-container">
      <div className="logo">Car Rental App</div>
      <div className="links d-flex justify-content-center align-items-center gap-2">
        <Link to="/mybookings" className="link">
          My Bookings
        </Link>
        <button className="text-light rounded" onClick={logOutHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default Nav;
