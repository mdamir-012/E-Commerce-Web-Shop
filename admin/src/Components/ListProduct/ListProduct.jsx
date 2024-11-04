// import React from 'react'
import { useEffect, useState } from "react";
import "./ListProduct.css";
import croos_icon from "../../assets/Admin_Assets/cross_icon.png"

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  let api = "http://localhost:4000/allproducts";
  const fetchInfo = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data.products);
      setAllproducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list_product">
      <h1>All Products List</h1>
      <div className="listproduct_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct_allproducts">
        <hr />
        {allproducts.map((elem, i) => (
          <div key={i} className="listproduct_format_main listproduct_format">
            <img src={elem.image} alt={elem.name} className="listproduct_product_icon" />
            <p>{elem.name}</p>
            <p>${elem.old_price}</p>
            <p>${elem.new_price}</p>
            <p>{elem.category}</p>
            <img src={croos_icon} className="list_product_remove_icon" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
