import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './home-page/homepage';
import CollapsibleNavbar from './components/navbar'
import Questionnaire from './basic-questions/BasicQuestion';
import { HashRouter,Routes, Route} from 'react-router-dom'; // Import BrowserRouter and other necessary components
import BasicResult from './basic-questions/BasicResult';
import DetailedQuestions from './detailed-questions/DetailedQuestions';
import AboutMe from './about-me/AboutMe';
import Result from './result';
import Footer from './components/footer';
import Loading from './loading-results/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>

  <CollapsibleNavbar></CollapsibleNavbar>
     <Routes>
          <Route path="" element={<Homepage/>} /> 
          <Route path="BasicQuestion" element={<Questionnaire />} />
          <Route path="DetailedQuestion" element={<DetailedQuestions/>} />
          <Route path="BasicResult" element={<BasicResult/>} />
          <Route path="homepage" element={<Homepage/>} />
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="result" element={<Result/>} />
          <Route path="Loading" element={<Loading/>} />
          {/* Add more routes as needed    */}
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