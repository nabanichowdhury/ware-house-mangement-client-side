import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;

      const url = `http://localhost:5000/myitems?email=${email}`;

      const { data } = await axios.get(url);
      setItems(data);
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <h1>MyItems:{items.length}</h1>
      {items.map((item) => (
        <div>
          <img src={item.img} alt="" />
          <h1>Name:{item.name}</h1>
          <p>Description:{item.description}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
