import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './SmallerWW-removebg-preview.png'
import '../Navbar/Navbar2.css'

export function Navbar2({page, setPage}: {page:string; setPage: (newPage: string) => void}) {
  const [previousPage, setPreviousPage] = useState<string>("Home");

  const handleNavClick = (newPage: string) => {
    setPreviousPage(page);
    setPage(newPage);
  }

  const handleBackButtonClick = () => {
    setPage(previousPage);
  }

  return (
    <Navbar fixed="top" bg="dark bg-dark gradient-custom rounded" style={{height: '4rem', marginTop: '.25rem', marginRight: '.25rem', marginLeft: '.25rem'}} data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='brand-logo'>
            <img src={logo} className="logo-img"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick("Home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Basic")}>Basic Quiz</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Detailed")}>Detailed Quiz</Nav.Link>
          </Nav>
          {page !== "Home" && (
            <Nav.Link onClick={handleBackButtonClick}>Back</Nav.Link>
          )}
          <span className="navbar-text">
            Current Page: {page}
          </span>
        </Container>
      </Navbar>
  );
}

export default Navbar2;