//import React, { useState } from 'react';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DetailedPage from './pages/DetailedPage';
import HomePage from './pages/homePage';
import BasicPage from './pages/BasicPage';

import key from './pages/homePage';

import OpenAI from "openai";

const openai = new OpenAI({
  ///organization:,
  ///apiKey: key,
  dangerouslyAllowBrowser: true,
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        "role": "system",
        "content": "You will tell me what career I should pursue based on my interests."
      },
      {
        "role": "user",
        "content": "I like math, computers, and logic."
      }
    ],
    temperature: 0.8,
    max_tokens: 64,
    top_p: 1,
  });

  console.log(response.choices[0].message.content);
}

main();

function App() {
   
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailedPage" element={<DetailedPage />} />
        <Route path="/BasicPage" element={<BasicPage/>}/>
      </Routes>
    </Router><div className="App">
        
      </div>
      <div className='app-footer'>
        <p>Footer text</p>
      </div>
    </>
  );
}

export default App;
