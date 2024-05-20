import React from 'react';
import { Container} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import './BasicResult.css';

function BasicResult() {
  const location = useLocation(); // Get the location object
  const { result} = location.state;
  //Getting HTML code from the api call (By giving it a specific prompt) then get the html code to display
  const htmlContent = { __html: result };
  return (
    <div>
      <Container className="job-and-salary-area">
              <h1 id ="title">RESULT ANALYSIS</h1>
                <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            fontSize: '24px',
            color: 'black',
            backgroundColor: '#F09738',
            fontFamily: 'Roboto',
            height: '75%',
            padding: '40px',
            marginLeft: '200px',
            marginRight: '200px',
            marginBottom: '100px',
            borderRadius: '30px',
            border: "10px solid", 
            borderColor: '#EF751B',
            width: '80%',
          }}
          dangerouslySetInnerHTML={htmlContent}
        ></div>
            </Container>
    </div>
  );
}

export default BasicResult;

