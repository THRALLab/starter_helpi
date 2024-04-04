import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import detailedPage from './pages/deatiledPage';


function App() {
   
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detailedPage" element={<detailedPage />} />
      </Routes>
    </Router><div className="App">
        
      </div></>
  );
}

export default App;
