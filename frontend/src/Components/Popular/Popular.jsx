import React from "react";
import "./Popular.css";
import data_product from "../../Assets/Frontend_Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
