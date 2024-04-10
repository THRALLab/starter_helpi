import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function HomePage() {
  const [key, setKey] = useState<string>(keyData);
  const [currentPage, setCurrentPage] = useState<string>('HomePage');

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function HomePageContent() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/HomePage.tsx</code> and save to reload.
            <div>Zhicheng Liu</div>
            <div>Qingjian Xu</div>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>
    );
  }

  function BasicPageContent() {
    return (
      <div>
        <h2>Basic Page Content</h2>
        {/* Content for Basic Page */}
      </div>
    );
  }

  function Page2Content() {
    return (
      <div>
        <h2>Page 2 Content</h2>
        {/* Content for Page 2 */}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="page-container">
        <div className="page-navigation">
          <Button onClick={() => setCurrentPage('HomePage')}>HomePage</Button>
          <Button onClick={() => setCurrentPage('BasicPage')}>Basic Page</Button>
          <Button onClick={() => setCurrentPage('Page2')}>Page 2</Button>
        </div>
        <div className="page-content">
          {currentPage === 'HomePage' && <HomePageContent />}
          {currentPage === 'BasicPage' && <BasicPageContent />}
          {currentPage === 'Page2' && <Page2Content />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;