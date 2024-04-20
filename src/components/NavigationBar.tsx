//import React, { useState } from 'react';
import "../styles/NavigationBar.css";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function NavigationBar() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <ul>
      <div className="left-links">
        <li>
          <a className="icon-text nav-item" href="/starter_helpi">
            JRNY
          </a>
        </li>
      </div>
      <div className="right-links">
        <li>
          <a className="inverted-btn nav-item" href="/starter_help/#/signup">
            Sign Up
          </a>
        </li>
        <li>
          <a className="normal-btn nav-item" href="/starter_help/#/login">
            Login
          </a>
        </li>
      </div>
    </ul>
  );
}

export default NavigationBar;
