import React from 'react';
import { useLocation } from 'react-router-dom';

const Result: React.FC = () => {
  const location = useLocation();
  const result = location.state?.result || '';

  // Format the result into paragraphs for better readability
  const formattedResult = result.split('\n').map((line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div>
      <h1 className="result-heading">Your Quiz Result</h1>
      <div className="result-content">
        {formattedResult}
      </div>
    </div>
  );
};

export default Result;
