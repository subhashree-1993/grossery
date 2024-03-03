import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Cart from "./Cart";
import Storedetails2 from "./Storedetails2 ";

const Store2 = () => {
  // goback
  const goback = () => {
    window.open("/storeavl", "_self");
  };

  // count

  const [vegetables, setVegetables] = useState([
    { id: 1, name: "Cucumber", price: 5, countptag: 0 },
    { id: 2, name: "Tomato", price: 10, countptag: 0 },
    { id: 3, name: "Carrot", price: 15, countptag: 0 },
    { id: 4, name: "pea", price: 20, countptag: 0 },
    { id: 5, name: "corn", price: 25, countptag: 0 },
    { id: 6, name: "Brinjal", price: 30, countptag: 0 },
    { id: 7, name: "Brinjal", price: 40, countptag: 0 },
  ]);

  // increatment

  const [vegetableQuantities, setVegetableQuantities] = useState({});

  const handleIncrement = (id) => {
    setVegetableQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setVegetableQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 0),
    }));
  };

  useEffect(() => {
    const initialQuantities = {};
    vegetables.forEach((vegetable) => {
      initialQuantities[vegetable.id] = 0;
    });
    setVegetableQuantities(initialQuantities);
  }, [vegetables]);

  const [cartItems, setCartItems] = useState([]);

  // totaal
  const [vegetableData, setVegetableData] = useState(vegetables);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = vegetableData.reduce(
      (acc, vegetable) => acc + vegetable.countptag,
      0
    );
    setTotal(newTotal);
  }, [vegetableData]);

  const [hide, setHide] = useState(true);
  const showallfood = () => {
    setHide(!hide); // Changed 'show' to 'hide'
  };

  const [popup, setPopup] = useState(false);
  const openpopup = () => {
    setPopup(true);
  };
  const closepopup = () => {
    setPopup(false);
  };

  // cart

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, increment its quantity
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedCartItems.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCartItems);
  };

  // Function to remove an item from the cart based on its ID
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  //

  const openset = () => {
    window.open("/", "_self");
  };

  const checkout = () => {
    window.open("/checkout", "_self");
  };

  const [showdiv, setShowdiv] = useState(false);

  const opencart = () => {
    setShowdiv(!showdiv);
  };

  return (
    <div>
      {/* navbar */}

      <div className="container">
        <div className="textalig">
          <h1 className="h1tag" onClick={openset}>
            ontheshelf
          </h1>
        </div>
        <div className="searchbox">
          <input type="text" placeholder="Search product" className="search" />
        </div>

        {showdiv && (
          <div className="hidediv">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        )}

        <img
          src="123.png"
          alt="img"
          onClick={opencart}
          className="image185"></img>
        <img src="12455.png" alt="img" className="image"></img>
        <img src="" alt="img" className="image"></img>
      </div>

      <div className="conatiner585">
        <div className="text125">
          <motion.span>
            <motion.img
              onClick={goback}
              whileHover={{ scale: 1.5 }}
              src="40_436-removebg-preview.png"
              className="backimhe"
            />
            Back to all store
          </motion.span>
          <h1>Dragon Foods</h1>
          <p>Min 50rs . 0.50  Delivery time - 20-30min.</p>
        </div>
        <div>
          <img src="153.jpg" alt="" className="image152" />
        </div>
      </div>
      <div>
        <div className="texth1tage">
          <h1>Shop by categories</h1>
        </div>
        <div className="button_tag">
          <button>
            <img src="deal.png" className="imagebuttonb"></img>Best deals
          </button>
          <button
            style={{
              backgroundColor: hide ? "blue" : "white",
              border: "2px solid white",
              color: "white",
            }}>
            <img src="diet.png" className="imagebuttonb"></img>Food
          </button>
          <button>
            <img src="beverages.png" className="imagebuttonb"></img>Beverages
          </button>
          <button>
            <img src="deal.png" className="imagebuttonb"></img>Other
          </button>
          <div className="line" />
        </div>
      </div>
      <div className="text">
        <h1>Food subcategories</h1>
      </div>
      <div className="fooditems">
        <button
          style={{ backgroundColor: hide ? "blue" : "white", color: "white" }}
          onClick={showallfood}>
          All food
        </button>
        <button>Vegetables</button>
        <button>Bakery</button>
        <button>Meat</button>
        <button>Snacks</button>
        <button>Dairy</button>
        <button>Fish</button>
        <button>Spices</button>
        <button>Frozen</button>
        <button>Fruites</button>
      </div>

      {/* details */}

      <div className="size11">
        {/* 1 */}

        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 1)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="sgrdhfjg.png" alt="image" className="vegetable" />
                <p>
                  {Storedetails2.name} - (per - {Storedetails2.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {Storedetails2.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}

        {/* 2 */}
        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 2)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="tomato.png" alt="image" className="vegetable" />
                <p>
                  {Storedetails2.name} - (per - {Storedetails2.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {vegetable.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}

        {/* 3 */}
        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 3)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="carrot.png" alt="image" className="vegetable" />
                <p>
                  {Storedetails2.name2} - (per - {vegetable.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {vegetable.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}

        {/* 4 */}
        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 4)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="pea.png" alt="image" className="vegetable" />
                <p>
                  {vegetable.name} - (per - {vegetable.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {vegetable.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}

        {/* 5 */}

        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 5)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="corn.png" alt="image" className="vegetable" />
                <p>
                  {vegetable.name} - (per - {vegetable.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {vegetable.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}

        {/* 6 */}
        {hide &&
          vegetables
            .filter((vegetable) => vegetable.id === 6)
            .map((vegetable) => (
              <div className="display" key={vegetable.id}>
                <img src="eggplant.png" alt="image" className="vegetable" />
                <p>
                  {vegetable.name} - (per - {vegetable.price})
                </p>
                <p className="empliment">
                  Quantity - ({vegetableQuantities[vegetable.id]})
                </p>
                <p>
                  Total Price -{" "}
                  {vegetable.price * vegetableQuantities[vegetable.id]}
                </p>
                <div className="flexnu">
                  <p
                    className="ptag1"
                    onClick={() => handleIncrement(vegetable.id)}>
                    {" "}
                    +{" "}
                  </p>
                  <p
                    className="ptag2"
                    onClick={() => handleDecrement(vegetable.id)}>
                    {" "}
                    -{" "}
                  </p>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addToCart(vegetable)}>
                  Add to Cart{" "}
                </button>
              </div>
            ))}
      </div>

      <Download />
      <Footer />
    </div>
  );
};

export default Store2;
