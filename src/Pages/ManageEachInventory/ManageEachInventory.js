import React from "react";
import "./ManageEachInventory.css";

const ManageEachInventory = (props) => {
  const { name, description, img, price } = props.inventory;
  return (
    <div className="inventory-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h5>Supplier Name:{name}</h5>
        <p>Description:{description}</p>
        <p>Price:{price}</p>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default ManageEachInventory;
