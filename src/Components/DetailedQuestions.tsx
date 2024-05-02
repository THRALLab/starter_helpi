import React, { useState } from 'react';
//import {OpenAI} from "openai"
import '../App.css';
import { Button, Form } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { BasicExample } from '../progressBar';
import { useNavigate } from 'react-router-dom';
import "./gptResponse.json"
import GIF from './visualfeedback-ezgif.com-video-to-gif-converter (1).gif';
import olivia from './logo.png'


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";

const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function DetailedQuestions() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [progress, setProgress] = useState<number>(0)
  const [finished, setFinished] = useState<boolean> (false);

  function updateProgress(originalValue: string, event: string){
    if (originalValue === "" && event !== "") {
      setProgress(progress + 15)
    }
    else if (originalValue !== "" && event === "") {
      setProgress(progress - 15)
    }
  }

  // CHATGPT THINGS


  const [career1, setCareer1] = useState(""); // Response from GPT
  const [career2, setCareer2] = useState(""); // Response from GPT
  const [career3, setCareer3] = useState(""); // Response from GPT



  // const APIBody = {
  //     "model": 'gpt-3.5-turbo', // Specify the model you want to use
  //     "prompt": "print the word hello in french",
  //     "messages": [{"role": "user", "content": "Say this is a test!"}],
  //     "temperature": 0.7,
  //     "top_p": 1.0,
  //     "max_tokens": 150,
  //     "frequency_penalty": 0.0,
  //     "presence_penalty": 0.0
  // }
  
  
  // send message to GPT function
  
  const API_KEY = key;

//   const openai = new OpenAI(
//     {apiKey: API_KEY, dangerouslyAllowBrowser: true}
// );


let gptData = {
  'name': "gptData",
  'description': "data to be passed to gpt",
  'parameters': {
      'type': 'object',
      'properties': {
          "CareerChoice1": {
            "type": "string",
            "description": "A description of a career that would be a good fit for the user based on their responses to the questions"
        },
          "CareerChoice2": {
            "type": "string",
            "description": "A description of a career that would be a good fit for the user based on their responses to the questions"
        },
        "CareerChoice3": {
            "type": "string",
            "description": "A description of a career that would be a good fit for the user based on their responses to the questions"
        }
     },
     'required': ['CareerChoice1', 'CareerChoice2', 'CareerChoice3']
  }
}

  
  async function callOpenAIAPI() {

    setFinished(true);
    //const response = await getResponse(input);
    await fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + API_KEY,
      
    },
    body: JSON.stringify({
      "model": 'gpt-4-turbo',
      //"response_format": {"type": "json_object"},
      "tools": [{"type": "function", "function": gptData}],
      "messages": [{
        "role": "user", 
        "content": "Give a list of 3 potential career options based on the users responses to these questions. Put each career choice and description on a new. The questions and user's responses are listed below:" +
        
        `Describe your hobbies and interests: ${q1Response}` +
        `Describe your soft skills (teamwork, problem solving, leadership, communication, etc): ${q2Response}` +
        `What subject areas intrigue you the most?: ${q3Response}` +
        `Where do you envision your career path evolving towards?: ${q4Response}` +
        `What technical skills do you possess or are interested in developing?: ${q5Response}` + 
        `What is your dream place to live?: ${q6Response}` +
        `Describe your personal values: ${q7Response}`
        

      }],
      "temperature": 0.7,

    })
}).then(response => response.json())
.then(data => {
    console.log('Response:', data);
    const obj = JSON.parse(data.choices[0].message.tool_calls[0].function.arguments.toString());
    setCareer1(obj.CareerChoice1);
    setCareer2(obj.CareerChoice2);
    setCareer3(obj.CareerChoice3);

})
.catch(error => {
    console.error('Error:', error);
  })
};  

  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    updateProgress(q1Response,event.target.value);
    setKey(event.target.value);
  }

// useState and update function for Question 1

  const [q1Response, setQ1Response] = useState<string>("");

  function updateQ1Response(event: React.ChangeEvent<HTMLInputElement>) {
    updateProgress(q1Response, event.target.value);
    setQ1Response(event.target.value)
  }

// useState and update function for Question 2

const [q2Response, setQ2Response] = useState<string>("");

function updateQ2Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q2Response, event.target.value);
  setQ2Response(event.target.value)
}

// useState and update function for Question 3

const [q3Response, setQ3Response] = useState<string>("");

function updateQ3Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q3Response, event.target.value);
  setQ3Response(event.target.value)
}

// useState and update function for Question 4

const [q4Response, setQ4Response] = useState<string>("");

function updateQ4Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q4Response, event.target.value);
  setQ4Response(event.target.value)
}

// useState and update function for Question 5

const [q5Response, setQ5Response] = useState<string>("");

function updateQ5Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q5Response, event.target.value);
  setQ5Response(event.target.value)
}

// useState and update function for Question 6

const [q6Response, setQ6Response] = useState<string>("");

function updateQ6Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q6Response, event.target.value);
  setQ6Response(event.target.value)
}

// useState and update function for Question 7

const [q7Response, setQ7Response] = useState<string>("");

function updateQ7Response(event: React.ChangeEvent<HTMLInputElement>) {
  updateProgress(q7Response, event.target.value);
  setQ7Response(event.target.value)
}

// submit button useState

//hook for buttons to work



function OurHeader(){
  const navigate = useNavigate();

  const goToHome = () => {
    // This will navigate to first component
    navigate('/Home');
  };

  const goToAbout = () => {
 
    // This will navigate to second component
    navigate('/About');
  };

  return(
    <div className="App-header2">
        <div className = "navbar">
        
        <div className = "img">
            <img src = {olivia} alt = "logo" id = "image" className='fram'/>
          </div>
        <ul>
          <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
          <li><Button className="BasicButton" onClick={goToAbout}> About </Button></li>
          <li>Contact</li>
        </ul>
        </div> 
      </div>
    
  )
}



  return (
    <div className="App">
      <OurHeader/>
      
      <header className="App-header">
      <h1><BasicExample progress={progress}></BasicExample></h1>
      <div className='bottom'>
      <h1>Detailed Questions!</h1>
      </div>
      
      <div className='bottom'>
      <Form.Group controlId="question1">
      <Form.Label>Describe your hobbies and interests:</Form.Label>
      <Form.Control
        value={q1Response}
        onChange={updateQ1Response} />
  </Form.Group>

  <Form.Group controlId="question2">
      <Form.Label>Describe your soft skills (teamwork, problem solving, leadership, communication, etc):</Form.Label>
      <Form.Control
        value={q2Response}
        onChange={updateQ2Response} />
  </Form.Group>

  <Form.Group controlId="question3">
      <Form.Label>What subject areas intrigue you the most?</Form.Label>
      <Form.Control
        value={q3Response}
        onChange={updateQ3Response} />
  </Form.Group>

  <Form.Group controlId="question4">
      <Form.Label>Where do you envision your career path evolving towards?</Form.Label>
      <Form.Control
        value={q4Response}
        onChange={updateQ4Response} />
  </Form.Group>

  <Form.Group controlId="question3">
      <Form.Label>What technical skills do you possess or are interested in developing?</Form.Label>
      <Form.Control
        value={q5Response}
        onChange={updateQ5Response} />
  </Form.Group>

  <Form.Group controlId="question6">
      <Form.Label>What is your dream place to live?</Form.Label>
      <Form.Control
        value={q6Response}
        onChange={updateQ6Response} />
  </Form.Group>

  <Form.Group controlId="question7">
      <Form.Label>Describe your personal values:</Form.Label>
      <Form.Control
        value={q7Response}
        onChange={updateQ7Response} />

        <br></br>

        <Button onClick={callOpenAIAPI} disabled={!(progress >= 100)}>Get Career Choices</Button>

        <br></br>

        {/*<Button onClick={()=> setFinished(true)} disabled={!(progress >= 100)}>Get Career Choices</Button>*/}
        {/*finished ? <span> Your responses have been seccussfully submitted!</span>: <span></span>*/}

        <br></br>

        {finished ? <img src ={GIF} alt = "GIF"/> : <span></span>}


        <h2>GPT Response</h2>

        <span>{career1}</span>

        <br></br>

        <span>{career2}</span>

        <br></br>
        
        <span>{career3}</span>



  </Form.Group>
  </div>
        <br></br>        
        
        
      </header>
      <div className='bottom'>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>

    </div>
  );
}

export default DetailedQuestions;