import React from "react";
import "./Benefit.css";
import Icon from "../icons/Icon";
import BenefitCards from "./components/BenefitCards";
import House from "../icons/House";
export default function Benefit() {
  return (
    <section className="Benefit-container">
      <div className="Benefit-content">
        <div className="left">
          <h2>The new way to Build your new home</h2>
          <p>
            Find your dream place to live in with more than 10k+ properties
            listed.
          </p>
          <button className="make-your-maakan">Make your own makaaan</button>
          <House />
        </div>
        <div className="right">
          <BenefitCards />
          <BenefitCards />
          <BenefitCards />
          <BenefitCards />
        </div>
      </div>
    </section>
  );
}
