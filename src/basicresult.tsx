import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CollapsibleNavbar from './navbar';
import './basicresult.css';
function BasicResult() {
  return (
    <div>
    <CollapsibleNavbar/>
    <Container className ="result-area">
      <h1>Career Analysis</h1>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Quiz Result Analysis</Card.Title>
              <Card.Text>
                Analyzing your career quiz result...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Average Salaries</Card.Title>
              <Card.Text>
                Average salaries for different job roles...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Available Jobs</Card.Title>
              <Card.Text>
                List of available jobs based on your quiz result...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Container>
    </div>
  );
} 
export default BasicResult;
