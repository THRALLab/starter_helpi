import React from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export function ContactUs(): JSX.Element {
  const [goToHomePage, setGoToHomePage] = React.useState(false);
  const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
  const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

  const handleGoToHomePage = () => {
    setGoToHomePage(true);
  };

  if (goToHomePage) {
    return <Navigate to="/" />;
  }

  if (goToBasicQuestionsPage) {
    return <Navigate to="/BasicQuestionsPage"/>
  }

  if (goToDetailedQuestionsPage) {
    return <Navigate to="/DetailedQuestionsPage"/>
  }

  

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>CareerFinder4U</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                <Nav.Link onClick={handleGoToHomePage}>Home</Nav.Link>
                <Nav.Link onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Nav.Link>
                <Nav.Link onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      <p></p>
      <h1 className='padding3'>Contact Us</h1>
      <p></p>
      <main className='padding2'>
        <div className="box" style={{ width: '50%', margin: 'auto', padding: '20px', minHeight: '450px' }}>
          <p></p>
          <h3>Contact Information:</h3>
          <div style={{ marginBottom: '20px' }}>
            <strong>Email:</strong> worker1@example.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890 <br />
            <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong>Email:</strong> worker2@example.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890 <br />
            <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong>Email:</strong> worker3@example.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890 <br />
            <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong>Email:</strong> worker4@example.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890 <br />
            <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
          </div>

          <p></p>
        </div>
      </main>
    </div>
  );
};
