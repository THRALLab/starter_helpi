import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './homepage';
import CollapsibleNavbar from './navbar'
import Questionnaire from './basicQuestion';
import { HashRouter,Routes, Route} from 'react-router-dom'; // Import BrowserRouter and other necessary components
import BasicResult from './basicresult';
import DetailedQuestions from './DetailedQuestions';
import AboutMe from './AboutMe';
import Result from './result';
import Footer from './footer';
import Loading from './Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>

  <CollapsibleNavbar></CollapsibleNavbar>
     <Routes>
          <Route path="" element={<Homepage/>} /> 
          <Route path="basicQuestion" element={<Questionnaire />} />
          <Route path="DetailedQuestion" element={<DetailedQuestions/>} />
          <Route path="basicresult" element={<BasicResult/>} />
          <Route path="homepage" element={<Homepage/>} />
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="result" element={<Result/>} />
          <Route path="Loading" element={<Loading/>} />
          {/* Add more routes as needed */}
          </Routes>
  <React.StrictMode>
  </React.StrictMode>
  <Footer></Footer>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a brick
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();