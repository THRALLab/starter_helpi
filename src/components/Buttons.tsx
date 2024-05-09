import React from 'react';
//import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CareerFinder from '../images/CareerFinder.png';


/*export function Buttons(): JSX.Element {

    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }

    return (
        <div>
            <Button onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
            <Button onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
        </div>
    )
}*/

export function Buttons() {
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    //const [goToHomePage, setGoToHomePage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }

    /*if (goToHomePage) {
        return <Navigate to="/"/>
    }*/

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>CareerFinder4U</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Nav.Link>
            <Nav.Link onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Nav.Link>
          </Nav>
          <Nav className="ms-auto"> {/* Use ms-auto to push items to the right */}
                        <img src={CareerFinder} alt="CareerFinder4U Logo" style={{ height: 50, width: 50 }} />
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}