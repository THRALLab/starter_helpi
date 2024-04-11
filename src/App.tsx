import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { SelectQuiz } from "./pages/SelectQuiz";
// Import any other components or pages you have
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/select-quiz">Quiz</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-quiz/*" element={<SelectQuiz />}/>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
