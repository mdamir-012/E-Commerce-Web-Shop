//import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/Admin_Assets/nav-logo.svg"
import navProfile from "../../assets/Admin_Assets/nav-profile.svg";
const navbar = () => {
  return (
    <div className="navbar">
    <img src={navlogo} alt="" className="nav_logo" />
    <img src={navProfile} alt="" className="nav_profile" />
    </div>
  )
}

export default navbar
