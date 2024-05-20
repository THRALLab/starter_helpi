  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import './basic-questions/BasicQuestion.css';

  const Result: React.FC = () => {
    const location = useLocation();
    const { result } = location.state;

    // Inject the HTML response into the component
    const htmlContent = { __html: result };

    return (
      <div>
      <h1 className="questionnaire-heading" style={{ textAlign: 'center', fontSize: '75px', margin: '40px' }}>Your Quiz Results</h1>
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
            borderColor: '#EF751B'
          }}
          dangerouslySetInnerHTML={htmlContent}
        ></div>
      </div>
    );
  };

  export default Result;
