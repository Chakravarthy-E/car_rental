
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/carlist.css"; // Import the CSS file
import { CarContextDetails } from "../context/CarContext";
import { useContext } from "react";
import axios from "axios";
import AllImageCloudinary from "../Cloudinary/Allimagescloudinary";
import { Image } from 'cloudinary-react';
import { Dropdown } from "react-bootstrap";


const CarList = () => {
  const [filterType, setfilterType] = useState("All");


  const { data ,setData,inputdata,setInputData } = useContext(CarContextDetails);

  useEffect(() => {
    const savedData = localStorage.getItem("inputdata");
    if (savedData) {
      setInputData(JSON.parse(savedData));
    }
    console.log(inputdata)
  }, []);

  const { data ,setData } = useContext(CarContextDetails);
  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getallcar", {
      authorization: JSON.parse(localStorage.getItem("token-user ")),
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);



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
  
  const handleFilterChange = (eventKey, event) => {
    setFilterType(eventKey);
  };

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

    //navigate(`/bookingdetails`);
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
