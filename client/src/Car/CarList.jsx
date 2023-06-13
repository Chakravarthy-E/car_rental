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

  const { data ,setData } = useContext(CarContextDetails);

  useEffect(() => {
    console.log("data",data); // Log the updated data value
  }, [data]);



  const [Cars,setCars]=useState([]);


  useEffect(()=>{

    async function Allcar(){

      try{
        const value = await axios.get("http://localhost:5000/getallcar",{withCredentials:true})
        console.log(value);
        setCars(value.data);
      }
      catch(error){
        console.log("CarList",error);
      }
    }
    Allcar();
  },[])

  // useEffect(()=>{

  //   async function Allcartype(){

  //     if (filterType === "All") {
  //       return ;
  //     }

  //     try{
  //       const data = await axios.post("http://localhost:5000/filtercar",{filterType},{withCredentials:true})
  //       console.log(data);
  //     }
  //     catch(error){
  //       console.log("CarList",error);
  //     }
  //   }
  //   Allcartype();
  // },[filterType])

  // const handleFilterChange = (event) => {
  //   setFilterType(event.target.value);
  // };


  function handleFilterChange(e) {

    setfilterType(e.target.value);
    const type = Cars.filter(d => d.model === e.target.value)
  
    if (e.target.id === "All") {
      setfilterType(data);
    } 
    else if (type.length !== 0) {
      setfilterType(type);
      setCars([...type]);
    } 
  }

  const navigate = useNavigate();  

  const handleBookNow = (car,i) => {
    // Navigate to the car details page
    console.log("carlist",car._id,i)
  
    setData({
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
          UV
        </label>
      </div>
      <div className="car-list-container">
        <h2>Car List</h2>
        <div className="car-list">
          {Cars.map((car,index) => (
            <div key={car._id} className="card">
              {console.log(car)}
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
