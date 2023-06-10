import React, { useState } from "react";
import "./styles/addcar.css";
import axios from "axios";
import Nav from "./Nav";

const AddCar = () => {
  const [name, setname] = useState("");
  const [cartype, setcartype] = useState("");
  const [model, setmodel] = useState("");
  const [milage, setmilage] = useState("");
  const [perKm, setperKM] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableTill, setAvailableTill] = useState("");
  const [description, setdescription] = useState("");
  const [images, setimages] = useState([]);
  const [carDetails, setCarDetails] = useState("");
  const [Details, setDetails] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setimages([...images, ...files]);
    console.log(images);
  };

  const handleImageDelete = (index) => {
    const newCarImages = [...images];
    newCarImages.splice(index, 1);
    setimages(newCarImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission or data saving here

    let img = [];
    for (let i = 0; i < images.length; i++) {
      let x = URL.createObjectURL(images[i]);
      img.push({ x });
    }

    console.log(img);

    try {
      console.log(images, URL.createObjectURL(images[0]));
      const data = await axios.post(
        "http://localhost:5000/addcar",
        {
          name,
          cartype,
          model,
          milage,
          perKm,
          availableFrom,
          availableTill,
          description,
          img,
          carDetails,
          Details,
        },
        { withCredentials: true }
      );
      console.log(data);
      if (data.status == 201) {
        alert("Added sucessfully");
        setDetails("");
        setCarDetails("");
        setimages([]);
        setdescription("");
        setAvailableTill("");
        setAvailableFrom("");
        setperKM("");
        setname("");
        setcartype("");
        setmodel("");
        setmilage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    // Handle cancel action here
  };

  return (
    <>
      <Nav />
      <div className="add-car-details-container">
        <div className="left-section">
          <h1>Add Car Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="carName">Car Name:</label>
              <input
                type="text"
                id="carName"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carType">Type:</label>
              <input
                type="text"
                id="carType"
                value={cartype}
                onChange={(e) => setcartype(e.target.value)}
              />
              <label htmlFor="carModel">Model:</label>
              <input
                type="text"
                id="carModel"
                value={model}
                onChange={(e) => setmodel(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carMilage">Milage:</label>
              <input
                type="text"
                id="carMilage"
                value={milage}
                onChange={(e) => setmilage(e.target.value)}
              />
              <label htmlFor="carPerKM">Per KM:</label>
              <input
                type="text"
                id="carPerKM"
                value={perKm}
                onChange={(e) => setperKM(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="availableFrom">Available from:</label>
              <input
                type="date"
                id="availableFrom"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
              />
              <label
                htmlFor="availableTill"
                style={{ marginTop: "10px", display: "block" }}
              >
                Available till:
              </label>
              <input
                type="date"
                id="availableTill"
                value={availableTill}
                onChange={(e) => setAvailableTill(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carDescription">Description:</label>
              <textarea
                id="carDescription"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-buttons">
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="vertical-line"></div>
        <div className="right-section">
          <div className="image-upload-section">
            <h2>Images</h2>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <div className="image-preview">
              {images.map((image, index) => (
                <div className="image-item" key={index}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Car Image ${index + 1}`}
                  />
                  <button
                    className="delete-button"
                    onClick={() => handleImageDelete(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="details-section">
            <h2>Car Details</h2>
            <textarea
              value={carDetails}
              onChange={(e) => setCarDetails(e.target.value)}
            ></textarea>
            <h2>Owner Details</h2>
            <textarea
              value={Details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCar;
