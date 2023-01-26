import React from "react";
import dashboard from "../images/dashboard.png";
import shopify from "../images/client-1.png";
import neorpod from "../images/client-2.png";
import bench from "../images/client-3.png";
import forbes from "../images/client-4.png";
import bumble from "../images/client-5.png";
export default function Header() {
  return (
    <>
      <div className="container head">
        <div className="left__header " data-aos="fade-up" data-aos-duration="1500">
          <h4>Advanced Platform</h4>
          <h1>
            Take your team <br /> to the next level
          </h1>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Sunt
            itaque
          </p>
          <button className="header__button">
            <h4 className="header__about-us">About us</h4>
          </button>
        </div>
        <div className="right__header" data-aos="fade-down" data-aos-duration="1500">
          <img src={dashboard} alt="dashboard" className="header__dashboard" />
        </div>
      </div>
      <div className="clients">
        <img src={shopify} alt="shopify" />
        <img src={neorpod} alt="neorped" />
        <img src={bench} alt="bench" />
        <img src={forbes} alt="forbes" />
        <img src={bumble} alt="bumble" />
      </div>
    </>
  );
}
