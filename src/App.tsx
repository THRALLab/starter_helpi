import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Home from './Pages/Home';
import Basic from './Pages/Basic';
import Detailed from './Pages/Detailed';
import NavHome from './navbar';
import CareerSearchByInterest from './Pages/interests';
import Results from './Pages/Results';

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); // for api key input
  const [currPg, setCurrPg] = useState<string>('Home');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<string>(''); // State to store questions and answers

  // Sets the local storage item to the api key the user inputted
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); // when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stored for the local storage variable
  }

  // Whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  // Function to handle navigation and update page state
  const handlePageChange = (page: string, data?: string) => {
    setCurrPg(page);
    if (data) {
      setQuestionsAndAnswers(data); // Set questionsAndAnswers when navigating to Results page
    }
  };

  // Function to render the appropriate page based on currPg state
  const renderPage = () => {
    switch (currPg) {
      case 'Basic':
        return <Basic handlePage={handlePageChange} />;
      case 'Detailed':
        return <Detailed handlePage={handlePageChange} />;
      case 'interests':
        return <CareerSearchByInterest handlePage={handlePageChange} />;
      case 'Results':
        return <Results handlePage={handlePageChange} questionsAndAnswers={questionsAndAnswers} apiKey = {key}/>;
      default:
        return <Home handlePage={handlePageChange} />;
    }
  };

  return (
    <>
      <NavHome handlePage={setCurrPg} />

      {renderPage() /* Renders the page */}

      <footer className="footer" /* Bottom of page */>
        <h2 className="footer-container">Contact Us</h2>
        <h2 className="footer-container">Help</h2>
        <Form className="api-form">
          <Form.Group controlId="apiKey" /* Form for API Key Input */>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} />
          </Form.Group>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </footer>
    </>
  );
}

export default App;