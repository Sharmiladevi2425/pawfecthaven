import React ,{ Component}from 'react'
import { useState ,useEffect} from 'react';
import pawprint from "../Assets/blue.jpeg"
import orangepaw from "../Assets/orangepaw.jpg"

import dogblue from "../Assets/360_F_418068474_VIWD3loz21dusicbe43VnAsAc9uZudyF.jpg"
import dogsignin from "../Assets/signin.jpg"
import bluepaw from "../Assets/bluepaw.jpeg"
import './home.css';

function Signin () {
  const [formData, setFormData]=useState({
    name:" ",
    email:" ",
    password:" ",
  });
  useEffect(()=>{

  })
  const myStyle={
    backgroundImage:`url(${orangepaw})`,
    backgroundSize:"auto",
    backgroundRepeat: "repeat",
    backgroundPosition:"top left",
    height:"100vh",
    width:"100vw",
    backgroundPosition: "center"
  };
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      console.log("Retrieved from localStorage:", JSON.parse(savedData));
    }
  }, []);
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name] : e.target.value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("UserData",JSON.stringify(formData));
    console.log("Account is Created",formData);
  };
  return (
    <div className="signin-container" style={myStyle}>
      
   
      <div className="signin-card">
      <img  className=" signinimg" src={dogblue} />
        <form className="signin-form" onSubmit={handleSubmit}> 
        <h1>Sign Up</h1>
        <input 
        type="text"
        name="name"
        placeholder="Enter your Name"
        onChange={handleChange}
        required
        /><br />
        <input 
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handleChange}
        required
        /><br />
        <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        /><br />
        <button>Sign Up</button>
        </form>

      </div>
       </div>
  )
}

export default Signin 
