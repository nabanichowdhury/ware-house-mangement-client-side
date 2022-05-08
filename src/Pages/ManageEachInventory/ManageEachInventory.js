import React from "react";
import useInventories from "../../hooks/useInventories";
import "./ManageEachInventory.css";

const ManageEachInventory = (props) => {
  const [inventories, setInventories] = useInventories();
  const { name, description, img, price, _id } = props.inventory;
  const handleDeleteButton = (id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    if (proceed) {
      const url = `https://quiet-lake-14811.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = inventories.filter(
              (inventory) => inventory._id !== id
            );
            console.log(remaining);
            setInventories(remaining);
            console.log(inventories);
          }
        });
    }
  };
  return (
    <div className="inventory-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h5>Supplier Name:{name}</h5>
        <p>Description:{description}</p>
        <p>Price:{price}</p>
        <button className="btn-delete" onClick={() => handleDeleteButton(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageEachInventory;
