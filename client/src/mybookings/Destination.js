import React from "react";
import "./styles/destination.css"
import Nav from "../components/Nav.jsx";

const Destination = () => {
  return (
    <div className="destination">
    <Nav />

      <div className="container">
        <h1>Life is a journey, enjoy the trip</h1>
        <form>
          <input
            type="text"
            placeholder="Orgin Name"
            className="fields"
            name="origin"
            required
          ></input>
          <input
            type="text"
            placeholder="Destination Name"
            className="fields"
            name="destination"
            required
          ></input>

          <input
            type="date"
            placeholder="Starting Date"
            className="fields"
            name="startDate"
            required
          ></input>

          <input
            type="date"
            placeholder="End Date"
            className="fields"
            name="endDate"
            required
          ></input>
          <button type="submit" className="fields">
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Destination;
