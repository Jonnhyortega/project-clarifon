import React, { useState, useEffect } from "react";
import "./Hero.css";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="hero">
      <div id="hero-box-one">
        <img src="./src/assets/imgs/clarifon.png" alt="Logo Clarifon" />
        <div id="box-img-2">
          <img
            src="./src/assets/imgs/Frame 1484578055.png"
            alt="Logo Clarifon"
          />
          <img src="./src/assets/imgs/norton.png" alt="MCaffe" />
        </div>
      </div>
      <div id="hero-box-two">
        <p>Wait! Your order is in progress.</p>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing.</small>
      </div>
      <div id="hero-box-three">
        {isMobile ? (
          <div className="steps">
            <div>
              <img src="./src/assets/imgs/check.png" alt="" />
              <p>Cart Review</p>
            </div>
            <div>
              <img src="./src/assets/imgs/number three.png" alt="" />
              <p>Checkout</p>
            </div>
            <div>
              <img src="./src/assets/imgs/4.png" alt="" />
              <p>Special Offer</p>
            </div>
            <div>
              <img src="./src/assets/imgs/check.png" alt="" />
              <p>Confirmation</p>
            </div>
          </div>
        ) : (
          <div className="steps">
            <div>
              <img className="check" src="./src/assets/imgs/check.png" alt="" />
              <p>Step 1: Cart Review</p>
            </div>
            <div>
              <img className="check" src="./src/assets/imgs/check.png" alt="" />
              <p>Step 2: Checkout</p>
            </div>
            <div>
              <img className="three" src="./src/assets/imgs/number three.png" alt="" />
              <p>Step 3: Special Offer</p>
            </div>
            <div>
              <img className="fourt" src="./src/assets/imgs/4.png" alt="" />
              <p>Step 4: Confirmation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
