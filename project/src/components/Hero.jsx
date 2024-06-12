import React, { useState, useEffect } from "react";
import "./Hero.css";
import clarifonLogo from '/src/assets/imgs/clarifon.png';
import frameImage from '/src/assets/imgs/Frame 1484578055.png';
import nortonImage from '/src/assets/imgs/norton.png';
import checkImage from '/src/assets/imgs/check.png';
import numberThreeImage from '/src/assets/imgs/number three.png';
import fourImage from '/src/assets/imgs/4.png';

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
        <img src={clarifonLogo} alt="Logo Clarifon" />
        <div id="box-img-2">
          <img src={frameImage} alt="Frame" />
          <img src={nortonImage} alt="Norton" />
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
              <img src={checkImage} alt="Cart Review" />
              <p>Cart Review</p>
            </div>
            <div>
              <img src={checkImage} alt="Checkout" />
              <p>Checkout</p>
            </div>
            <div id="special">
              <img src={numberThreeImage} alt="Special Offer" />
              <span>Special Offer</span>
            </div>
            <div>
              <img src={fourImage} alt="Confirmation" />
              <p>Confirmation</p>
            </div>
          </div>
        ) : (
          <div className="steps">
            <div>
              <img className="check" src={checkImage} alt="Step 1" />
              <p>Step 1: Cart Review</p>
            </div>
            <div>
              <img className="check" src={checkImage} alt="Step 2" />
              <p>Step 2: Checkout</p>
            </div>
            <div>
              <img className="three" src={numberThreeImage} alt="Step 3" />
              <p>Step 3: Special Offer</p>
            </div>
            <div>
              <img className="fourt" src={fourImage} alt="Step 4" />
              <p>Step 4: Confirmation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
