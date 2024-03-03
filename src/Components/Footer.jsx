import React from "react";
import "./compo.css";

const Footer = () => {
  return (
    <div>
      <div className="footer1">
        <div className="footer2">
          <h1>ontheshelf</h1>
          <p>Fresh goods delivery to your doorstep</p>
          <div className="icones">
            <img src="152 (1).png" alt="" className="logo12" />
            <img src="152 (2).png" alt="" className="logo12" />
            <img src="152 (3).png" alt="" className="logo12" />
          </div>
        </div>
        <div className="footer3">
          <h3 className="text12">Need help?</h3>
          <h3 className="">OurSupport is here for you 24/7</h3>
          <div>
            <h5>(+123) 000 111 222 333</h5>
            <a href="#" className="email">
              ontheshelf@uizard.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
