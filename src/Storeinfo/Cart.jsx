import React from "react";
import { Link } from "react-router-dom";

function Cart({
  cartItems,
  item,
  removeFromCart,
  opencart,
  showdiv,
  setShowdiv,
}) {
  const calculateTotalPrice1 = (item) => {
    return item.price * item.quantity;
  };



  return (
    <div>
      <h2
        style={{
          fontFamily: "sans-serif",
          width: "50%",
          margin: "auto",
          fontSize: "40px",
        }}>
        Cart items
      </h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <span style={{ fontFamily: "sans-serif" }} key={index}>
              <p>
                - {item.name} - Price: {item.price} - Quantity: {item.quantity}{" "}
                - Price: {calculateTotalPrice1(item)}
              </p>
            </span>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>

    
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: 25,
            position: "absolute",
            top: 400,
            margin: "auto",
            textAlign: "center ",
            marginLeft: "100px",
          }}>
          
        </p>
    

     
        <Link
          to={{
            pathname: "/checkout",
            state: {
              cartItems,
            },
          }}>
          <button
            className="proceed"
            style={{
              position: "absolute",
              width: 350,
              top: 450,
              cursor: "pointer",
              fontSize: "20px",
              margin: "auto",
              marginLeft: "50px",
            }}>
            Proceed to checkout
          </button>
        </Link>
      
    </div>
  );
}

export default Cart;
