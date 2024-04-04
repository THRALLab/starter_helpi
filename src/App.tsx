import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DetailedPage from './pages/deatiledPage';
import Home from './pages/homePage';


function App() {
   
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailedPage" element={<DetailedPage />} />
      </Routes>
    </Router><div className="App">
        
      </div></>
  );
}

export default App;
