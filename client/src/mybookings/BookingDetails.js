// BookingDetails.js
import React from "react";
import Nav from "../components/Nav";
import "./styles/bookingdetails.css";
import { useNavigate } from "react-router-dom";

const CarDetails = ({ car }) => {
  return (
    <div className="car-details">
      <h3>Car Details</h3>
      <ul>
        <li>Car Name: {car.name}</li>
        <li>Car Model: {car.model}</li>
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <hr />
        <li>Origin:</li>
        <li>Destination:</li>
        <li>StartDate:</li>
        <li>EndDate:</li>
        <hr />
        <li>BookingId:</li>
        <li>Booking Date:</li>
        <li>Booking Time:</li>
      </ul>
    </div>
  );
};

const PaymentDetails = ({ car }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mybookings", { state: { car } });
  };

  return (
    <div className="payment-details">
      <h3>Payment Details</h3>
      <ul>
        <li>Price/Km:</li>
        <li>Distance:</li>
        <li>SubTotal:</li>
        <li>Tax:</li>
        <li>Grand Total:</li>
        <li>RS:</li>
      </ul>
      <button className="rounded" onClick={handleClick}>
        Proceed
      </button>
    </div>
  );
};

const BookingDetails = () => {
  const car = {
    id: 1,
    name: "Car 1",
    model: "XYZ",
  };

  return (
    <>
      <Nav />
      <div className="booking-details">
        <div className="container">
          <div className="left-side">
            <CarDetails car={car} />
          </div>
          <div className="right-side">
            <PaymentDetails car={car} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
