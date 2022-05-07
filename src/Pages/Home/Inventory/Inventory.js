import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InventoryDetails from "../../InventoryDetails/InventoryDetails";
import "./Iventory.css";

const Inventory = (props) => {
  const { name, description, img, price, quantity } = props.inventory;
  const navigate = useNavigate();
  const handleInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <div className="inventory-container">
        <img src={img} alt="" />
        <h5>Supplier:{name}</h5>
        <p>Price:{price}</p>
        <p>Quantity:{quantity}</p>
        <p>{description}</p>
        <button className="button" onClick={() => handleInventoryDetails()}>
          Know Details
        </button>
      </div>
    </div>
  );
};

export default Inventory;
