import React from 'react'
import {useState} from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
function Footer() {
      const [formData, setFormData]=useState({
          
          email:" ",
          
        });
    const handelChange=(e)=>{
        setFormData({...formData, [e.target.name] : e.target.value});
      };
  return (
    <div className="footer-container">
        <div className="part1">
<h3>Subscribe to our newsletter</h3>
<p>Register to receive newsletters to be updated about
the latest activities of the store,..</p>

<input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handelChange}
        required
      />
      <button>Login</button>
<h3>Follow Us:</h3>
<FaInstagramSquare size="2rem" padding="2px"/>
<FaTwitter size="2rem" padding="2px"/>
<FaFacebook size="2rem" padding="2px"/>

        </div>
 <div className="part2">
    
    <ul>
    <h3>Services</h3>
        <li>Grooming</li>
        <li>Positive Dog Training</li>
        <li>Veterinary</li>
        <li>Resource Center</li>
    </ul>
    
    </div>
    <div className="part3">
   
    <ul>
    <h3>Shop</h3>
        <li>Shop dog</li>
        <li>Shop Cat</li>
        <li>Shop Aqatics</li>
        <li>On Sale</li>

    </ul>
        </div>       
        <div className="part4">
            <ul>
            <h3>Customer Services</h3>
                <li>Orders</li>
                <li>Advisories</li>
                <li>Help</li>
                <li>Pet Store Locator</li>
                <li>Returns</li>

            </ul>
        </div>

    </div>
  )
}

export default Footer