import React ,{ Component}from 'react'
import { useState } from 'react';
import pawprint from "../Assets/blue.jpeg"
import dogblue from "../Assets/360_F_418068474_VIWD3loz21dusicbe43VnAsAc9uZudyF.jpg"
import dogsignin from "../Assets/signin.jpg"
import dogbluebg from "../Assets/DALL·E 2025-03-09 23.47.34 - A cute dog sitting on a solid #b7e1ed background. The dog is friendly and fluffy, looking directly at the viewer with a happy expression. The backgrou.webp"
import bluepaw from "../Assets/bluepaw.jpeg"
import './home.css';

function Signin () {
  const [formData, setFormData]=useState({
    name:" ",
    email:" ",
    password:" ",
  });
  const myStyle={
    backgroundImage:`url(${bluepaw})`,
    backgroundSize:"auto",
    backgroundRepeat: "repeat",
    backgroundPosition:"top left",
    height:"100vh",
    width:"100vw",
    backgroundPosition: "center"
  };
  const handelChange=(e)=>{
    setFormData({...formData, [e.target.name] : e.target.value});
  };
  return (
    <div className="signin-container" style={myStyle}>
      
   
      <div className="signin-card">
      <img  className=" signinimg" src={dogblue} />
        <form className="signin-form"> 
        <h1>Sign Up</h1>
        <input 
        type="text"
        name="name"
        placeholder="Enter your Name"
        onChange={handelChange}
        required
        /><br />
        <input 
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handelChange}
        required
        /><br />
        <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handelChange}
        required
        /><br />
        <button>Sign Up</button>
        </form>

      </div>
       </div>
  )
}

export default Signin 