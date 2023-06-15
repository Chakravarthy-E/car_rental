import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarContextDetails } from "../context/CarContext";
import Nav from "../components/Nav";
import { Image } from "cloudinary-react";
import axios from "axios";

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookingDetails, setBookingDetails } = useContext(CarContextDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [cancelBooking, setcancelBooking] = useState(false);

  useEffect(()=>{

    async function Mycart(){
  
      try{
        const data = await axios.get("http://localhost:5000/getallbookcar",{withCredentials:true})
        console.log("MyBookings",data);
        setBookingDetails([...data.data]);
        setcancelBooking(false);
      }
      catch(error){
        console.log("mybooking",error);
      }

      }

    Mycart()
    
  },[cancelBooking]) 

  

  const handleEdit = (booking) => {
    setIsEditing(true);
    //setEditedBooking(booking);
    navigate(`/editcar/${booking.carid}`);
  };

  const handleCancel = async (bookingid) => {
    // Add your cancellation logic here
    // Remove the canceled booking from the booking details array
    
    try{
      const data = await axios.post("http://localhost:5000/deletecar",{ bookingid} ,{withCredentials:true})
      console.log(data);
      setcancelBooking(true)

      
    }
    catch(error){
      console.log("mybooking",error);
    }

  };

  
  return (
    <div className="my-bookings">
      <Nav />
      <div className="booking-details" style={{backgroundColor:"#F1F6F9" ,height:"100vh"}}>
        <h2>My Booking Details</h2>
        { bookingDetails[0]  && bookingDetails.map((booking) => (
          <div key={booking._id} className="card mb-3 mx-5">
            <div className="row g-0">
              <div className="col-md-4">
              <Image
                  cloudName="dtyutg5l9"
                  publicId={booking.image}
                  width="300"
                  crop="scale"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {booking.name}</h5>
                  <p className="card-text">Model: {booking.model}</p>
                  {/* Display other booking details */}
                </div>
              </div>
            </div>
            <div className="card-footer">
                  <button className="btn btn-primary me-2" onClick={() => handleEdit(booking)}>
                    Edit
                  </button>
                  <button className="btn btn-info" onClick={() => handleCancel(booking._id)}>
                    Cancel
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
export default MyBookings;