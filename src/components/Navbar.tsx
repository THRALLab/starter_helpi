import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Button } from "react-bootstrap";

 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        <Button>Home</Button>
                    </NavLink>
                    <NavLink to="/detailedPage">
                        <Button>Detailed Page</Button>
                    </NavLink>
                    <NavLink to="/BasicPage">
                        <Button>Basic Page</Button>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;