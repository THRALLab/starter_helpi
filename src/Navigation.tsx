import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const location = useLocation();

  const showHomeButton = location.pathname !== '/';
  const showQuestionsButtons = !['/basic-questions', '/detailed-questions'].includes(location.pathname);

  return (
    <nav>
      <ul>
        {showHomeButton && (
          <li>
            <Button variant="link" as="a">Home</Button>
          </li>
        )}
        {showQuestionsButtons && (
          <>
            <li>
              <Link to="/basic-questions">
                <Button variant="link" as="a">Basic Questions</Button>
              </Link>
            </li>
            <li>
              <Link to="/detailed-questions">
                <Button variant="link" as="a">Detailed Questions</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
