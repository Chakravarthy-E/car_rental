import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CarList from "../Car/CarList";

const OrderPage = () => {
  return (
    <div style={{backgroundColor:"#F1F6F9"}}>
      <Nav />
      <Header />
      <CarList />
    </div>
  );
};

export default OrderPage;
