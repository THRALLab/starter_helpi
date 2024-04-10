import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navLinks">
      <Link to="/">
        <Button className="home-btn">Home</Button>
      </Link>
      <Link to="/basicPage">
        <Button className="home-btn">Basic</Button>
      </Link>
      <Link to="/detailedPage">
        <Button className="home-btn">Detailed</Button>
      </Link>
    </div>
  );
}
