import { useEffect, useState } from "react";
import Nav from "./Nav";
import car_data from "./car_data";
import "./styles/helloadmin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Image } from 'cloudinary-react';

function HelloAdmin() {
  const [carData, setCarData] = useState([]);
  const [adminId, setAdminId] = useState("");

  const navigate = useNavigate();

  const addCar = () => {
    navigate("/addcar");
  };

  useEffect(() => {
    async function fetchAdminCarData() {
      try {
        const response = await axios.get("https://car-rental-app222.onrender.com/getadmincar", {
          withCredentials: true,
        });
        const dataWithId = response.data.map((car) => ({
          ...car,
          id: car._id, // Assuming the unique identifier is stored in the _id field
        }));
        console.log("admincar", response.data);
        setCarData(dataWithId);
        setAdminId(dataWithId.AdminId);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAdminCarData();
  }, []);

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


      <div id="container" style={{ margin: "30px" }}>
        {carData.map((value) => (
          <div id="card" key={value.id}  style={{textDecorationLine:"none"}}>
            <Link to="/edit-car/:Id">
              <div id="img">
                <Image cloudName="dw5v3efs6" publicId={value.images} width="300" crop="scale" />
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelloAdmin;
