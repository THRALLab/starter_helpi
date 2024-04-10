import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './SmallerWW-removebg-preview.png'
import '../Navbar/Navbar2.css'

export function Navbar2({page, setPage}: {page:string; setPage: (newPage: string) => void}) {
  return (
    <Navbar fixed="top" bg="dark bg-dark gradient-custom rounded" style={{height: '4rem', marginTop: '.25rem', marginRight: '.25rem', marginLeft: '.25rem'}} data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='brand-logo'>
            <img src={logo} className="logo-img"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("Home")}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage("Basic")}>Basic Quiz</Nav.Link>
            <Nav.Link onClick={() => setPage("Detailed")}>Detailed Quiz</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navbar2;