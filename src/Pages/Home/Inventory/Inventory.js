import React from "react";
import "./Iventory.css";

const Inventory = (props) => {
  const { name, description, img, price, quantity } = props.inventory;
  return (
    <div>
      <div className="inventory-container">
        <img src={img} alt="" />
        <h5>Supplier:{name}</h5>
        <p>Price:{price}</p>
        <p>Quantity:{quantity}</p>
        <p>{description}</p>
        <button className="button">Know Details</button>
      </div>
    </div>
  );
};

export default Inventory;
