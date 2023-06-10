import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/destination.css";
import Nav from "../components/Nav.jsx";

const Destination = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct the URL with query parameters
    const queryParams = new URLSearchParams(formData).toString();
    // Redirect to the render page with the query parameters
    navigate(`/render?${queryParams}`);
  };

  return (
    <div className="destination">
      <Nav />

      <div className="container">
        <h1>Life is a journey, enjoy the trip</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Origin Name"
            className="fields"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Destination Name"
            className="fields"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            placeholder="Starting Date"
            className="fields"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            placeholder="End Date"
            className="fields"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />

          <button type="submit" className="fields">
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Destination;
