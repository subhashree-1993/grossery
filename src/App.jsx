import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import "./Global.css";
import Storeavl from "./Pages/Storeavl";
import Store1 from "./Storeinfo/Store1";
import Cart from "./Storeinfo/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Components/Login";
import Store2 from "./Storeinfo/Store2";
import Newstore from "./AddStore/Newstore";

const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/storeavl" element={<Storeavl />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/store2" element={<Store2 />} />
          <Route exact path="/store1" element={<Store1 />} />
          <Route exact path="/cart" component={<Cart />} />
          <Route exact path="/checkout" component={<Checkout />} />
          <Route exact path="/additems" component={<Newstore />} />
        </Routes>
      </Main>
      
    </div>
  );
};

export default App;
