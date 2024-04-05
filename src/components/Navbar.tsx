import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/detailedPage">
                        Detailed Page
                    </NavLink>
                    <NavLink to="/basicPage">
                        Basic Page
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;