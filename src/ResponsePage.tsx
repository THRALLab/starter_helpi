import React from 'react';
import { useLocation } from 'react-router-dom';

function ResponsePage() {
  // Access location and its state
  const location = useLocation();
  const answers: string[] = location.state?.answers || [];

  return (
    <div>
      <h1>Response Page</h1>
      <p>Answers:</p>
      <ul>
        {answers.map((answer: string, index: number) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResponsePage;
