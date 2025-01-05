import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <a className="logo">
            <div>
              <img src="/public/assets/logo.png"></img>
              <h4> Maakan Builders</h4>
            </div>
            <ul>
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
          </a>

          <button className="make-your-maakan">Make your own makaaan</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
