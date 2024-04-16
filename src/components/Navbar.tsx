//import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import { Button } from "react-bootstrap";
import logo from './logo.svg';
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="site-title">
                    <h1>Website Title</h1>
                </div>
                <div className="site-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <NavMenu>
                    <NavLink to="/">
                        <Button>Home</Button>
                    </NavLink>
                    <NavLink to="/BasicPage">
                        <Button>Basic Page</Button>
                    </NavLink>
                    <NavLink to="/detailedPage">
                        <Button>Detailed Page</Button>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;