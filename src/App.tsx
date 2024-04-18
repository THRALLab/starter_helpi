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
        
      </div></>
  );
}

export default App;
