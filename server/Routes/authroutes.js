const { Router }=require('express');
const {UserSignup,Userlogin}=require("../controller/authcontroller")

const authroutes=Router();

authroutes.post('/usersignup',UserSignup)
authroutes.post('/userlogin',Userlogin)


module.exports = authroutes