import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"; // Import the CSS file for styling
import axios from "axios";

const Nav = () => {

  async function logOutHandler() {

    console.log("hello")
  try{
    const value = await axios.get("http://localhost:5000/logoutuser",{withCredentials:true})
  }
  catch(error){
      console.log(error)  
  }
  // localStorage.clear();
}



  return (
    <div className="nav-container">
      <div className="logo">Car Rental App</div>
      <div className="links">
        <Link to="/" className="link" onClick={logOutHandler}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Nav;