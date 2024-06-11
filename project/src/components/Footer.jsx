import React from "react";
import "./Footer.css"
export const Footer = () => {
  return (
    <div className='footer'>
      <div id="div1">
        <p>Copyright (c) 2023</p>
        <p className="|">|</p>
        <p>Clarifionsupport@clarifion.com</p>
      </div>
      <div id="div2">
      <i class="fa-solid fa-lock"></i>
      <p>Secure 256-bit SSL encryption.</p>
      </div>
    </div>
  );
};
