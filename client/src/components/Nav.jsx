import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/nav.css";
import axios from "axios";
// Import the CSS file for styling

const Nav = () => {
  const navigate = useNavigate();

  async function logOutHandler() {

    try{
      const value = await axios.get("http://localhost:5000/logoutuser",{withCredentials:true})
    }
    catch(error){
        console.log(error)  
    }
    // localStorage.clear();
    //navigate("/");
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
