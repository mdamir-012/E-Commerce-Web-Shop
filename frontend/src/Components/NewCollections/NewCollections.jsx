import React from "react";
import new_collection from "../../Assets/Frontend_Assets/new_collections";
import Item from "../Item/Item";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <div className="new_collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((elem, i) => (
          <Item key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
