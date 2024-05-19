  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import './basicQuestion.css';

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
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center', // Center items vertically
            fontSize: '24px',
            color: 'black',
            backgroundColor: '#FFB96F',
            fontFamily: 'Roboto', // Changed from 'font' to 'fontFamily'
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

        <Link to = "/homepage">
            <button
              style={{
                backgroundColor: '#fbeee0',
                border: '2px solid #422800',
                borderRadius: '30px',
                boxShadow: '#422800 4px 4px 0 0',
                color: '#422800',
                cursor: 'pointer',
                display: 'inline-block',
                fontWeight: 600,
                fontSize: '18px',
                padding: '0 18px',
                lineHeight: '50px',
                textAlign: 'center',
                textDecoration: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                touchAction: 'manipulation',
                minWidth: '200px',
                marginBottom: '60px',
                marginTop:'-40px',
                marginLeft:'70%',
              }}
            >
              Go Home
            </button>
        </Link>
      </div>
    );
  };

  export default Result;
