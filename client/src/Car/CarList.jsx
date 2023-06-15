import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/carlist.css"; // Import the CSS file
import { CarContextDetails } from "../context/CarContext";
import { useContext } from "react";
import axios from "axios";
import AllImageCloudinary from "../Cloudinary/Allimagescloudinary";
import { Image } from 'cloudinary-react';


const CarList = () => {
  const [filterType, setfilterType] = useState("All");

  const { bookingDetails ,setBookingDetails,setCar,Car } = 
  useContext(CarContextDetails);

  const [filtercar , setfiltercar]= useState(Car)


  useEffect(()=>{

    async function Allcar(){

      try{
        const value = await axios.get("http://localhost:5000/getallcar",{withCredentials:true})
        //console.log(value);
        setCar(value.data);
      }
      catch(error){
        console.log("CarList",error);
      }
    }
    Allcar();
    
  },[])

  useEffect(()=>{
    console.log("from CarList",Car);
    setfiltercar(Car);
  },[Car])


  useEffect(() => {
    // Save data to local storage whenever it changes
    const booking=window.localStorage.setItem('bookingdata', JSON.stringify(bookingDetails));
    //console.log(data);
  },[bookingDetails]);

  useEffect(() => {
    // Save data to local storage whenever it changes
    const allcardetails=window.localStorage.setItem('allcarlist', JSON.stringify(Car));
    console.log('allcardetails',allcardetails);
  },[]);


  function handleFilterChange(e) {

    console.log(e.target.value);

    setfilterType(e.target.value);
    const type = Car.filter(d => d.model === e.target.value)
  
    if (e.target.value === "All") {
      console.log("if")
      //setfilterType(filterType);
      setfiltercar(Car)
    } 
    else if (type.length !== 0) {
      console.log("else if")
      //setfilterType(type);
      setfiltercar([...type]);
    } 
  }

  const navigate = useNavigate();  

  const handleBookNow = (car,i) => {
    // Navigate to the car details page
    //console.log("carlist",car._id,i)
  
    setBookingDetails({
    carid:car._id,  
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
    Details: car.Details
  })

    navigate(`/bookingdetails`);
  };

  // const filteredCars = cars.filter((car) => {
  //   if (filterType === "All") {
  //     return true;
  //   } else {
  //     const carType = car.brand ? car.brand.toLowerCase() : "";
  //     return carType === filterType.toLowerCase();
  //   }
  // });

  

  return (
    <>
      <div className="filter-section">
      <h6 className="mx-3 my-1">Car Type</h6>
        <label>
          <input
            type="checkbox"
            value="All"
            checked={filterType === "All"}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            value="XUV"
            checked={filterType === "XUV"}
            onChange={handleFilterChange}
          />
          XUV
        </label>
        <label>
          <input
            type="checkbox"
            value="SUV"
            checked={filterType === "SUV"}
            onChange={handleFilterChange}
          />
          SUV
        </label>
      </div>
      <div className="car-list-container">
        <h2>Car List</h2>
        <div className="car-list">
          {filtercar.map((car,index) => (
            <div key={car._id} className="card">
              {/* {console.log(car)} */}
              {/* <img src={car.image} alt={car.name} /> */}

              <Image cloudName="dtyutg5l9" publicId={car.images} width="300" crop="scale" />
              
              {/* <AllImageCloudinary  carname={car.name} carmodel={car.model} seturl={setimgurl} url={imgurl}/> */}
              <div className="car-details">
                <h3 className="text-dark small text-left">{car.name}</h3>
                <p className="text-secondary small">Car Type: {car.cartype}</p>
                <p className="text-success small">Mileage: {car.milage}</p>
                <button onClick={() => handleBookNow(car,index)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarList;
