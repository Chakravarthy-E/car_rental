import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import {useNavigate} from "react-router-dom"

function CarDetailsPage() {
  const navigate = useNavigate()
  const [carData, setCarData] = useState([]);
  function hanldeClick(car) {
      navigate("/bookingdetails",{car})
  }

  useEffect(() => {
    // Simulating fetching car data from an API
    const fetchData = async () => {
      // Delay the response to simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake car data
      const fakeData = [
        {
          id: 1,
          name: 'Car 1',
          type: 'Sedan',
          seatingCapacity: 4,
          mileage: '20 Km/L',
          pricePerKm: 'Rs. 10',
          image: 'https://example.com/car1.jpg',
        },
        {
          id: 2,
          name: 'Car 2',
          type: 'SUV',
          seatingCapacity: 7,
          mileage: '15 Km/L',
          pricePerKm: 'Rs. 15',
          image: 'https://example.com/car2.jpg',
        },
        // Add more fake data as needed
      ];

      setCarData(fakeData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <h3 className='text-center'>Book the car</h3>
      <div className="row">
        {carData.map((car) => (
          <div className="col-lg-4 col-md-6 mb-4 mx-3" key={car.id}>
            <div className="card">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title text-dark font-weight-bold">{car.name}</h5>
                <p className="card-text small text-dark">Type: {car.type}</p>
                <p className="card-text small text-dark">Seating Capacity: {car.seatingCapacity}</p>
                <p className="card-text small text-dark">Mileage: {car.mileage}</p>
                <p className="card-text small text-dark">Price per Kilometer: {car.pricePerKm}</p>
                {/* Add more details as needed */}
                <button className="btn btn-primary" onClick={()=>hanldeClick(car)}>BookNow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarDetailsPage;
