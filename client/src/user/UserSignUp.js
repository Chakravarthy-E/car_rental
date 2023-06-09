import React from "react";
import "./styles/signup.css";
const UserSignUp = () => {
  return (
    <div>
      <form>
        <h4 className="text-light">Register your Account</h4>
        <input type="text" name="Name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="contact" placeholder="Contact" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="Confirm_Password"
          placeholder="Confirm Password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default UserSignUp;
