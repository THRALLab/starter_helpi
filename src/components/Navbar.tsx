//import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import { DarkModeToggle } from "./darkMode";
 
const Navbar = () => {
    return (
        <div style={{}}>
        
            <Nav>
                <div className="site-title">
                    <p>JobNav.com</p>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <DarkModeToggle />
                    <NavMenu>
                        <NavLink to="/">Home Page</NavLink>
                        <NavLink to="/BasicPage">Basic Page</NavLink>
                        <NavLink to="/DetailedPage">Detailed Page</NavLink>
                    </NavMenu>
                </div>
                
            </Nav>
        </div>
    );
};
 
export default Navbar;