import React from "react";
import UserSignIn from "../user/UserSignIn.js";
import UserSignUp from "../user/UserSignUp.js";
import AdminLogin from "../admin/AdminLogin.js";
import Navigation from "./Navigation.jsx";
import { useState } from "react";
import "../components/styles/home.css";
import AdminSignUp from "../admin/AdminSignUp.js";

const Home = () => {
  const [FormType, setFormType] = useState(<UserSignIn />);

  function usersignup() {
    setFormType(<UserSignUp />);
  }

  function userlogin() {
    setFormType(<UserSignIn />);
  }

  function Adminlogin() {
    setFormType(<AdminLogin />);
  }
  function Adminsignup(){
    setFormType(<AdminSignUp />)
  }

  return (
    <div className="font-poppins">
      <Navigation />
      <div className="Home-page">
        <div className="Register">
          <p className="slogan">
            All you needed was a wheel in Your hand and four on the road.
          </p>
          <div className="user">
            <p className="text-light">User</p>
            <div className="button-user-admin-login-containecr">
              <button className="button-50" onClick={userlogin}>
                {" "}
                User Login{" "}
              </button>
              <button className="button-50" onClick={usersignup}>
                {" "}
                User Signup
              </button>
            </div>
          </div>
          <div className="Admin">
            <p>Admin</p>
            <div className="button-user-admin-login-containecr">
              <button className="button-50" onClick={Adminlogin}>
                Admin login
              </button>
              <button className="button-50" onClick={Adminsignup}>
                Admin signup
              </button>
            </div>
          </div>
        </div>
        <div className="form-type">{FormType}</div>
      </div>
    </div>
  );
};

export default Home;
