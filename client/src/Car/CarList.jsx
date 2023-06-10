import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles/carlist.css"; // Import the CSS file

const CarList = () => {
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Car 1",
      brand: "Brand 1",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 2,
      name: "Car 2",
      brand: "Brand 2",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 3,
      name: "Car 3",
      brand: "Brand 3",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
    {
      id: 4,
      name: "Car 3",
      brand: "Brand 3",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      mileage: "20/KM",
    },
  ];

  const handleBookNow = (carId) => {
    // Navigate to the car details page
    navigate(`/cardetails/${carId}`);
  };

  return (
    
    <div className="car-list-container">
      <h2>Car List</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-item">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <h3>{car.name}</h3>
              <p className="text-dark">Brand: {car.brand}</p>
              <p className="text-success">{car.mileage} miles</p>
              <button
                className="btn btn-primary"
                onClick={() => handleBookNow(car.id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
