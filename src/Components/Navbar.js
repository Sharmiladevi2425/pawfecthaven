import React from 'react'
import {Link} from'react-router-dom'
import  './navbar.css';
import {useState} from 'react'
import { useEffect } from 'react';
function Navbar() {

  return (
    <header className="header">
    <h1>PAWFET HAVEN</h1>
    <nav className="navbar">
    
    <Link to='/'>
        <a href='/'> HOME</a>
    </Link>
    <Link to='/'>
    <a href='/'> DOG</a>
    </Link>
    <Link to='/Cat'>
    <a href='/Cat'> CAT</a>
    </Link>
    <Link to='/'>
    <a href='/'> BIRDS</a>
    </Link>
    <Link to='/'>
    <a href='/'> FISH</a>
    </Link>
    <Link to='/'>
    <a href='/'> CONSULT</a>
    </Link>
    <Link to='/'>
    <a href='/'> CONTACT</a>
    </Link>
    </nav>
   <div className="end">
    <Link to='/Login'>
   <button >LOGIN</button>
   </Link>
   <Link to='/Signin'>
   <button>SIGN UP</button>
   </Link>
   </div>
    </header>
    
  )
}

export default Navbar