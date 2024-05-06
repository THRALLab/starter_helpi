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
import ResultsPage from './pages/ResultsPage';
import { createContext, useState } from 'react';

export const GPTcontext = createContext<{ GPTresponse: string[], setGPTresponse: React.Dispatch<React.SetStateAction<string[]>> }>({ GPTresponse: [], setGPTresponse: () => {} });


function App() {

  const [GPTresponse, setGPTresponse] = useState<string[]>(["Career 1", "Career 1 Description", "Career 2", "Career 2 Description", "Career 3", "Career 3 Description", "Career 4", "Career 4 Description"]);
return(
    <>    
    <GPTcontext.Provider value={{GPTresponse, setGPTresponse}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/starter_helpi/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detailedPage" element={<DetailedPage />} />
        <Route path="/BasicPage" element={<BasicPage/>}/>
        <Route path="/ResultsPage" element={<ResultsPage/>}/>
      </Routes>
    </Router><div className="App">

      
      
      </div>
      <div className='app-footer'>
        <p>Jobnav.com©</p>
        <p>Developed by Saini, Le, Torres, and Walsh</p>
        <p>For more information, email jassaini@udel.edu</p>
      </div>
      </GPTcontext.Provider>
    </>
  );
}

export default App;
