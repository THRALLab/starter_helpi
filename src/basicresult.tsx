import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import './basicresult.css';

function BasicResult() {
  const location = useLocation(); // Get the location object
  const result = location.state?.result; // Retrieve the result from the location state

  return (
    <div>
      <Container className="head-result">
        <h1 className="result-h1">Result analysis</h1>
        <img className='cat-title' alt="meomeo"></img>
      </Container>
      <Container className="job-and-salary-area">
        <Row md={6}>
          <Card className="salary">
            <img className="cat-logo2" alt="con meo"></img>
            <Card.Body>
              <Card.Title>Average Salaries</Card.Title>
              <Card.Text>
                Average salaries for different job roles...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="job">
            <img className="cat-logo3" alt="con meo2"></img>
            <Card.Body>
              <Card.Title>Available Jobs</Card.Title>
              <Card.Text>
                List of available jobs based on your quiz result...
                {/* Display the result received from the Questionnaire */}
                <p>{result}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default BasicResult;
