import { useNavigate } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import ManageInventory from "../../ManageInventory/ManageInventory";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();
  const handleManageInventories = () => {
    navigate(`/inventories`);
  };

  return (
    <div>
      <h1>Inventories</h1>

      <div className="inventories container">
        {inventories.slice(1, 7).map((inventory) => (
          <Inventory inventory={inventory}></Inventory>
        ))}
      </div>
      <button className="button-show" onClick={handleManageInventories}>
        Show all
      </button>
    </div>
  );
};

export default Inventories;
