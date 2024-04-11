import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './FinalLogo.png'
import '../Navbar/Navbar2.css'
import { GoArrowLeft } from "react-icons/go";
import Button from 'react-bootstrap/Button';

export function Navbar2({ page, setPage }: { page: string; setPage: (newPage: string) => void }) {
  const [previousPage, setPreviousPage] = useState<string>("Home");

  const handleNavClick = (newPage: string) => {
    setPreviousPage(page);
    setPage(newPage);
  }

  const handleBackButtonClick = () => {
    setPage(previousPage);
  }

  return (
    <Navbar sticky="top" style={{ color: 'white', backgroundColor: '#21273b', height: '4rem', marginTop: '.25rem', marginRight: '.25rem', marginLeft: '.25rem' }} data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => handleNavClick("Home")} href="#home" className='brand-logo'>
          <img src={logo} alt='logo' className="logo-img" />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link onClick={() => handleNavClick("Home")}>
              {(page === "Home" && (<text className='navbar-selected'>Home</text>)) || (page !== "Home" && (<text>Home</text>))}
            </Nav.Link>
          <Nav.Link onClick={() => handleNavClick("Basic")}>
              {(page === "Basic" && (<text className='navbar-selected'>Basic</text>)) || (page !== "Basic" && (<text>Basic</text>))}
            </Nav.Link>
          <Nav.Link onClick={() => handleNavClick("Detailed")}>
              {(page === "Detailed" && (<text className='navbar-selected'>Detailed</text>)) || (page !== "Detailed" && (<text>Detailed</text>))}
            </Nav.Link>
        </Nav>
        <span className="navbar-text" style={{ marginRight: '25px' }}>
          Current Page: {page}
        </span>
        <div className='d-flex align-items-center'>
          {page !== "Home" && page !== previousPage && (
            <Button onClick={handleBackButtonClick} className='d-flex align-items-center navbar-back' style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
              <GoArrowLeft style={{ marginRight: '2px' }} />
              <Nav.Link >Back</Nav.Link>
            </Button>
          )}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;