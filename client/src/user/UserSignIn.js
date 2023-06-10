import React from 'react'
import "./styles/signin.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignIn = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error,seterror]= useState("");

  const navigate=useNavigate();


  async function Handleclick(e){
    e.preventDefault();

    

    if(!email || !password ){
          
      seterror("All Fields Are Required");
    }

    else if(email.indexOf('@')===-1){
      seterror("email must contain @")
    }

    // else if(password.length<6){

    //   seterror("Password Should Contain At Least 6 Characters");
    // }


    else{

    try {
      const data = await axios.post("http://localhost:5000/userlogin", { email, password }, { withCredentials: true })
      console.log(data)
      navigate("/destionation")
    }
    catch (error) {
      console.log("error from frontend", error);
    }
    }

  }


  
  return (
    <div>
    <form action="post">
    {!error?<h4 className='text-light'>Login Your Account</h4>:
    <h4 className='text-light1'>{error}</h4>}

    <input type="email" name="email" placeholder='Email' 
    onChange={e => {setemail(e.target.value);seterror("")}}/>

    <input type="password" placeholder='Password' 
    onChange={e => {setpassword(e.target.value);seterror("")}}/>

    <button onClick={Handleclick}>Login</button>
    </form>
    </div>
  )
}

export default UserSignIn