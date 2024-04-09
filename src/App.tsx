import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { BasicQuiz } from './pages/DisplayQuiz';
import { AdvancedQuiz } from './pages/AdvancedQuiz'
// Import any other components or pages you have
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/basic-quiz">Basic Quiz</Link> | <Link to="/advanced-quiz">Advanced Quiz</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-quiz" element={<BasicQuiz />} />
          <Route path="/advanced-quiz" element={<AdvancedQuiz />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
