import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
import { CarContextDetails } from "../context/CarContext";
import { useEffect } from "react";

const Header = () => {

  const { headerData, setheaderData, setInputData,setData,inputdata } = useContext(CarContextDetails);
  
  // setInputData(headerData);

  // useEffect(() => {
  //   // Load data from local storage on component mount
  //   const savedData = window.localStorage.getItem("my_data");
  //   console.log("savedData",savedData)
  //   if (savedData) {
  //     setInputData(JSON.parse(savedData));
  //   }
  // }, []);


  return (
    <div id="header">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item text-dark">
            Orgin:  <span className="text-secondary">{inputdata.origin}</span>
            <i
              className="fa-solid fa-arrowo-right"
              style={{ color: "red" }}
            ></i>
          </li>
          <li className="list-inline-item text-dark">
            Destination: 
            <span className="text-secondary">{inputdata.destination}</span>
          </li>
          <li className="list-inline-item text-dark">
            Starting Date: <span className="text-secondary">{inputdata.startdate}</span>
          </li>
          <li className="list-inline-item text-dark">
            End Date: <span className="text-secondary">{inputdata.enddate}</span>
          </li>
          </ul>
          <Link className="btn btn-primary" id="modify" to='/destination' onClick={()=>setheaderData(headerData)}>Modify</Link>
      
      </div>
    </div>
  );
};

export default Header;
