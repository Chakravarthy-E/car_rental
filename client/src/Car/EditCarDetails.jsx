import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CarContextDetails } from "../context/CarContext";
import Nav from "../components/Nav";
const EditCarDetails = () => {
  const navigate = useNavigate();
  const { car, setCar } = useContext(CarContextDetails);
  const { carid } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    model: "",
    milage: "",
    availableForm: "",
    availableTill: "",
    perKm: "",
    description: "",
    carDetails: "",
    Details: "",
  });
  useEffect(() => {
    // Fetch the car details based on the carid from the context or server
    const carDetails = car.find((car) => car.carid === carid);
    if (carDetails) {
      setFormData(carDetails);
    } else {
      // Handle car not found scenario
    }
  }, [car, carid]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the update operation, e.g., sending the updated car details to the server
    // Update the car details in the context
    setCar((prevCar) => {
      const updatedCar = prevCar.map((car) => {
        if (car.carid === carid) {
          return { ...car, ...formData };
        }
        return car;
      });
      return updatedCar;
    });
    navigate(`/mybookings`);
  };
  return (
    <>
    <Nav />
    <div className="edit-car-details" style={{backgroundColor:"#F1F6F9",height:"100vh"}}>
      <h2 className="text-center">Edit Car Details</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label ">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label ">Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          {/* Add other car details input fields */}
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
    </>
  );
};
export default EditCarDetails;