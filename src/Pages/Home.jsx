import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Download from "../Components/Download";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setshow] = useState(false);

  // hide and show
  const [buttonText, setButtonText] = useState("See All");

  const haldleshow = () => {
    setshow(!show);

    if (buttonText === "See All") {
      setButtonText("Hide");
    } else {
      buttonText === "All";
      setButtonText("See");
    }
  };

  // serach
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    if (searchValue === "") {
      alert("Please Fill it");
    } else {
      window.open("/storeavl", "_self");
    }
  };

  // Login page

  const Loginpage = () => {
    window.open("/login", "_self");
  };

  const navigate = useNavigate("/additems");

  return (
    <div>
      <div>
        {/* headnav */}
        <div className="conatiner2">
          <div className="conatiner21">
            <h1>ontheshelf</h1>
          </div>
          <div className="homebytt">
            <button className="homebutt">US</button>
            <button className="homebutt1" onClick={Loginpage}>
              Create an account
            </button>
          </div>
        </div>

        {/* home */}
        <div className="h1tag1">
          <h1 className="h1home">Fresh goods deliverred to your doorstep!</h1>
          <div className="icon">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="searchbutt"
            />
            <button onClick={handleSearch} className="buttonsearch1">
              Proceed
            </button>
          </div>
        </div>
      </div>

      {/* next section */}

      <div className="section1">
        <div className="contsin">
          <img src="supermarket.gif" alt="img" />
          <h1>80 Stores</h1>
          <p>All around the country</p>
        </div>
        <div className="contsin">
          <img src="noodle.gif" alt="img" />
          <h1>Fresh foods</h1>
          <p>we guarantee quality</p>
        </div>
        <div className="contsin">
          <img src="delivery-scooter.gif" alt="img" />
          <h1>Fast Delivery</h1>
          <p>Fastest on the market</p>
        </div>
        <div className="contsin">
          <img src="route.gif" alt="img" />
          <h1>Live tracking</h1>
          <p>Track your oder in real time</p>
        </div>
      </div>

      {/* next section */}
      <div className="container25">
        <h1>Popular Stores</h1>
        <button onClick={haldleshow}>{buttonText}</button>
      </div>
      <div className="divbox1">
        <motion.div
          onClick={navigate}
          whileHover={{ scale: 1.1 }}
          className="divbox">
          <button>Details</button>
          <img src="1.png" alt="image" className="pic" />
          <h4>Twisted Shrimp</h4>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="divbox">
          <button>Details</button>
          <img src="ODUJEJ0-removebg-preview.png" alt="image" className="pic" />
          <h4>Green Dragon</h4>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="divbox">
          <button>Details</button>
          <img src="fghbjnm.png" alt="image" className="pic" />
          <h4>Froggy</h4>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="divbox">
          <button>Details</button>
          <img src="fghbjnm.png" alt="image" className="pic" />
          <h4>Dontstealhere</h4>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="divbox">
          <button>Details</button>
          <img src="afesgrdh.png" alt="image" className="pic" />
          <h4>Blue Honeycomb</h4>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="divbox">
          <button>Details</button>
          <img src="wdafesgrht.png" alt="image" className="pic" />
          <h4>OLD Lotus</h4>
        </motion.div>
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
        {show && (
          <motion.div whileHover={{ scale: 1.1 }} className="divbox">
            <button>Details</button>
            <img src="1.png" alt="image" className="pic" />
            <h4>OLD Lotus</h4>
          </motion.div>
        )}
      </div>
      {/* Four Section */}
      <section>
        <div className="h1texttage">
          <h1>How it Works?</h1>
        </div>
        <div className="flex12">
          <div className="image1">
            <h1>Choose the store</h1>
            <p>Find the favorite store in your area</p>
          </div>
          <div className="image2">
            <h1>Shop</h1>
            <p>All from the comfort your home</p>
          </div>
          <div className="image3">
            <h1>Wait for delivery</h1>
            <p>Delivery is fast and can be tracked</p>
          </div>
          <div className="image4">
            <h1>Enjoy!</h1>
            <p>Don't forget to leave a review</p>
          </div>
        </div>
      </section>

      {/* last section */}
      <br />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
