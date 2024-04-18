import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import joblogo from "../images/job-Logo.png";

export function Navbar() {
  return (
    <div className="navBar">
      <div>
        <img src={joblogo} alt="" className="logo" />
      </div>
      <div className="navLinks">
        <Link to="/">
          <Button className="home-btn">Home</Button>
        </Link>
        <Link to="/basicPage">
          <Button className="basic-btn">Basic</Button>
        </Link>
        <Link to="/detailedPage">
          <Button className="detailed-btn">Detailed</Button>
        </Link>
      </div>
    </div>
  );
}
