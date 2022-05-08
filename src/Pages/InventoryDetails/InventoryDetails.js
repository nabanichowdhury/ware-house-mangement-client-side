import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.css";
import useInventories from "../../hooks/useInventories";

const InventoryDetails = (props) => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  let [quantity, setQuantity] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://quiet-lake-14811.herokuapp.com/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setQuantity(data.quantity);
      });
  }, []);

  const handleQuantity = (quan) => {
    quantity = setQuantity(quan - 1);
    const updatedUser = { quantity };

    const url = `https://quiet-lake-14811.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
        console.log(result);
      });
  };

  return (
    <div className="d-flex container justify-content-evenly">
      <div>
        <img width="400px" height="400px" src={inventory.img} alt="" />
      </div>
      <div>
        <h1>Supplier Name:{inventory.name}</h1>
        <h4>Price:{inventory.price}</h4>
        <p>Description:{inventory.description}</p>
        <h5>Quantity:{quantity}</h5>
        <button
          onClick={() => handleQuantity(quantity)}
          className="deliver-button"
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default InventoryDetails;
