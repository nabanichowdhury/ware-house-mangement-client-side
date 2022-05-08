import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "../firebase.init";

import useInventories from "../hooks/useInventories";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      if (user.email) {
        const url = `http://localhost:5000/inventory?email=${user.email}`;
        const { data } = await axios.get(url);
        setItems(data);
      }
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <h1>MyItems:{items.length}</h1>
    </div>
  );
};

export default MyItems;
