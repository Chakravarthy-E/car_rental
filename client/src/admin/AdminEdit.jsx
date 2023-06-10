import React, { useState } from 'react';

const AdminEdit = () => {
  const [carDetails, setCarDetails] = useState({
    id: 1,
    name: 'Car 1',
    brand: 'Brand 1',
    mileage: '20/KM',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update of car details using the updated values in carDetails state
    console.log('Car details updated:', carDetails);
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={carDetails.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={carDetails.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminEdit;
