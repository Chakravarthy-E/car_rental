import React, { useState, useEffect } from 'react';
import './styles/editcar.css';

function EditCarDetails({ carId }) {
  const [carData, setCarData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCarData, setUpdatedCarData] = useState({});

  useEffect(() => {
    // Fetch car details based on the carId
    fetch(`https://car-rental-app-server.onrender.com/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCarData(data));
  }, [carId]);

  const handleInputChange = (e) => {
    setUpdatedCarData({
      ...updatedCarData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setUpdatedCarData(carData);
  };

  const handleSaveClick = () => {
    // Make API call to update car details with updatedCarData
    fetch(`https://car-rental-app-server.onrender.com/cars/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCarData),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        setIsEditing(false);
      });
  };

  return (
    <div className="edit-car-details-container">
      {isEditing ? (
        <div className="edit-form">
          <label>Car Name:</label>
          <input
            type="text"
            name="name"
            value={updatedCarData.name || ''}
            onChange={handleInputChange}
          />
          <br />
          <label>Car Type:</label>
          <input
            type="text"
            name="type"
            value={updatedCarData.type || ''}
            onChange={handleInputChange}
          />
          <br />
          <label>Mileage:</label>
          <input
            type="text"
            name="mileage"
            value={updatedCarData.mileage || ''}
            onChange={handleInputChange}
          />
          <br />
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <div className="car-details">
          <p>Car Name: <span className="car-data">{carData.name}</span></p>
          <p>Car Type: <span className="car-data">{carData.type}</span></p>
          <p>Mileage: <span className="car-data">{carData.mileage}</span></p>
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditCarDetails;
