import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LoadingAndRedirect: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the loading duration in milliseconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Navigate to="result" replace />
      )}
    </div>
  );
};

export default LoadingAndRedirect;
