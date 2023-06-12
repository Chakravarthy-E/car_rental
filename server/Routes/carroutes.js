const { Router }=require('express');
const {AddCar,EditCar,DeleteCar,GetAllCar,GetAdminCar}=require("../controller/carcontroller");
const requireAuth=require("../Middleware/token")
//const carDetails=require("../model/car");

const Carroutes=Router();


Carroutes.get('/getallcar',requireAuth,GetAllCar)
Carroutes.post('/addcar',requireAuth,AddCar)
Carroutes.post('/editcar',requireAuth,EditCar)
Carroutes.post('/deletecar',requireAuth,DeleteCar)
Carroutes.get('/getadmincar',requireAuth,GetAdminCar)
// authroutes.post('/adminlogin',Adminlogin)

module.exports = Carroutes 