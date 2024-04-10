//import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import { Button } from "react-bootstrap";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="site-title">
                    <h1>Website Title</h1>
                </div>
                <NavMenu>
                    <NavLink to="/">
                        <Button>Home</Button>
                    </NavLink>
                    <NavLink to="/detailedPage">
                        <Button>Detailed Page</Button>
                    </NavLink>
                    <NavLink to="/basicPage">
                        <Button>Basic Page</Button>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;