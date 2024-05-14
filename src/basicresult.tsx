import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import './basicresult.css';

function BasicResult() {
  const location = useLocation(); // Get the location object
  const { result} = location.state;
  const formattedResult = result.split('\n').map(
    (
      line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined,
      index: React.Key | null | undefined
    ) => {
      if (line == null) {
        return null; 
      }
      const cleanLine = line.toString().replace(/\*/g, ''); // Remove asterisks from the line
      return <p key={index}>{cleanLine}</p>;
    }
  );
  return (
    <div>
      <Container className="job-and-salary-area">
          <Card className="job">
            <Card.Body>
              <Card.Title id ="title">Result analysis</Card.Title>
              <Card.Text>
                {/* Display the result received from the Questionnaire */}
                <p className='result-text'>{formattedResult}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
    </div>
  );
}

export default BasicResult;
