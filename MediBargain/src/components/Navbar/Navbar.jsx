import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY> 50 ?setSticky(true):setSticky(false);
    })
  },[]);  return (

    <nav className={`container ${sticky?'dark-nav':''}`}>
      <div className="logo-title">
        <img src={logo} alt="" className="logo" />
        <h1 className="logo-name">MediBargain</h1>
      </div>
        <ul>  
          <li className="elements"><a href="#homes">Home</a></li>
          <li className="elements"><a href="#001">About Us</a></li>
          <li className="elements"><a href="#002">Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
