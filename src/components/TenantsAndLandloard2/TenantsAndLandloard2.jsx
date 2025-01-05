import React from "react";
import "./TenantsAndLandloard2.css";
import home_img from "/assets/home.png";
export default function TenantsAndLandloard2() {
  return (
    <section className="TenantsAndLandloard-container2">
      <div className="TenantsAndLandloard-content2">
        <div className="firstColumn">
          <div className="firstColumn-content">
            <h1>
              <span style={{ color: "#FB9B84" }}>Customize</span> and determine
              the <span style={{ color: "#FB9B84" }}>cost</span> of your{" "}
              <span style={{ color: "#FB9B84" }}>home</span> online, at your
              convenience.
            </h1>
            <p>
              At The Makaan Builders, we've simplified the journey of building
              your first home with our innovative Price Your Home Tool, making
              the process quicker, more intelligent, and more convenient than
              ever. Now, you have the ability to design and price your dream
              home online, at any time, without having to leave your house.
            </p>
            <button
              className="make-your-maakan"
              style={{ width: "13rem", padding: "12px", border: "none" }}
            >
              Make your own makaaan
            </button>
          </div>
        </div>
        <div className="secondColumn">
          <img src={home_img}></img>
        </div>
      </div>
    </section>
  );
}
