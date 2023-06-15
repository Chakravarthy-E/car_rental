const { Router }=require('express');
const {Addtocart,Editcart,Deletecart}=require("../controller/bookingcontroller");
const {GetAllCar}=require("../controller/carcontroller");
const requireAuth=require("../Middleware/token")
//const carDetails=require("../model/car");

const bookingroutes=Router();

// User routes
bookingroutes.get('/getallcar',requireAuth,GetAllCar)
bookingroutes.post('/bookcar',Addtocart) ;
bookingroutes.post('/editcar',Editcart)
bookingroutes.post('/deletecar',requireAuth,Deletecart)
// Carroutes.post('/deletecar',requireAuth,DeleteCar)
// Carroutes.get('/getadmincar',requireAuth,GetAdminCar)

module.exports=bookingroutes