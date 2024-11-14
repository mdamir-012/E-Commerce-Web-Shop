import React from 'react'
import "./RelatedProducts.css";
import data_product from "../../Assets/Frontend_Assets/data";
import Item from '../Item/Item.jsx';


const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts_item">
        {data_product.map((elem,i)=>(
            <Item key={i} {...elem}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
