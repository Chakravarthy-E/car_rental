import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarContextDetails } from "../context/CarContext";
import Nav from "../components/Nav";
import { Image } from "cloudinary-react";

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookingDetails, setBookingDetails } = useContext(CarContextDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBooking, setEditedBooking] = useState(null);

  const handleEdit = (booking) => {
    setIsEditing(true);
    setEditedBooking(booking);
    navigate(`/editcar/${booking.carid}`);
  };

  const handleSave = async () => {
    try {
     
      setBookingDetails((prevBookingDetails) => {
        const updatedBookingDetails = prevBookingDetails.map((booking) => {
          if (booking === editedBooking) {
            return {
              ...booking,
              
            };
          }
          return booking;
        });
        return updatedBookingDetails;
      });

      setIsEditing(false);
      setEditedBooking(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedBooking(null);
  };

  const handleCancel = (booking) => {
    // Add your cancellation logic here

    // Remove the canceled booking from the booking details array
    setBookingDetails((prevBookingDetails) =>
      prevBookingDetails.filter((item) => item !== booking)
    );
  };

  return (
    <div className="my-bookings">
      <Nav />
      <div className="booking-details" style={{backgroundColor:"#F1F6F9" ,height:"100vh"}}>
        <h2>My Booking Details</h2>
        {bookingDetails.map((booking) => (
          <div key={booking.bookingId} className="card mb-3 mx-5">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  cloudName="dw5v3efs6"
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
              {isEditing && booking === editedBooking ? (
                <>
                  <button className="btn btn-primary me-2" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-primary me-2" onClick={() => handleEdit(booking)}>
                    Edit
                  </button>
                  <button className="btn btn-info" onClick={() => handleCancel(booking)}>
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
