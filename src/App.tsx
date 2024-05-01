import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './App.css';
import './HomePage.css';
import { Button, Form } from 'react-bootstrap';

// Components for new pages 
import BasicQuestions from './BasicQuestions';
import DetailedQuestions from './DetailedQuestions';
import Report from './Report';


// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <div className="quizzes">
        <div className="question">
          <h2>Basic Questions</h2>
          <p>Are you unsure about your career path? Click below to take our quick career quiz to gain insight into your professional goals and strength. Discover potential career paths that align with your interest, skills, and values.</p>
          <Link to="/basic-questions">
            <button>Start Basic Quiz</button>
          </Link>
        </div>
        <div className="question">
          <h2>Detailed Questions</h2>
          <p>Looking for a comprehensive assessment of your career interests and strengths? Our detailed career quiz dives deep into your personality, preferences, and skills to provide recommendations for your professional journey. Click below to explore a variety of career options and gain valuable advice to make decisions about your future.</p>
          <Link to="/detailed-questions">
            <button className="detailed-quiz">Start Detailed Quiz</button>
          </Link>
        </div>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <button className="create-account-button">Create Account</button>
      </div>
    </div>
  );
}


// const HomePage: React.FC = () => {
//   return (
//     <div className="HomePage">
//       <h1>Career Quiz</h1>
//       <div className="content">
//         <div className="question">
//           <h2>Basic Questions</h2>
//           <p>Are you unsure about your career path? Click below to take our 
//             quick career quiz to gain insight into your professional goals 
//             and strength. Discover potential career paths that align with your
//             interest, skills, and values. 
//           </p>
//           <Link to="/basic-questions">
//             <button>Start Basic Quiz</button>
//           </Link>
//         </div>
//         <div className="question">
//           <h2>Detailed Questions</h2>
//           <p>Looking for a comprehensive assessment of your career interests and strengths?
//             Our detailed career quiz dives deep into your personality. preferences, and skills
//             to provide recommendations for your professional journey. Click below to explore a variety of career options
//             and gain valuable advice to make decisions about your future.
//           </p>
//           <Link to="/detailed-questions">
//             <button className="detailed-quiz">Start Detailed Quiz</button>
//           </Link>
//         </div>
//       </div>
//       <div className="login-section">
//         <h2>Login</h2>
//         <form className="login-form">
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Login</button>
//         </form>
//         <button className="create-account-button">Create Account</button>
//       </div>
//     </div>
//   );
// }


function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basic-questions" element={<BasicQuestions />} />
          <Route path="/detailed-questions" element={<DetailedQuestions />} />
          <Route path="/report" element={<Report />} /> {/* Add a route for the Report component */}
        </Routes>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <div className="api-key-input">
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </div>
        </Form> 
      </div>
    </Router>
  );
}

export default App;

