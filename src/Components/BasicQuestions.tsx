import React, { useState } from 'react';
import '../App.css';
import { Button, Form} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { BasicExample } from '../progressBar';
import { useNavigate } from 'react-router-dom';
//import OpenAI from 'openai';
import GIF from './visualfeedback-ezgif.com-video-to-gif-converter (1).gif';
import olivia from './logo.png'
// function App(){
//   return <span>There is actually something here</span>
// }
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";

const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function BasicQuestions() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [progress, setProgress] = useState<number>(0)

  const [finished, setFinished] = useState<boolean> (false);
  const [choice1, setChoice1] = useState<string>("Select an option");
  const [choice2, setChoice2] = useState<string>("Select an option");
  const [choice3, setChoice3] = useState<string>("Select an option");
  const [choice4, setChoice4] = useState<string>("Select an option");
  const [choice5, setChoice5] = useState<string>("Select an option");
  const [choice6, setChoice6] = useState<string>("Select an option");
  const [choice7, setChoice7] = useState<string>("Select an option");

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //function handleIncrease() {
   // setProgress(progress + 20);
  //}
  function updateProgress(originalValue: string, event: string){
    if (originalValue === "Select an option" && event !== "Select an option") {
      setProgress(progress + 15)
    }
    else if (originalValue !== "Select an option" && event === "Select an option") {
      setProgress(progress - 15)
    }
  }
  
  //Gpt
  const [response, setResponse] = useState(""); // Response from GPT

  // send message to GPT function
  
  const API_KEY = key; // DO i need key or the real key?

   //const openai = new OpenAI(
     //{apiKey: API_KEY, dangerouslyAllowBrowser: true}
 //);
  
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
      "messages": [{
        "role": "user", 
        "content": "Give a list of 3 potential career options based on the users responses to these questions. Put each career choice and description on a new. The questions and user's responses are listed below:" +
        
        `Which work environment aligns best with your interests?: ${choice1}` +
        `Which personality traits do you resonate with the most?: ${choice2}` +
        `Which of the following is true about you?: ${choice3}` +
        `Which career-related activities do you find most fulfilling?: ${choice4}` +
        `Which challenges are you eager to take on?: ${choice5}` + 
        `What would you do on a weekend?: ${choice6}` +
        `Which academic area do you prefer?: ${choice7}`


      }],
      "temperature": 0.7,

    })
}).then(response => response.json())
.then(data => {
    console.log('Response:', data);
    setResponse(data.choices[0].message.content.trim());
})
.catch(error => {
    console.error('Error:', error);
  })
};

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  
    function updateChoice1(event: React.ChangeEvent<HTMLSelectElement>) {
      updateProgress(choice1, event.target.value);
      setChoice1(event.target.value);
  }

  function updateChoice2(event: React.ChangeEvent<HTMLSelectElement>) {
    updateProgress(choice2, event.target.value);
    setChoice2(event.target.value);
}
function updateChoice3(event: React.ChangeEvent<HTMLSelectElement>) {
  updateProgress(choice3, event.target.value);
  setChoice3(event.target.value);
}
function updateChoice4(event: React.ChangeEvent<HTMLSelectElement>) {
  updateProgress(choice4, event.target.value);
  setChoice4(event.target.value);
}
function updateChoice5(event: React.ChangeEvent<HTMLSelectElement>) {
  updateProgress(choice5, event.target.value);
  setChoice5(event.target.value);
}
function updateChoice6(event: React.ChangeEvent<HTMLSelectElement>) {
  updateProgress(choice6, event.target.value);
  setChoice6(event.target.value);
}
function updateChoice7(event: React.ChangeEvent<HTMLSelectElement>) {
  updateProgress(choice7, event.target.value);
  setChoice7(event.target.value);
}



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
        <div className='bottom'>
          <h1>Basic Questions</h1>
        </div>
        
        <h1><BasicExample progress={progress}></BasicExample></h1>
        <br></br>
        <br></br>
            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which work environment aligns best with your interests?</Form.Label>
              </div>
                
                <div className='dropdown'>
                  <Form.Select value = {choice1} onChange={updateChoice1}>
                      <option value="Select an option">Select an option</option>
                      <option value="Structured and organized">Structured and organized</option>
                      <option value="Problem-solving and analytical">Problem-solving and analytical</option>
                      <option value="Collaborative and people-oriented">Collaborative and people-oriented</option>
                      <option value="Creative and innovative">Creative and innovative</option>
                      <option value=" Hands-on and practical"> Hands-on and practical</option>
                      <option value="Leadership-driven and competitive">Leadership-driven and competitive</option>

                </Form.Select>
                </div>
                
            </Form.Group>
            
            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which personality traits do you resonate with the most?</Form.Label>
              </div>
              <div className='dropdown'>
                <Form.Select value={choice2} onChange={updateChoice2}>
                <option value="Select an option">Select an option</option>
                    <option value="Detail-oriented and meticulous">Detail-oriented and meticulous</option>
                    <option value="Logical and analytical">Logical and analytical</option>
                    <option value="Compassionate and empathetic">Compassionate and empathetic</option>
                    <option value="Imaginative and expressive">Imaginative and expressive</option>
                    <option value="Practical and resourceful"> Practical and resourceful</option>
                    <option value="Confident and decisive">Confident and decisive</option>
                    <option value="None of the above">None of the above</option>


                </Form.Select>
              </div>
                
            </Form.Group>

            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which of the following is true about you?</Form.Label>
              </div>
              <div className='dropdown'>
                <Form.Select value={choice3} onChange={updateChoice3}>
                <option value="Select an option">Select an option</option>
                    <option value="Very organized">Very organized</option>
                    <option value="Organized">Organized</option>
                    <option value="Somewhat organized">Somewhat organized</option>
                    <option value="Not organized">Not organized</option>

                </Form.Select>
              </div>
                
            </Form.Group>

            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which career-related activities do you find most fulfilling?</Form.Label>
              </div>
              <div className='dropdown'>
              <Form.Select value={choice4} onChange={updateChoice4}>
                <option value="Select an option">Select an option</option>
                    <option value="Organizing and maintaining order">Organizing and maintaining order</option>
                    <option value="Analyzing data and solving complex problems">Analyzing data and solving complex problems</option>
                    <option value="Helping others and fostering connections">Helping others and fostering connections</option>
                    <option value="Expressing creativity and originality">Expressing creativity and originality</option>
                    <option value="Engaging in practical tasks and hands-on work"> Engaging in practical tasks and hands-on work</option>
                    <option value="Leading teams and driving projects forward">Leading teams and driving projects forward</option>

                </Form.Select>
              </div>
                
                
            </Form.Group>

            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which challenges are you eager to take on?</Form.Label>
              </div>
              <div className='dropdown'>
                <Form.Select value={choice5} onChange={updateChoice5}>
                <option value="Select an option">Select an option</option>
                    <option value="Ensuring accuracy and precision">Ensuring accuracy and precision</option>
                    <option value="Tackling intellectual puzzles and scientific inquiries">Tackling intellectual puzzles and scientific inquiries</option>
                    <option value="Addressing social issues and making a difference">Addressing social issues and making a difference</option>
                    <option value="Pushing boundaries and exploring new ideas">Pushing boundaries and exploring new ideas</option>
                    <option value="Overcoming technical obstacles and mastering skills">Overcoming technical obstacles and mastering skills</option>
                    <option value="Taking risks and embracing leadership opportunities">Taking risks and embracing leadership opportunities</option>

                </Form.Select>
              </div>
                
            </Form.Group>

            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>What would you do on a weekend?</Form.Label>
              </div>
              <div className='dropdown'>
                <Form.Select value={choice6} onChange={updateChoice6}>
                <option value="Select an option">Select an option</option>
                    <option value="Go to the movies with a friend or boy/girlfriend">Go to the movies with a friend or boy/girlfriend</option>
                    <option value="Go for a walk along the nearest lake near your housel">Go for a walk along the nearest lake near your house</option>
                    <option value="Go to a party with friends">Go to a party with friends</option>
                    <option value="Do homework">Do homework</option>
                    <option value="Do nothing. I am antisocial">Do nothing. I am antisocial</option>
                    <option value="Doing outdoor sports(mountain climbing, sky-diving, hiking…)">Doing outdoor sports(mountain climbing, sky-diving, hiking…)</option>

                </Form.Select>
              </div>
                
            </Form.Group>

            <Form.Group controlId="basicQuestions">
              <div className='questionAsk'>
                <Form.Label>Which academic area do you prefer?</Form.Label>
              </div>
              <div className='dropdown'>
                <Form.Select value={choice7} onChange={updateChoice7}>
                <option value="Select an option">Select an option</option>
                    <option value="Technology/Engineering">Technology/Engineering</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Business">Business</option>
                    <option value="Natural Sciences">Natural Sciences</option>
                    <option value=" Health Sciences"> Health Sciences</option>
                    <option value="Music">Music</option>
                    <option value="Other">Other</option>

                </Form.Select>
              </div>
                
                <br></br>
<div className='bottom'>
  <Button onClick={callOpenAIAPI} disabled={!(progress >= 100)}>Get Career Choices</Button>
</div>
<br></br>

{/*finished ? <span> Your responses have been seccussfully submitted!</span>: <span></span>*/}

<br></br>
<div className='bottom'>
        <h2>GPT Response</h2>
        {finished ? <img src ={GIF} alt = "GIF"/> : <span></span>}
        {/*<img src ={GIF} alt = "GIF"/>*/}


        <span>{response}</span>
  </div>

   </Form.Group>
        
        <br></br>        
        
        
      </header>
      <div className='bottom'>
      <div className='api'>
        <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>
      </div>

      
      
</div>
  );
}
export default BasicQuestions;