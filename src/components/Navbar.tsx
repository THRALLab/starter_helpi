import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/detailedPage">
                        Detailed Page
                    </NavLink>
                    <NavLink to="/homePage">
                        Home
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;