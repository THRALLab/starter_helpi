import React from 'react';
import { Container} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import './basicresult.css';

function BasicResult() {
  const location = useLocation(); // Get the location object
  const { result} = location.state;
  /*const formattedResult = result.split('\n').map(
    (
      line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined,
      index: React.Key | null | undefined
    ) => {
      if (line == null) {
        return null; 
      }
      const cleanLine = line.toString().replace(//g, '');
      //return <p key={index}>{cleanLine}</p>;
   // }
  //);*/
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

