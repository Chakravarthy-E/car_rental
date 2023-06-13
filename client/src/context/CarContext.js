import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CarContextDetails = createContext();

const CarContext = ({ children }) => {

  
  const [car, setCar] = useState([]);
  const [edit, setEdit] = useState({});
  const [headerData, setheaderData] = useState({});
  const [CarData, setCarData] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [BookData, setBookData] = useState([]);

  const [inputdata, setInputData] = useState({
    origin: "",
    destination: "",
    startdate: "",
    enddate: "",
    distance: "",
    MapImg: "",
  });

  const [data, setData] = useState({
    carid:"",
    name: "",
    type: "",
    model: "",
    milage: "",
    image: "",
    availableForm: "",
    availableTill: "",
    perKm: "",
    description: "",
    carDetails: "",
    Details: "",
  });

  const [EditPaymaentDatails, setEditPaymaentDatails] = useState({});

  useEffect(() => {
    // Load data from local storage on component mount
    const savedData = localStorage.getItem("inputdata");
    if (savedData) {
      setInputData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('inputdata', JSON.stringify(inputdata));
  }, [inputdata]);

  return (
    <>
      <CarContextDetails.Provider
        value={{
          car,
          setCar,
          data,
          setData,
          edit,
          setEdit,
          headerData,
          setheaderData,
          CarData,
          setCarData,
          bookingDetails,
          setBookingDetails,
          BookData,
          setBookData,
          EditPaymaentDatails,
          setEditPaymaentDatails,
          inputdata,
          setInputData,
        }}
      >
        {children}
      </CarContextDetails.Provider>
    </>
  );
};

export default  CarContext;
