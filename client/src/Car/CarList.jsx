import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/carlist.css"; // Import the CSS file
import { Dropdown } from "react-bootstrap";

const CarList = () => {
  const [filterType, setFilterType] = useState("All");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getallcar", {
      authorization: JSON.parse(localStorage.getItem("token-user ")),
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleFilterChange = (eventKey, event) => {
    setFilterType(eventKey);
  };

  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Car 1",
      brand: "XUV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 2,
      name: "Car 2",
      brand: "XUV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 3,
      name: "Car 3",
      brand: "UV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 4,
      name: "Car 4",
      brand: "UV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 5,
      name: "Car 5",
      brand: "XUV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 6,
      name: "Car 6",
      brand: "UV",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
  ];

  const handleBookNow = (carId) => {
    // Navigate to the car details page
    navigate(`/bookingdetails`);
  };

  const filteredCars = cars.filter((car) => {
    if (filterType === "All") {
      return true;
    } else {
      const carType = car.brand ? car.brand.toLowerCase() : "";
      return carType === filterType.toLowerCase();
    }
  });

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
              eventKey="XUV"
              active={filterType === "XUV"}
              onClick={() => handleFilterChange("XUV")}
            >
              XUV
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
      <div className="car-list-container">
        <h2>Car List</h2>
        <div className="car-list">
          {filteredCars.map((car) => (
            <div key={car.id} className="card">
              <img src={car.image} alt={car.name} />
              <div className="car-details">
                <h3 className="text-dark small text-left">{car.name}</h3>
                <p className="text-secondary small">Car Type: {car.brand}</p>
                <p className="text-success small">Mileage: {car.mileage}</p>
                <button onClick={() => handleBookNow(car.id)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarList;
