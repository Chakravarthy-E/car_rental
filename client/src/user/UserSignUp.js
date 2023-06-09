<<<<<<< main
import React from 'react'
import "./styles/signup.css"
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


>>>>>>> main
const UserSignUp = () => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name,setname]= useState("");
  const [contact,setcontact]= useState("");
  const [conf_pass,setconf_pass] = useState("");
  const [error,seterror]= useState("");

  const navigate = useNavigate()

  async function Handleclick(e) {
    e.preventDefault();
  
    console.log(password.length)
    

    if(!email || !password || !name|| !contact || !conf_pass){
          
      seterror("All Fields Are Required");
    }

    else if (/\d/.test(name)){

      seterror("Name Should Contain Only Alphabates");
    }

    else if (password !== conf_pass){

      seterror("Confirm Password Didn't Match");
    }

    else if(password.length<6){

      seterror("Password Should Contain At Least 6 Characters");
    }

    else if(email.indexOf('@')===-1){
      seterror("email must contain @")
    }

    
    else if(/[a-zA-Z]/.test(contact)){
      seterror("Contact Should Contain Only Numbers")
    }

    else{

    try {
      const data = await axios.post("http://localhost:5000/usersignup", { email, password }, { withCredentials: true })
      console.log(data);
      seterror("Registered Sucessfully")
      setTimeout(() => {
        seterror("");
        setemail("");
        setpassword("");
        setname("");
        setcontact("");
        setconf_pass("");
      }, 3000);
      //navigate("/")
    }
    catch (error) {
      console.log("error from frontend", error);
    }
    }

  }
  return (
    <div>
<<<<<<< main
      <form   >
        {!error?<h4 className='text-light'> Register your Account </h4>
        :<h4 className='text-light1'>{error}</h4>}

        <input value={name} type="text" name="Name" placeholder='Name' onChange={e => {setname(e.target.value);seterror("")}} />

        <input value={email} type="email" name="email" placeholder='Email' onChange={e => {setemail(e.target.value);seterror("")}} />

        <input value={contact} type="tel" name="contact" placeholder='Contact' onChange={e =>{ setcontact(e.target.value);seterror("")}}/>

        <input value={password} type="password" name="password" placeholder='Password' 
        onChange={e => {setpassword(e.target.value);seterror("")}} />

        <input value={conf_pass} type="password" name="Confirm_Password" placeholder='Confirm Password' 
        onChange={e => {setconf_pass(e.target.value);seterror("")}}/>

        <button onClick={Handleclick}>Register</button>
=======

>>>>>>> main
      </form>
    </div>
  );
};

export default UserSignUp;
