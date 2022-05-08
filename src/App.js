import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyItems from "./Pages/MyItems/MyItems";
import AddItems from "./Pages/AddItems/AddItems";
import Home from "./Pages/Home/Home/Home";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Login from "./Pages/RegisterAndLogin/Login/Login";
import Register from "./Pages/RegisterAndLogin/Register/Register";
import RequiredAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventories"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <InventoryDetails></InventoryDetails>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/inventories/add" element={<AddItems></AddItems>}></Route>
        <Route
          path="/myItem"
          element={
            <RequiredAuth>
              <MyItems></MyItems>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}>
          {" "}
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
