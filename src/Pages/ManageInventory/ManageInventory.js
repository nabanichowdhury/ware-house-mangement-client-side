import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";

import ManageEachInventory from "../ManageEachInventory/ManageEachInventory";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();
  const handleAddItems = () => {
    navigate("/inventories/add");
  };

  return (
    <div>
      <div className="inventories container">
        {inventories.map((inventory) => (
          <ManageEachInventory
            key={inventories._id}
            inventory={inventory}
          ></ManageEachInventory>
        ))}
        <button className="btn-add" onClick={handleAddItems}>
          Add more items
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
