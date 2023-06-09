import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignIn from "./user/UserSignIn";
import UserSignUp from "./user/UserSignUp";
import AdminLogin from "./admin/AdminLogin";
import AdminSignUp from "./admin/AdminSignUp";
import Destination from "./mybookings/Destination";
import PageNotFound from "./PageNotFound";

const Approutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersignin" element={<UserSignIn />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
        <Route path="/destionation" element={<Destination/>} />
        <Route path="/*" element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
};

export default Approutes;