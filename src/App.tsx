import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';




//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
 keyData = JSON.parse(prevKey);
}


function App(): JSX.Element {
 const [key, setKey] = useState<string>(keyData); //for api key input
 const [currentPage, setCurrentPage] = useState<string>("home");
   const questions = [
     'How do you prefer to work?',
     'What motivates you in your work?',
     'What are your primary career goals?',
     'What are your key strengths and skills?',
     'What are your key values in the workplace?',
     'How do you handle challenges and setbacks?',
     'Where do you see yourself in 5-10 years?'
   ];
   const answers = [
     ['Independently', 'Collaboratively in a team', 'In a structured environment', 'In a dynamic and fast-paced setting'],
     ['Achievement and recognition', 'Creativity and innovation', 'Helping others and making a difference', 'Financial stability and security'],
     ['Advancing in my current field', 'Transitioning to a new field', 'Starting my own business', 'Exploring various career options'],
     ['Analytical and problem-solving', 'Communication and interpersonal', 'Leadership and decision-making', 'Adaptability and flexibility'],
     ['Work-life balance', 'Professional development and growth', 'Diversity and inclusivity', 'Integrity and ethics'],
     ['Persevere and find solutions', 'Seek support and advice from others', 'Reflect and learn from the experience', 'Stay positive and maintain perspective'],
     ['Climbing the corporate ladder', 'Pursuing further education or training', 'Leading a team or organization', 'Exploring new opportunities and challenges']
   ];
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const handleNextQuestion = () => {
     setCurrentQuestion(currentQuestion + 1);
   };
    const handleAnswerSelect = () => {
     if (currentQuestion < questions.length - 1) {
       setCurrentQuestion(currentQuestion + 1);
     } else {
       // Handle end of questions
     }
   };
 const goHome = () => {
   setCurrentPage("home");
 }
 const goBasic = () => {
   setCurrentPage("basic");
 }
 const goDetailed = () => {
   setCurrentPage("detailed");
 }


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
   <div className="App">
     <header className="App-header">


     {currentPage === 'home' && (
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
           <h1>Career Compass</h1>
           <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>
           <Button style={{margin: '10px'}} onClick={goBasic}>Basic Questions</Button>
           <Button style={{margin: '10px'}} onClick={goDetailed}>Detailed Questions</Button>
         </div>
       )}
       {currentPage === 'basic' && (
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <h1>Basic Questions</h1>
           <h3>{questions[currentQuestion]}</h3>
           <ol type="A">{answers[currentQuestion].map((answer, index) => (
            <button><li key={index}  onClick={handleAnswerSelect}>{answer}</li></button>))}
           </ol> {currentQuestion < questions.length - 1}
           <Button className="Back-button" onClick={goHome}>Back to Home</Button>
         </div>
       )}
       {currentPage === 'detailed' && (
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <h1>Detailed Questions</h1>
           <Button className="Back-button" onClick={goHome}>Back to Home</Button>
         </div>
       )}


     </header>
     <Form>
       <Form.Label>API Key:</Form.Label>
       <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
       <br></br>
       <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
     </Form>
   </div>
 )
 }
export default App;