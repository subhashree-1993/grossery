import React, { useState } from "react";
import Cart from "../Storeinfo/Cart";

const Navbar = () => {
  // dropdown
  const [dropshow, setDropshow] = useState(false);
  const dropshownew = () => {
    setDropshow(!dropshow);
  };

  const openset = () => {
    window.open("/", "_self");
  };

  const [showdiv, setShowdiv] = useState(false);

  const opencart = () => {
    setShowdiv(!showdiv);
  };

  // call cart item
  const [cartAll, setCartAll] = useState(false);

  const toggleshow = () => {
    setCartAll(!cartAll);
  };

  return (
    <div>
      <div className="container">
          <div className="textalig">
            <h1 className="h1tag" onClick={openset}>
              ontheshelf
            </h1>
          </div>
          <div className="searchbox">
            <input
              type="text"
              placeholder="Search product"
              className="search"
            />
          </div>
          <img
            src="123.png"
            alt="img"
            onClick={toggleshow}
            className="image185"></img>
          {cartAll && <Cart />}
        </div>
    </div>
  );
};

export default Navbar;
