import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

// Components for new pages 
import BasicQuestions from './BasicQuestions';
import DetailedQuestions from './DetailedQuestions';

// Layout component for navigation
// const Navigation: React.FC = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/basic-questions">Basic Questions</Link>
//         </li>
//         <li>
//           <Link to="/detailed-questions">Detailed Questions</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
// let keyData = "";
// const saveKeyData = "MYKEY";
// const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
// if (prevKey !== null) {
//   keyData = JSON.parse(prevKey);
// }

const HomePage: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Career Quiz Home Page</h1>
        <div>
          <h3>Basic Questions</h3>
          <p>Click the button below if you want to take a more concise version of the career quiz</p>
          <Link to="/basic-questions">
            <button>Start Basic Quiz</button>
          </Link>
        </div>
        <div>
          <h3>Detailed Questions</h3>
          <p>Click the button below if you want to take a more detailed version of the career quiz</p>
          <Link to="/detailed-questions">
            <button>Start Detailed Quiz</button>
          </Link>
        </div>
        {/* Render the Routes component */}
        <Routes>
          <Route path="/basic-questions" element={<BasicQuestions />} />
          <Route path="/detailed-questions" element={<DetailedQuestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;

// function App() {
//   const [key, setKey] = useState<string>(keyData); //for api key input
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   //sets the local storage item to the api key the user inputed
//   function handleSubmit() {
//     localStorage.setItem(saveKeyData, JSON.stringify(key));
//     window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
//   }

//   //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
//   function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
//     setKey(event.target.value);
//   }

//   return (
//     <Router>
//       <div className="App">
//         <Navigation /> {/* Navigation is placed outside of the Routes */}
//         <Routes>
//           <Route path="/" element={
//             <Form>
//               <Form.Label>API Key:</Form.Label>
//               <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
//               <br></br>
//               <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
//             </Form>
//           } />
//           <Route path="/basic-questions" element={<BasicQuestions />} />
//           <Route path="/detailed-questions" element={<DetailedQuestions />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
