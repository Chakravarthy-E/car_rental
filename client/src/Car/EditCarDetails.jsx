
import React, { useEffect } from "react";
import Nav from "../components/Nav";
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

        <li >Car Name <span className="text-secondary">:{data.name}</span></li>
        <li>Car Model <span className="text-secondary">:{data.model}</span></li>
       <Image cloudName="dw5v3efs6" publicId={data.image} width="300" crop="scale" />
        <hr />
        <li>Origin: <span className="text-secondary"> {inputdata.origin}</span></li>
        <li>Destination: <span className="text-secondary">{inputdata.destination}</span></li>
        <li>StartDate: <span className="text-secondary">{inputdata.startDate}</span></li>
        <li>EndDate: <span className="text-secondary">{inputdata.endDate}</span></li>
        <hr />
        <li>Booking Date: <span className="text-secondary">{currentDate}</span></li>
        <li>Booking Time: <span className="text-secondary">{currentTime}</span></li>
      </ul>
    </div>
  );
};


const PaymentDetails = ({ currentDate, currentTime }) => {
  const navigate = useNavigate();
  const { data, bookingDetails, setBookingDetails, inputdata } = useContext(
    CarContextDetails
  );

  const {
    carid,
    name,
    type,
    image,
    model,
    origin,
    destination,
    startdate,
    enddate,
  } = data;

  const handleClick = async () => {
    try {
      const newBooking = {
        carid,
        name,
        type,
        image,
        model,
        origin,
        destination,
        startdate,
        enddate,
        currentDate,
        currentTime,
      };

      // Add the new booking to the bookingDetails array
      setBookingDetails((prevBookingDetails) => [...prevBookingDetails, newBooking]);

      // Send the booking data to the server
      await axios.post("https://car-rental-app222.onrender.com/bookcar", newBooking, {
        withCredentials: true,
      });

      navigate("/mybookings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment-details" style={{marginTop:"-280px"}}>
      <h3>Payment Details</h3>
      <ul>
      <li>Price/Km: <span className="text-secondary"> {data.perKm}</span></li>
      <li>Pricing:  <span className="text-secondary">{data.perKm * 3}</span></li>
      <li>Tax charges:<span className="text-secondary">{50}</span></li>
      <li>Grand Total:<span className="text-success">{data.perKm * 3 + 50}</span></li>
      </ul>
      <button className="rounded" onClick={handleClick}>
        Proceed
      </button>
    </div>
  );
};


const EditCarDetails = () => {



    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
  return (
    <>
     <Nav />
    <div className="booking-details" style={{backgroundColor:"#F1F6F9"}}>
    <h3 className="mx-3">Edit Car Details</h3>
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
}

export default EditCarDetails;
