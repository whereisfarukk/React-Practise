import React, { useState } from "react";
import "./Navbar.css";
import logo_img from "/assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, isSetOpen] = useState(false);
  const toggleMenu = () => {
    isSetOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <div>
              <img src={logo_img}></img>
              <h4> Maakan Builders</h4>
            </div>
            <ul className={isOpen ? "navlink active" : "navlink"}>
              <li>
                <a className="menu-item">Home Design</a>
              </li>
              <li>
                <a className="menu-item">Display Homes</a>
              </li>
              <li>
                <a className="menu-item">Buy</a>
              </li>
              <li>
                <a className="menu-item">Portfolio</a>
              </li>
              <li>
                <a className="menu-item">Investor Deals</a>
              </li>
            </ul>
            <button className="make-your-maakan">Make your own makaaan</button>

            <div className="icon" onClick={toggleMenu}>
              {" "}
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
