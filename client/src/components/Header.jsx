import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
import { CarContextDetails } from "../context/CarContext";

const Header = () => {

  const { headerData, setheaderData, setInputData,setData } = useContext(CarContextDetails);
  
  setInputData(headerData);


  return (
    <div id="header">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item text-dark">
            Orgin: <span className="text-secondary">{headerData.origin}</span>
            <i
              className="fa-solid fa-arrowo-right"
              style={{ color: "red" }}
            ></i>
          </li>
          <li className="list-inline-item text-dark">
            Destination:{" "}
            <span className="text-secondary">{headerData.destination}</span>
          </li>
          <li className="list-inline-item text-dark">
            Starting Date:{" "}
            <span className="text-secondary">{headerData.startDate}</span>
          </li>
          <li className="list-inline-item text-dark">
            End Date:{" "}
            <span className="text-secondary">{headerData.endDate}</span>
          </li>
          </ul>
          
          <Link className="btn btn-primary" id="modify" to='/destination' onClick={()=>setheaderData(headerData)}>Modify</Link>
      </div>
    </div>
  );
};

export default Header;
