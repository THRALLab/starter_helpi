import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Components/SmallerWW-removebg-preview.png'
import '../Components/Navbar2.css'

function Navbar2() {
  return (
    <Navbar fixed="top" bg="*" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='brand-logo'>
            <img src={logo} className="logo-img"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://michaellutz1.github.io/starter_helpi/">Home</Nav.Link>
            <Nav.Link href="#Basic">Basic Quiz</Nav.Link>
            <Nav.Link href="#Detailed">Detailed Quiz</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navbar2;