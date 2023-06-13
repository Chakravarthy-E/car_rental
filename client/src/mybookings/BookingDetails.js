import React, { useEffect } from "react";
import Nav from "../components/Nav";
import "./styles/bookingdetails.css";
import { useNavigate } from "react-router-dom";
import { CarContextDetails } from "../context/CarContext";
import { useContext,useState } from "react";
import { Image } from 'cloudinary-react';
import axios from "axios";

const CarDetails = ({setCurrentDate,setCurrentTime,currentDate, currentTime}) => {

  const { data ,setData,inputdata,setInputData } = useContext(CarContextDetails);

  useEffect(() => {
    const savedData = localStorage.getItem(inputdata);
    if (savedData) {
      setInputData(JSON.parse(savedData));
    }
    console.log(inputdata)
  }, []);

    useEffect(() => {
      const now = new Date();
  
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    }, []);


  return (
    <div className="car-details">
      {console.log(data)}
      <h3>Car Details</h3>
      <ul>
        <li>Car Name:{data.name}</li>
        <li>Car Model:{data.model}</li>
        <Image cloudName="dtyutg5l9" publicId={data.image} width="300" crop="scale" />
       {/* <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" style={{width:"200px",height:"200px",objectFit:'cover'}} /> */}
        <hr />
        <li>Origin: {inputdata.origin}</li>
        <li>Destination: {inputdata.destination}</li>
        <li>StartDate:{inputdata.startDate}</li>
        <li>EndDate:{inputdata.endDate}</li>
        <hr />
        <li>BookingId:GOTSE8</li>
        <li>Booking Date: {currentDate}</li>
        <li>Booking Time: {currentTime}</li>
      </ul>
    </div>
  );
};

const PaymentDetails = ({currentDate,currentTime}) => {

  const navigate = useNavigate()

  const { data ,setData,inputdata, } = useContext(CarContextDetails);

  const{carid,name,type,model,milage,image,availableForm,
  availableTill,perKm,description,carDetails,Details,}= data;

  const{ origin,destination,startdate,enddate,}= inputdata

  const handleClick = async()=>{

    try{
      const book= await axios.post("http://localhost:5000/bookcar",{carid,name,type,image,model,
      origin,destination,startdate,enddate,currentDate,currentTime},{ withCredentials: true })
    }
    catch(error){

      console.log(error);
    }


      navigate("/mybookings")
  }
  return (
    <div className="payment-details">
      <h3>Payment Details</h3>
      <ul>
        <li>Price/Km:{data.perKm}</li>
        <li>Distance:100km</li>
        <li>SubTotal:</li>
        <li>Tax: 5%GST</li>
        <li>Grand Total:</li>
        <li>RS:</li>
      </ul>
      <button className="rounded" onClick={handleClick}>Proceed</button>
    </div>
  );
};

const BookingDetails = () => {


    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
  return (
    <>
<Nav />
    <div className="booking-details">
      <div className="container">
        <div className="left-side">
          <CarDetails setCurrentDate={setCurrentDate} setCurrentTime={setCurrentTime}
          currentDate={currentDate} currentTime={currentTime} />
        </div>
        <div className="right-side">
          <PaymentDetails currentDate={currentDate} currentTime={currentTime}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingDetails;
