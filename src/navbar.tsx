import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo  from "./images/CISC-Logo.png";
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components

export function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="homepage">⚞ Cat-ylist Quiz ⚟</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="BasicQuestion">Basic Question</Nav.Link>
            <Nav.Link as={Link} to="DetailedQuestion">Detail Question</Nav.Link>
            <Nav.Link as={Link} to="AboutMe">About Me</Nav.Link>
            <Nav.Link as={Link} to="BasicResult">Result</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Nav.Item>
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