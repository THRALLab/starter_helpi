import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';




export function DetailedQuestionsPage(): JSX.Element {
    const [goToHomePage, setGoToHomePage] = useState(false);
    const [inputText, setInputText] = useState('');
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);

    const handleClearText = () => {
        setInputText('');
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>CareerFinder4U</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
            <Nav.Link onClick={() => {setGoToHomePage(true)}}>Home</Nav.Link>
              <Nav.Link onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <p></p>
            <h1>Detailed Questions Page</h1>
            <p className="text-muted">The detailed career assessment goes in depth to plan out your professional preferences, skills, and motivators. Completing this assessment will provide you with a complex overview of career paths that align with your detailed profile. Coming soon. </p>
            <Form.Control
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button variant="solid" onClick={handleClearText}>Reset</Button>
        </div>
    );
}
