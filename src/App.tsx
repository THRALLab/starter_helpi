import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { SelectQuiz } from "./pages/SelectQuiz";
// Import any other components or pages you have
import { ApiKeyInput } from "./pages/Home";
import './css/App.css';
import { BasicQuiz } from "./pages/basic-quiz/BasicQuiz";
import { AdvancedQuiz } from "./pages/advanced-quiz/AdvancedQuiz";
import { ChatGBTPage } from "./pages/chat-gbt-page/ChatGBTPage";
import { Col, Row } from "react-bootstrap";

function App(): JSX.Element {
  return ( <>
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="starter_helpi/">Home</Link>
          </nav>
          <nav>
            <Link to="/select-quiz">Select Quiz</Link>
          </nav>
        </header>
        <Routes>
          <Route path="starter_helpi/*" element={<Home />} />
          <Route path="/select-quiz" element={<SelectQuiz />}/>
          <Route path="/chat-gbt-page" element={<ChatGBTPage />}/>
          <Route 
          path="/basic-quiz"
          element={<BasicQuiz/>}
        />
        <Route 
          path="/advanced-quiz"
          element={<AdvancedQuiz/>}
        />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>

      </div>
    </Router>
    <div className="App-footer"> 
        <Row>
          <Col>
          <ApiKeyInput></ApiKeyInput>
          </Col>
          <Col style={{position: "fixed", textAlign: "right"}}>
          Isaac, Dylan, Barry
          </Col>
        </Row>
      </div>
   </>
  );
}

export default App;
