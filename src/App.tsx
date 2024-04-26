import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { MultipleChoiceQuestionForm } from "./MultipleChoiceQuestionForm";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [pageId, setPageId] = useState<number>(3); // 0 = Home, 1 = Basic Questions, 2 = Detailed Questions, 3 = React Home

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  // *******************************************************************************************
  // State Variables for Basic Questions Page
  const basicQ = [
    "I feel most fulfilled when engaging in activities related to team building",
    "I believe my natural talents and strengths lie in leading a team",
    "It's important to me that my career aligns with my personal values and beliefs",
    "I aspire to make a significant impact in science",
    "Engaging in meetings with clients and companies energizes and motivates me",
    "I am passionate about adressing the mistreatment of others in computer science",
    "I thrive in work environments that are calm and relaxing",
    "I am eager to develop my skills and knowledge in technology",
    "I admire individuals who work in computer programming",
    "Success to me means completing small victories at a time to wither away at a bigger project"];
  const [questions] = useState<string[]>(basicQ); // Basic Questions String Array
  const [userAnswers, setUserAnswer] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [curAns, setCurAns] = useState<string>("");
  const [startNewBasic, setSNB] = useState<Boolean>(true); 
  const [detailedQuestionProgress, setDetailedQuestionProgress] = useState<number>(0);


  // Moves onto the next question by adding one to the progress and storing the user answer 
  function NextQuestion () {
    if (progress < basicQ.length) {
      setUserAnswer([...userAnswers, curAns]);
      setProgress(progress + 1);
      setCurAns("");
    }
  }

  // Goes back to the previous question and removes the previous user's answer
  function PrevQuestion () {
    if (progress > 0) {
      setProgress(progress - 1);
      userAnswers.pop();
    }
  }

  // For different colors on progress bar
  const getColor = () => {
    if (progress < 4) {
      return "#ff0000";
    } else if (progress < 7) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  }

  // OpenAI call to get the analyzed results
  function GetResults () {

  }

  // This will start the Basic Quiz
  function QuizStart () {

    // if the user wants to start a new quiz then this resets the values
    if (startNewBasic) {
      setCurAns("");
      setUserAnswer([]);
      setProgress(0);
      setSNB(false);
    }

    return (
      <div>
          {(progress < basicQ.length) ? (
            <>
              <p>Make sure that you answer all of the questions to complete the quiz</p>

              <div className="container-pbar">
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{width: `${progress*10}%`, backgroundColor: getColor() }}>
                    {" "}
                    <div className="progress-label">{progress * 10}%</div>
                  </div>
                </div>
              </div>

              <Form.Group>
                <Form.Label><strong>Question {progress + 1}:</strong> {questions[progress]}</Form.Label>
                <Form.Check
                  type="radio"
                  name="answer"
                  id="answer-check-option-one"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={curAns === "Strongly Agree"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCurAns(event.target.value)} />
                <Form.Check
                  type="radio"
                  name="answer"
                  id="answer-check-option-two"
                  label="Agree"
                  value="Agree"
                  checked={curAns === "Agree"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCurAns(event.target.value)} />
                <Form.Check
                  type="radio"
                  name="answer"
                  id="answer-check-option-three"
                  label="Disagree"
                  value="Disagree"
                  checked={curAns === "Disagree"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCurAns(event.target.value)} />
                <Form.Check
                  type="radio"
                  name="answer"
                  id="answer-check-option-four"
                  label="Strongly Disagree"
                  value="Strongly Disagree"
                  checked={curAns === "Strongly Disagree"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCurAns(event.target.value)} />
              </Form.Group>
              <button onClick={NextQuestion} disabled={!curAns || progress === 9}>Next Question</button>
              <button onClick={PrevQuestion} disabled={progress === 0}>Previous Question</button>
              <button onClick={NextQuestion} disabled={!curAns || progress !== 9}>Finish</button>
            </>
          ) : ( 
            <div>
              <h4>CONGRATULATIONS ON COMPLETING THE BASIC CAREER ASSESSMENT!</h4>
              Here are the Questions and each Answer you submitted for each
              <br></br><br></br>
              Question 1: {questions[0]}
              <br></br>
              -{userAnswers[0]}
              <br></br><br></br>
              Question 2: {questions[1]}
              <br></br>
              -{userAnswers[1]}
              <br></br><br></br>
              Question 3: {questions[2]}
              <br></br>
              -{userAnswers[2]}
              <br></br><br></br>
              Question 4: {questions[3]}
              <br></br>
              -{userAnswers[3]}
              <br></br><br></br>
              Question 5: {questions[4]}
              <br></br>
              -{userAnswers[4]}
              <br></br><br></br>
              Question 6: {questions[5]}
              <br></br>
              -{userAnswers[5]}
              <br></br><br></br>
              Question 7: {questions[6]}
              <br></br>
              -{userAnswers[6]}
              <br></br><br></br>
              Question 8: {questions[7]}
              <br></br>
              -{userAnswers[7]}
              <br></br><br></br>
              Question 9: {questions[8]}
              <br></br>
              -{userAnswers[8]}
              <br></br><br></br>
              Question 10: {questions[9]}
              <br></br>
              -{userAnswers[9]}
              <br></br><br></br>
              <p>
                If you would like to submit your results for analyzing, please click "Get Results"
                <br></br>
                If not then you can return home when clicking the button at the top left that says, "Home"
              </p>
              <button className="Page-to-Page" onClick={() => GetResults()}>Get Results</button>
              <br></br>
            </div>
          )}
        </div>
    )
  }
  // *****************************************************************************************************************************

  // Home Page
  if (pageId === 0) {
    return (
      <div id="the-home-page">

        <header id="home-header">
          <nav id="navigation-bar" className="navbar">
            <button className="Page-to-Page" onClick={() => setPageId(3)}>React Page</button>
            <button className="Page-to-Page" onClick={() => setPageId(1)}>Basic Career Assessment Page</button>
            <button className="Page-to-Page" onClick={() => setPageId(2)}>Detailed Career Asssessment Page</button>
          </nav>
        </header>

        <h2 id="website-title"><strong>Profession Finder</strong></h2>

        <body id="homepage-content" className="homepage-body">

          <div id='left-content' className="leftcolumn">
            <div id="Purpose" className="container-purpose">
              <h5>Why is it important to find your career</h5>
              <p>
                "Finding your career is essential for personal fulfillment, financial stability, and professional growth. 
                A career aligned with your passions, values, and skills brings purpose and satisfaction. Financially, it 
                provides stability, ensuring you meet needs and pursue desired lifestyles. Identifying a path with income 
                growth and advancement prospects secures long-term financial security.
                <br></br><br></br>
                Moreover, your career facilitates professional development, offering learning, skill enhancement, and 
                progression opportunities. Through continuous growth, you expand expertise and evolve professionally. A 
                fulfilling career boosts self-esteem, confidence, and accomplishment, fostering a healthy work-life balance 
                and reducing stress.
                <br></br><br></br>
                Additionally, it strengthens social connections and community engagement through collaboration and contribution. 
                Overall, finding your career enhances well-being, encompassing fulfillment, stability, growth, and satisfaction. 
                Identifying a path resonant with values and aspirations allows a journey of self-discovery and fulfillment, 
                leading to a more rewarding life." 
              </p>
              <p>
                -ChatGPT
              </p>
            </div>

            <div className="container-basic">
              <button className="Page-to-Page" onClick={() => {setPageId(1); setSNB(true)}}>Start New Basic Career Assessment</button>
              <p className="p-content">The Basic Question test is a multiple choice questionaire that
                does not take long and is very simple to understand. Although,
                because of the limited answers, the result of your quiz will not
                be as accurate.
              </p>
              <button className="Page-to-Page" onClick={() => {setPageId(1); setSNB(false);}}>Continue Basic</button>
              <p>If you wish to continue your basic career assessment, please click this button</p>
            </div>
          </div>

          <div id="right-content" className="rightcolumn">
            <div id="FAQ" className='container-FAQ'>
              <h5>FAQs</h5>
              <ol>
                <li>~~~~~~~~~~~~~</li>
                <ul>
                  <li>Because</li>
                </ul>
                <li>~~~~~~~~~~~~~</li>
                <ul>
                  <li>Because</li>
                </ul>
                <li>~~~~~~~~~~~~~</li>
                <ul>
                  <li>Because</li>
                </ul>
                <li>~~~~~~~~~~~~~</li>
                <ul>
                  <li>Because</li>
                </ul>
                <li>~~~~~~~~~~~~~</li>
                <ul>
                  <li>Because</li>
                </ul>
              </ol>
            </div>

            <div id="WRM" className='container-WRM'>
              <h5>What Results Mean</h5>
              <p>
                Firstly, each quiz will ask you a set number of questions that will in reference
                determine which type of career area caters to your style the most.
                The results you receive have been analyzed by OpenAI or better known as ChatGPT.
              </p>
            </div>

            <div id="detailed-content" className="container-detailed">
              <button className="Page-to-Page" onClick={() => setPageId(2)}>Detailed Career Asssessment Page</button>
              <p className="p-content">The Detailed Question test is user provided short answer questionaire
                that may take some time to complete and require more thorough thinking.
                While that may be the case, the results from this quiz will be much more
                accurate.
              </p>
            </div>
          </div>

        </body>

        <footer id="home-footer" className="footer">Trademark</footer>

      </div>
    )
  } 

  // Basic Questions Page
  if (pageId === 1) {
    return (
    <div className="">

      <header>
        <div className="navbar">
          <button className="Page-to-Page" onClick={() => setPageId(0)}>Home</button>
        </div>
      </header>

      <h1>Basic Quiz</h1>
        

      <body className="quiz-body">
        <div>
          <QuizStart></QuizStart>
        </div>
      </body>

      <footer className="footer">Trademark Stuff</footer>

    </div>
    )
  }

  // Detailed Questions Page
  if (pageId === 2) {
    const totalQuestions = 10;
  
    const handleNextQuestion = () => {
      if (detailedQuestionProgress < totalQuestions - 1) {
        setDetailedQuestionProgress(detailedQuestionProgress + 1);
      }
    };
  
    const progressPercentage = (detailedQuestionProgress / totalQuestions) * 100;
  
    const ProgressBar = () => (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    );
  
    return (
      <div>
        <header>
          <h1>Welcome to the Detailed Questions Page</h1>
          <button className="Page-to-Page" onClick={() => setPageId(0)}>Back</button>
        </header>
        <ProgressBar />
        <MultipleChoiceQuestionForm
          options={["a", "b", "c"]}
          expectedAnswer="b"
        ></MultipleChoiceQuestionForm>
        <button onClick={handleNextQuestion}>Next Question</button>
      </div>
    );
  }

  // Using buttons to change the value of 'pageId' to switch pages -Dylan Blevins
  // React Home Page
  if (pageId === 3) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Shamus Ellis : Dylan Blevins : Luke Bonniwell
          </p>
  
          <button className="Home-Page-Button" onClick={() => setPageId(0)}>Home Page</button>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button variant="primary" className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
      
    );
    }

  // This should never appear
  return (
    <div><h1>You aren't supposed to be here</h1></div>
  )
}

export default App;
