//import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import { DarkModeToggle } from "./darkMode";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="site-title">
                    <p>JobNav.com</p>
                </div>
                <DarkModeToggle />
                <NavMenu>
                    <NavLink to="/">Home Page</NavLink>
                    <NavLink to="/BasicPage">Basic Page</NavLink>
                    <NavLink to="/DetailedPage">Detailed Page</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;