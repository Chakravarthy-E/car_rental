import { useEffect, useState } from "react";
import Nav from "./Nav";
import car_data from "./car_data";
import "./styles/helloadmin.css";

import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CloudinaryImage from "../Cloudinary/cloudinaryimage";
import { Image } from 'cloudinary-react';

function HelloAdmin() {

  const [car_data,setcar_data] = useState([])
  const [adminid,setadminid]= useState("");
  
  const navigate = useNavigate();
  
  const addCar = () => {
    navigate("/addcar");
  };

  useEffect(()=>{
     
      async function admincar(){

        try{
          const admincar=await axios.get("http://localhost:5000/getadmincar",{withCredentials:true});
          console.log("admincar",admincar.data)
          setcar_data(admincar.data);
          setadminid(admincar.data[0].AdminId)
        }
        catch(error){
            console.log(error);
        }
      }

      admincar();

  },[])





  return (
    <div>
      <Nav />
      <div style={{ marginBottom: "20px", marginLeft: "30px" }}>
        <p className="text-dark"></p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "30px",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Hello Admin</h2>
          <button id="a-adminpage-butt" className="rounded" onClick={addCar}>
            Add Cars
          </button>
        </div>
      </div>

      <div id="container" style={{margin:"30px"}}>
        {car_data.map((value,index) => (
          <div id="card" key={index}>
            {/* {console.log(value)} */}

            <div id="img">
              {/* <img
                src={value.image}
                style={{ width: "280px", margin: "5px" }}
              /> */}
              <Image cloudName="dtyutg5l9" publicId={value.images} width="300" crop="scale" />
            </div>
            <div id="details">
              <p className="text-dark">6 Person</p>
              <span>{value.cartype}</span>
              <span>{value.perKm} Rs/KM</span>

              <hr style={{ color: "#7C7C7C" }} />

              <div style={{ marginTop: "20px" }}>
                <span>Available date</span>
                <span>{value.availableFrom} - {value.availableTill}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HelloAdmin;