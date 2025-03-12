import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './home.css';
import singindog from "../Assets/signin pic.jpg"
import pawprint from "../Assets/blue.jpeg"
import dogblue from "../Assets/360_F_418068474_VIWD3loz21dusicbe43VnAsAc9uZudyF.jpg"
import dogsignin from "../Assets/signin.jpg"
import dogbluebg from "../Assets/DALL·E 2025-03-09 23.47.34 - A cute dog sitting on a solid #b7e1ed background. The dog is friendly and fluffy, looking directly at the viewer with a happy expression. The backgrou.webp"
import bluepaw from "../Assets/bluepaw.jpeg"

function Login() {
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
    <div className="login-container" style={myStyle}>
  <div className="login-card">
    <form className="login-form">
      <h1>Welcome Back</h1>
     
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handelChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handelChange}
        required
      />
      <br />
      <button>Login</button>
    </form>
    <div>
    <img className="login-img" src={singindog} alt="Login Illustration" />
<div className="center">
<h1>Hello Friend</h1>
<h3>Enter your personal details and start journey with us</h3>
  </div>
  </div>
  </div>
</div>

  )
}

export default Login