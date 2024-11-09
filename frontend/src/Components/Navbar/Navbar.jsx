import React, { useState } from "react";
import "./Navbar.css"
import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"
const Navbar = () => {
  const [menu,setMenu]=useState("shop")

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav_menu">
        <li onClick={()=>setMenu("shop")}>Shop {menu==="shop"?<hr />:<></>} </li>
        <li onClick={()=>setMenu("mens")}>Men{menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>setMenu("womens")}>Women{menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>setMenu("kids")}>Kids{menu==="kids"?<hr />:<></>}</li>
      </ul>
      <div className="nav_login_cart">
        <button>login</button>
        <img src={cart_icon} alt="" />
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
