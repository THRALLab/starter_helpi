import './App.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavHome() {
    return (
        <Container>
        <Navbar.Brand href="#home">Career Helpi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Button style={{color: 'black'}}>Home</Button>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Next</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Prev
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">List Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    )
}