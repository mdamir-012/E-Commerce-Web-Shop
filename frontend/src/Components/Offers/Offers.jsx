import React from "react";
import "./Offers.css";
import exclusive_image from "../../Assets/Frontend_Assets/exclusive_image.png";import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
