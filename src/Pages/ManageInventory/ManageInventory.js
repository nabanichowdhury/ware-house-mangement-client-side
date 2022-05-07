import React from "react";
import useInventories from "../../hooks/useInventories";

import ManageEachInventory from "../ManageEachInventory/ManageEachInventory";

const ManageInventory = () => {
  const [inventories, setInventories] = useInventories();

  return (
    <div className="inventories container">
      {inventories.map((inventory) => (
        <ManageEachInventory inventory={inventory}></ManageEachInventory>
      ))}
    </div>
  );
};

export default ManageInventory;
