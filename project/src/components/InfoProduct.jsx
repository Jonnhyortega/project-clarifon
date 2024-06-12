import React from "react";
import "./InfoProduct.css";
import bigImg from '/src/assets/imgs/big-img.png';
import perfilImg from '/src/assets/imgs/perfil.png';
import dispositivoImg from '/src/assets/imgs/dispositivo.svg';
import ellipseImg from '/src/assets/imgs/Ellipse 95.png';
import tickCircleImg from '/src/assets/imgs/tick-circle.svg';
import visaImg from '/src/assets/imgs/visa.svg';
import shopPayImg from '/src/assets/imgs/shop pay.svg';
import paypalImg from '/src/assets/imgs/paypal.svg';
import mastercardImg from '/src/assets/imgs/mastercard.svg';
import gpayImg from '/src/assets/imgs/gpay.svg';
import appleImg from '/src/assets/imgs/apple.svg';
import amexImg from '/src/assets/imgs/amex.svg';
import emblemaImg from '/src/assets/imgs/emblema-garantia.png';

export const InfoProduct = () => {
  return (
    <div id="infoProduct">
      <div id="box-left">
        <img src={bigImg} alt="Big" />
        <div id="box-opinion">
          <div id="box-perfil">
            <img src={perfilImg} alt="Perfil" />
            <div id="perfil-info">
              <p>⭐⭐⭐</p>
              <div id="perfil-name">
                <p>Ken T.</p>
                <span>
                  <i className="fa-solid fa-certificate"></i> Verified Customer
                </span>
              </div>
            </div>
          </div>
          <p>
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </div>
      </div>
      <div id="box-right">
        <div id="box1">
          <span id="blueContent">ONE TIME ONLY</span>
          Special price for 6 extra Clarifion for only
          <span id="blueContent">$14 Each</span> ($84.00 total!)
        </div>

        <div id="box2">
          <img
            src={dispositivoImg}
            alt="Dispositivo Clarifion"
          />
          <div id="box2-left">
            <div id="clarifionAirIonizer">
              <p>Clarifion Air Ionizer</p>
              <div id="priceIonizer">
                <span className="priceIonizer1">$180</span>
                <span className="priceIonizer2">$84</span>
              </div>
            </div>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              <img src={ellipseImg} alt="Ellipse" />
              12 left in Stock
            </p>
            <p>
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>

        <div id="box3">
          <p>
            <img src={tickCircleImg} alt="check" />
            Negative Ion Technology may help with allergens
          </p>
          <p>
            <img src={tickCircleImg} alt="check" />
            Designed for air rejuvenation
          </p>
          <p>
            <img src={tickCircleImg} alt="check" />
            Perfect for every room in all types of places.
          </p>
        </div>

        <div id="box4">
          <p>
            Save <span className="blueContent">%53</span> and get{" "}
            <span className="blueContent">6 extra Clarifision</span> for only{" "}
            <span className="blueContent">%53</span> and get{" "}
            <span className="blueContent">$14 Eachy</span>.
          </p>
        </div>

        <div id="box5">
          <section id="sectOne">
            <button>
              <p>YES - CLAIM MY DISCOUNT</p>
              <p>→</p>
            </button>
          </section>
          <section id="sectTwo">
            <div id="secure256">
              <p>Free Shipping</p> <span>|</span>
              <i className="fa-solid fa-lock"></i>
              <p>Secure 256-bit SSL encryption.</p><span>|</span>
              <div id="box5-sectTwo-Img">
                <img src={visaImg} alt="Visa" />
                <img src={shopPayImg} alt="Shop Pay" />
                <img src={paypalImg} alt="Paypal" />
                <img src={mastercardImg} alt="Mastercard" />
                <img src={gpayImg} alt="Google Pay" />
                <img src={appleImg} alt="Apple Pay" />
                <img src={amexImg} alt="Amex" />
              </div>
            </div>
            <p>NO THANKS, I DONT´T WANT THIS</p>
          </section>
        </div>

        <div id="box6">
          <img
            id="emblema"
            src={emblemaImg}
            alt="Emblema"
          />
          <p>
            If you are not completely thrilled with your Clarifion - We have a 
            <strong> 30 day satisfaction guarantee</strong>. Please refer to our return policy at
            the bottom of the page for more details. Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  );
};
