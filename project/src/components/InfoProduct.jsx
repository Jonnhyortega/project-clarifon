import React from "react";
import "./InfoProduct.css";
export const InfoProduct = () => {
  return (
    <div id="infoProduct">
      <div id="box-left">
        <img src="./src/assets/imgs/big-img.png" alt="" />
        <div id="box-opinion">
          <div id="box-perfil">
            <img src="./src/assets/imgs/perfil.png" alt="" />
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
            src="./src/assets/imgs/dispositivo.svg"
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
              <img src="./src/assets/imgs/Ellipse 95.png" alt="Ellipse" />
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
            <img src="./src/assets/imgs/tick-circle.svg" alt="check" />
            Negative Ion Technology may help with allergens
          </p>
          <p>
            <img src="./src/assets/imgs/tick-circle.svg" alt="check" />
            Designed for air rejuvenation
          </p>
          <p>
            <img src="./src/assets/imgs/tick-circle.svg" alt="check" />
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
                <img src="./src/assets/imgs/visa.svg" alt="Visa" />
                <img src="./src/assets/imgs/shop pay.svg" alt="O Pay" />
                <img src="./src/assets/imgs/paypal.svg" alt="Paypal" />
                <img src="./src/assets/imgs/mastercard.svg" alt="Mastercard" />
                <img src="./src/assets/imgs/gpay.svg" alt="Google Pay" />
                <img src="./src/assets/imgs/apple.svg" alt="Apple Pay" />
                <img src="./src/assets/imgs/amex.svg" alt="Amex" />
              </div>
            </div>
            <p>NO THANKS, I DONT´T WANT THIS</p>
          </section>
        </div>

        <div id="box6">
          <img
            id="emblema"
            src="./src/assets/imgs/emblema-garantia.png"
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
