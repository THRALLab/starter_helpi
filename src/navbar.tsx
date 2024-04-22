import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./App.css";
import "./navbar.css";
import animal from "./caribou.png";

function Navigation() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand className="logo" as={Link} to="/">
					<img src={animal} alt="Caribou" />
				</Navbar.Brand>
				<h1>CAREERibou</h1>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link as={Link} to="/basic">
							Basic Quiz
						</Nav.Link>
						<Nav.Link as={Link} to="/detailed">
							Detailed Quiz
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default Navigation;
