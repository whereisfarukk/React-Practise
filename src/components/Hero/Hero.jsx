import React from "react";
import "./Hero.css";
import { FaCalendarAlt } from "react-icons/fa";
import home_img from "/assets/home_img.png";
import profile_img from "/assets/Profile.jpeg";
import Quote from "../icons/Quote";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="left-content">
          <div className="section1">Build Your Dream Home</div>
          <div className="section2">
            From custom homes to new projects, Makaan Builders offers innovative
            solutions and exceptional craftsmanship. Experience the difference
            with us.
          </div>
          <div className="section3">
            <div className="card-1">
              <div className="sub-card-1">Build</div>
              <div className="sub-card-2">House & land</div>
            </div>
            <div className="card-2">
              <div className="sub-card-1">
                <div> Location</div>
                <h5> Enter Location</h5>
              </div>
              <div className="sub-card-2">
                <div> When</div>
                <h4>
                  {" "}
                  Select a Date{" "}
                  <FaCalendarAlt
                    className="calendar-icon"
                    style={{ color: "#d2d1e3", marginLeft: "4px" }}
                  />
                </h4>
              </div>
              <div className="sub-card-3">
                <button>Make your makaan</button>
              </div>
            </div>
          </div>
          <div className="section4">Safe investments</div>
        </div>
        <div className="right-content">
          <div className="card">
            <div className="row-1">
              <div className="col-1">
                <img src={profile_img}></img>
              </div>
              <div className="col-2">
                <h3>Manuel Villa</h3>
                <p>Customer</p>
                <p>Moved with</p>
              </div>
            </div>
            <div className="row-2">
              <div className="col-1">
                <Quote />
              </div>
              <div className="col-2">
                <p>
                  I loved how smooth the move was, and finally got the house we
                  wanted.
                </p>
              </div>
            </div>
            <div className="row-3">
              <div className="col-1">
                <h2>$1,500</h2>
                <p>Saved up to</p>
              </div>
              <div className="col-1">
                <h2>6 Month</h2>
                <p>Process time</p>
              </div>
            </div>
          </div>
          <img src={home_img}></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
