import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/detailedPage">
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;