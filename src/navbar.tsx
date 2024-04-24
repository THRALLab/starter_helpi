import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="src/App.tsx">Career Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => window.location.href = "./basicQuestion.tsx"}>Basic quiz</Nav.Link>
            <Nav.Link href="#pricing">Detail quiz</Nav.Link>
            <NavDropdown title="My result" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">See more college majors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Career path
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salaries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Reach out to a mentor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>   
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;