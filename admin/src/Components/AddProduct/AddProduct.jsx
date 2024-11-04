// import React from 'react'
import "./AddProduct.css";
import upload_area from "../../assets/Admin_Assets/upload_area.svg";

const AddProduct = () => {
  return (
    <div className="add_product">
      <div className="addproduct_itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct_price">
        <div className="addproduct_itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct_itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" id="" className="add_product_selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct_itemfield">
        <label htmlFor="file-input">
          <img src={upload_area} alt="" className="addproduct-thumbnail-img" />
        </label>
        <input type="file" name="profileImage" id="file-input" hidden />
      </div>
      <button className="addproduct_btn">ADD</button>
    </div>
  );
};

export default AddProduct;
