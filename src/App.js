import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import Login from "./Pages/RegisterAndLogin/Login/Login";
import Register from "./Pages/RegisterAndLogin/Register/Register";
import RequiredAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

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
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <InventoryDetails></InventoryDetails>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
