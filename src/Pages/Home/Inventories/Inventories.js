import useInventories from "../../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, setInventories] = useInventories();

  return (
    <div>
      <h1>Inventories</h1>

      <div className="inventories container">
        {inventories.slice(1, 7).map((inventory) => (
          <Inventory inventory={inventory}></Inventory>
        ))}
      </div>
      <button className="button-show">Show all</button>
    </div>
  );
};

export default Inventories;
