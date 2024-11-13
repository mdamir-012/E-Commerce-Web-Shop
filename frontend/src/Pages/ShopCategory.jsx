import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/Frontend_Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop_category">
      <img src={props.banner} alt="" className="shopcategory_banner" />
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={item.id} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory_loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
