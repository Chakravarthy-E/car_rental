const { Router }=require('express');
const {UserSignup,Userlogin,AdminSignup,Adminlogin}=require("../controller/authcontroller")
const requireAuth = require("../Middleware/token")

const authroutes=Router();

authroutes.post('/usersignup',UserSignup)
authroutes.post('/userlogin',Userlogin)
authroutes.post('/adminsignup',AdminSignup)
authroutes.post('/adminlogin',Adminlogin)

module.exports = authroutes