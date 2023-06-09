import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"; // Import the CSS file for styling

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo">Car Rental App</div>
      <div className="links">
        <Link to="/mybookings" className="link">My Bookings</Link>
        <Link to="/" className="link" onClick={() => localStorage.clear()}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Nav;
