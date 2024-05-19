//import React, { useState } from 'react';
import "../styles/NavigationBar.css";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';
// import React, { useState } from "react";

export function NavigationBar() {
  // const [showMenu, setShowMenu] = useState(false);
  // const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  //   setIsSideNavOpen(!isSideNavOpen);
  // };

  return (
    <nav>
      <ul className="navbar" id="navbar">
        <div className="left-links">
          <li>
            <a className="icon-text nav-item" href="/starter_helpi">
              JRNY
            </a>
          </li>
        </div>
        {/* <div className={`right-links ${showMenu ? "show-menu" : ""}`}>
          <li>
            <a className="inverted-btn nav-item" href="/starter_helpi/#/signup">
              Sign Up
            </a>
          </li>
          <li>
            <a className="normal-btn nav-item" href="/starter_helpi/#/login">
              Login
            </a>
          </li>
        </div>
        <li className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isSideNavOpen ? "open" : ""}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </li> */}
      </ul>
      {/* <div className={`side-navigation ${showMenu ? "show" : ""}`}>
        <ul className="side-bar-content">
          <li>
            <a className="" href="/starter_helpi/#/signup">
              Sign Up
            </a>
          </li>
          <li>
            <a className="" href="/starter_helpi/#/login">
              Login
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default NavigationBar;
