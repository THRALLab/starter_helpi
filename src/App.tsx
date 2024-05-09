import React, { useEffect, useState } from 'react';
import Loading from "./Loading";
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import ProgressBar from './ProgressBar';

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
const keyData = prevKey !== null ? JSON.parse(prevKey) : "";

function App() {
  const [key, setKey] = useState<string>(keyData); // for api key input
  const [loading, setLoading] = useState(true);

  const progressValue = 90; // Change this value as needed

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  // Sets the local storage item to the api key the user input
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); // When making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  // Whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <h1>Progress Bar Example</h1>
          <ProgressBar progress={progressValue} />
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <br />
        <p>
          Team Manager: Victoria Nikolaeva
          Team Members: Giovanna Scozzaro, Dustine Trieu, Duy Duc Tran
        </p>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" value={key} onChange={changeKey} />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
