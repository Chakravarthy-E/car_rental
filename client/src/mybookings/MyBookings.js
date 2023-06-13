// MyBookings.js
import React from "react";
import Nav from "../components/Nav";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const car = location.state.car && location.state.car;

  const editCar = () =>{
      navigate("/editcar/:id")
  }

  return (
    <div>
      <Nav />
      <div>
        <h3>Car Details</h3>
        <ul>
          <li>Car Name: {car.name}</li>
          <li>Car Model: {car.model}</li>
          {/* Add more car details here */}
        </ul>
      </div>
      <button className="btn btn-primary" onClick={editCar}>Edit</button>
    </div>
  );
};

export default MyBookings;
