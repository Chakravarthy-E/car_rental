import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/carlist.css"; // Import the CSS file
import { CarContextDetails } from "../context/CarContext";
import { useContext } from "react";
import axios from "axios";
import AllImageCloudinary from "../Cloudinary/Allimagescloudinary";
import { Image } from "cloudinary-react";
import { Dropdown } from "react-bootstrap";
import { useCookies } from "react-cookie";

const CarList = () => {
  const [filterType, setFilterType] = useState("All");
  const { data, setData, inputdata, setInputData } = useContext(CarContextDetails);
  const [Cars, setCars] = useState([]);
  const navigate = useNavigate();
  
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  useEffect(() => {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Store the data in local storage whenever it changes
    if (data) {
      localStorage.setItem('myData', JSON.stringify(data));
    }
  }, [data]);
  
  useEffect(() => {
    async function fetchAllCars() {
      try {
        const response = await axios.get("https://car-rental-app222.onrender.com/getallcar", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setCars(response.data);
      } catch (error) {
        console.log("CarList", error);
      }
    }
    fetchAllCars();
  }, []);

  function handleFilterChange(value) {
    setFilterType(value);
    const filteredCars = Cars.filter((car) => {
      if (value === "All") {
        return true;
      } else {
        return car.model === value;
      }
    });
    setCars(filteredCars);
  }

  const handleBookNow = (car, i) => {
    setData({
      carid: car._id,
      name: car.name,
      type: car.cartype,
      model: car.model,
      milage: car.milage,
      image: car.images,
      availableFrom: car.availableFrom,
      availableTill: car.availableTill,
      perKm: car.perKm,
      description: car.description,
      carDetails: car.carDetails,
      Details: car.Details,
    });
    navigate(`/bookingdetails`);
  };

  return (
    <>
      <div className="filter-section d-flex align-items-center">
        <h6 className="mx-3 my-1">Car Type</h6>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="carTypeDropdown">
            {filterType === "All" ? "All" : "Filter by Type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="All"
              active={filterType === "All"}
              onClick={() => handleFilterChange("All")}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="SUV"
              active={filterType === "SUV"}
              onClick={() => handleFilterChange("SUV")}
            >
              SUV
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="UV"
              active={filterType === "UV"}
              onClick={() => handleFilterChange("UV")}
            >
              UV
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="container">
        <div className="row">
          {Cars.map((car, index) => (
            <div key={car._id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-image">
                  <Image
                    cloudName="dw5v3efs6"
                    publicId={car.images}
                    width="300"
                    crop="scale"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <p className="card-text">Car model: {car.model}</p>
                  <p className="card-text">Mileage: {car.milage}</p>
                  <p className="card-text text-success">Per Km: {car.perKm}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBookNow(car, index)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarList;
