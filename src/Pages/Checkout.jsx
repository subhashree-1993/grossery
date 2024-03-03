import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Download from "../Components/Download";
import { useLocation } from "react-router-dom";
import Cart from "../Storeinfo/Cart";

const Checkout = () => {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox1Checked(false);
    setCheckbox2Checked(!checkbox2Checked);
  };

  // condtion2

  const [threebox, setThreebox] = useState(false);
  const [threebox1, setthreebox1] = useState(false);
  const [threebox2, setthreebox2] = useState(false);

  const threeboxtere1 = () => {
    setThreebox(!threebox);
    setthreebox1(false);
    setthreebox2(false);
  };

  const threeboxtere2 = () => {
    setThreebox(false);
    setthreebox1(!threebox1);
    setthreebox2(false);
  };

  const threeboxtere3 = () => {
    setThreebox(false);
    setthreebox1(false);
    setthreebox2(!threebox2);
  };

  // goback

  const gobackstore = () => {
    window.open("/store1", "_self");
  };

  // map items

  const location = useLocation();
  const cartItems = location.state ? location.state.cartItems : [];

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="show_flex">
        <div className="nicwe">
          <form className="goback">
            <a
              href="#"
              style={{
                textDecoration: 1,
                fontSize: 25,
                fontFamily: "sans-serif",
                color: "black",
              }}
              onClick={gobackstore}>
              Back to store
            </a>
            <h5 style={{ fontSize: 30, fontFamily: "sans-serif" }}>Checkout</h5>
          </form>
          <div className="line6" />
          <form className="goback">
            <h1 className="h1tag285">Contact info</h1>
            <div className="displayflexboc">
              <div className="textdocu">
                <label>First name</label>
                <br />
                <input type="textbox" placeholder="name" />
                <br />
                <br />
                <label>Phone no.</label>
                <br />
                <input type="textbox" placeholder="Last name" />
                <br />
              </div>

              <div className="flexbox">
                <label>Last Name</label>
                <br />
                <input type="textbox" />
                <br />
                <br />
                <label>Email - </label>
                <br />
                <input type="textbox" />
              </div>
            </div>
          </form>
          <br />
          <div className="line6" />

          <h1 className="h1tag285">Where do you want it delivered?</h1>
          <h3 className="h3tag1">Address</h3>
          <input type="text" className="textbox25" />
          <h3 className="h3tag1">Extra note for delivery partner</h3>
          <input type="text" className="textbox85" />
          <br />
          <br />
          <div className="line6" />
          <h1 className="h1tag285">When should we deliver it?</h1>
          {/* next */}
          <div className="flexbix">
            <div>
              <input
                type="checkbox"
                className="checkboc52"
                checked={checkbox1Checked}
                onChange={handleCheckbox1Change}
              />
              <br />
              <input
                type="checkbox"
                className="checkboc52"
                checked={checkbox2Checked}
                onChange={handleCheckbox2Change}
              />
            </div>
            <div className="nametagw">
              <h4>As Soon as possible</h4>
              <h4>Later (Choose time)</h4>
            </div>
          </div>
          <br />
          {/* next */}
          <div className="line6" />

          <br />
          <h1 className="h1tag285">How Would you like to pay?</h1>
          <div className="flexbix1">
            <div>
              <input
                type="checkbox"
                className="checkboc525"
                checked={threebox}
                onChange={threeboxtere1}
              />
              <br />
              <input
                type="checkbox"
                className="checkboc525"
                checked={threebox1}
                onChange={threeboxtere2}
              />
              <br />
              <input
                type="checkbox"
                className="checkboc525"
                checked={threebox2}
                onChange={threeboxtere3}
              />
              <br />
            </div>
            <div className="tagname">
              <h4>Credit card</h4>
              <h4>Cash to delivery person</h4>
              <h4>UPI Payment</h4>
            </div>
          </div>
          <br />
          <button className="buttonceckout">Checkout</button>
        </div>
        {cartItems.map((item, index) => (
          <div
            className="backgroundColor"
            style={{
              height: "60vh",
              width: "31.6%",
              borderRadius: "10px",
              marginTop: "60px",
              fontFamily: "sans-serif",
            }}
            key={index}
            >
            <h1>My Basket - </h1>
            <p>Items in cart - {item.price} </p>
            <p>Total Price - {item.quantity} </p>
          </div>
        ))}
      </div>
      <br />
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default Checkout;
