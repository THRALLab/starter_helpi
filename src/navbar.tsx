import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo  from "./images/CISC-Logo.png";
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import CatMeow from './sounds/Cat Meow - Minecraft Sound Effect (HD).mp3';
const playClickSound = () => {
  //const url = "./sounds/ButtonPlate Click (Minecraft Sound) - Sound Effect for editing.mp3";
  const audio = new Audio(CatMeow);
  audio.play();
};
export function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="homepage">⚞ Cat-alyst Quiz ⚟</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navlink-container">
            <button id ="nav-basic">
            <Nav.Link as={Link} to="BasicQuestion">Basic Questions</Nav.Link>
            </button>
            <button id="nav-detail">
            <Nav.Link as={Link} to="DetailedQuestion">Detailed Questions</Nav.Link>
            </button>
            <button id="nav-aboutme">
            <Nav.Link as={Link} to="AboutMe">About Me</Nav.Link>
            </button>
           
            
          </Nav>
        </Navbar.Collapse>
        <Nav.Item onClick = {playClickSound}>
            <img
              src={logo}
              alt="Logo"
              className ="logo"
            />
        </Nav.Item>   
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;