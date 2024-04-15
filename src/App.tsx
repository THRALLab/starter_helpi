import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Home from './Pages/Home';
import Basic from './Pages/Basic';
import Detailed from './Pages/Detailed';
import NavHome from './navbar';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currPg, setCurrPg] = useState<string>('Home');
  const [workingPref, setWorkingPref] = useState<string>('');     // preference for working
  const [creativity, setCreativity] = useState<string>('');       // if creativity and passion are factors
  const [adaptability, setAdaptability] = useState<string>('');   // if user can easily adapt in workplace
  const [impact, setImpact] = useState<string>('');               // importance of impact
  const [routine, setRoutine] = useState<string>('');             // importance of routine
  const [lead, setLead] = useState<string>('');                   // leadership or projects
  const [environment, setEnvironment] = useState<string>('');     // preference of work environment
  const [prefWork, setPrefWork] = useState<string>('');
  const [opCreate, setOpCreate] = useState<string>('');
  const [adapt, setAdapt] = useState<string>('');
  const [workImpact, setWorkImpact] = useState<string>('');
  const [learn, setLearn] = useState<string>('');
  const [consistentRoutine, setConsistentRoutine] = useState<string>('');
  const [env, setEnv] = useState<string>('');
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  const updatePageState = () => {
    switch (currPg) {
      case 'Basic':
        return <Basic handlePage={setCurrPg} />;
      case 'Detailed':
        return <Detailed handlePage={setCurrPg} />;
      case 'Home':
      default:
        return <Home handlePage={setCurrPg} />;
    }
  };

  return (
    <>
    <NavHome></NavHome>
          {updatePageState()}

          <div className="question-section">

        <div className="question">
          <p>How important is expressing creativity and passion in your work?</p>
          <Button variant={creativity === 'Not important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Not important')}>Not important</Button>
          <Button variant={creativity === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setCreativity('Neutral')}>Neutral</Button>
          <Button variant={creativity === 'Important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Important')}>Important</Button>
        </div>

        <div className="question">
          <p>How easily do you adapt to changes in your work environment and job responsibilities?</p>
          <Button variant={adaptability === 'Difficult' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Difficult')}>Difficult</Button>
          <Button variant={adaptability === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Neutral')}>Neutral</Button>
          <Button variant={adaptability === 'Easy' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Easy')}>Easy</Button>
        </div>

        <div className="question">
          <p>How important is it for you to make a tangible impact through your work?</p>
          <Button variant={impact === 'Not important' ? 'primary' : 'secondary'} onClick={() => setImpact('Not important')}>Not important</Button>
          <Button variant={impact === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setImpact('Neutral')}>Neutral</Button>
          <Button variant={impact === 'Very Important' ? 'primary' : 'secondary'} onClick={() => setImpact('Very Important')}>Very Important</Button>
        </div>

        <div className="question">
          <p>How important is having a set routine in the workplace to you?</p>
          <Button variant={routine === 'Not important' ? 'primary' : 'secondary'} onClick={() => setRoutine('Not important')}>Not important</Button>
          <Button variant={routine === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setRoutine('Neutral')}>Neutral</Button>
          <Button variant={routine === 'Important' ? 'primary' : 'secondary'} onClick={() => setRoutine('Important')}>Important</Button>
        </div>

        <div className="question">
          <p>Do you see yourself as a natural leader and enjoy taking charge of projects?</p>
          <Button variant={lead === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setLead('Not at all')}>Not at all</Button>
          <Button variant={lead === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setLead('Neutral')}>Neutral</Button>
          <Button variant={lead === 'Very much' ? 'primary' : 'secondary'} onClick={() => setLead('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>Do you prefer an office environment or an environment that is frequently changing?</p>
          <Button variant={environment === 'Office' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Office')}>Office</Button>
          <Button variant={environment === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Neutral')}>Neutral</Button>
          <Button variant={environment === 'Changing Environment' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Changing Environment')}>Changing Environment</Button>
        </div>

        



        <div className="question">
          <p>How much do you prefer working independently over working collaboratively?</p>
          <Button variant={prefWork === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setPrefWork('Not at all')}>Not at all</Button>
          <Button variant="primary"></Button>
          <Button variant={prefWork === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setPrefWork('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={prefWork === 'Very much' ? 'primary' : 'secondary'} onClick={() => setPrefWork('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>How significant is the opportunity to be creative and have passion within your work?</p>
          <Button variant={opCreate === 'Not significant' ? 'primary' : 'secondary'} onClick={() => setOpCreate('Not significant')}>Not significant</Button>
          <Button variant="primary"></Button>
          <Button variant={opCreate === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setOpCreate('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={opCreate === 'Very significant' ? 'primary' : 'secondary'} onClick={() => setOpCreate('Very significant')}>Very significant</Button>
        </div>

        <div className="question">
          <p>How easily do you adapt to changes in your work environment and job responsibilities?</p>
          <Button variant={adapt === 'Difficult' ? 'primary' : 'secondary'} onClick={() => setAdapt('Difficult')}>Difficult</Button>
          <Button variant="primary"></Button>
          <Button variant={adapt === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setAdapt('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={adapt === 'Easy' ? 'primary' : 'secondary'} onClick={() => setAdapt('Easy')}>Easy</Button>
          
        </div>

        <div className="question">
          <p>How important is it for you to make a measurable and meaningful impact through your work?</p>
          <Button variant={workImpact === 'Not at all important' ? 'primary' : 'secondary'} onClick={() => setWorkImpact('Not at all important')}>Not at all important</Button>
          <Button variant="primary"></Button>
          <Button variant={workImpact === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setWorkImpact('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={workImpact === 'Very important' ? 'primary' : 'secondary'} onClick={() => setWorkImpact('Very important')}>Very important</Button>
        </div>

        <div className="question">
          <p>How important is collaborative learning in your professional development?</p>
          <Button variant={learn === 'Not at all important' ? 'primary' : 'secondary'} onClick={() => setLearn('Not at all important')}>Not at all important</Button>
          <Button variant="primary"></Button>
          <Button variant={learn === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setLearn('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={learn === 'Very important' ? 'primary' : 'secondary'} onClick={() => setLearn('Very important')}>Very important</Button>
        </div>

        <div className="question">
          <p>How significant is a structured and consistent routine within your workplace to your overall job satisfaction and productivity?</p>
          <Button variant={consistentRoutine === 'Not at all significant' ? 'primary' : 'secondary'} onClick={() => setConsistentRoutine('Not at all significant')}>Not at all significant</Button>
          <Button variant="primary"></Button>
          <Button variant={consistentRoutine === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setConsistentRoutine('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={consistentRoutine === 'Very significant' ? 'primary' : 'secondary'} onClick={() => setConsistentRoutine('Very significant')}>Very significant</Button>
        </div>

        <div className="question">
          <p>Do you prefer an office environment or an environment that is frequently changing?</p>
          <Button variant={env === 'Office' ? 'primary' : 'secondary'} onClick={() => setEnv('Office')}>Office</Button>
          <Button variant="primary"></Button>
          <Button variant={env === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setEnv('Neutral')}>Neutral</Button>
          <Button variant="primary"></Button>
          <Button variant={env === 'Changing Environment' ? 'primary' : 'secondary'} onClick={() => setEnv('Changing Environment')}>Changing Environment</Button>
        </div>
      </div>
    
      <footer className="footer">
      <h3>Kai Winterle, Joey Dare, Joanna Crisomia, Ricky Kiamilev</h3>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
        </footer>
    </>
  );
}

export default App;
