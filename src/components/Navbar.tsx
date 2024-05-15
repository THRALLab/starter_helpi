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
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/BasicPage">Basic Quiz</NavLink>
                        <NavLink to="/DetailedPage">Detailed Quiz</NavLink>
                        <NavLink to="/ResultsPage">Results</NavLink>
                    </NavMenu>
                </div>
                
            </Nav>
        </div>
    );
};
 
export default Navbar;