import '../App.css';
import '../App';
import { useNavigate } from 'react-router-dom';
import olivia from './logo-removebg-preview.png'
import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
//import sunrise from './purpl.png'




function Survey() {

    const [ques1, setQues1] = useState<string>("");
    const [ques2, setQues2] = useState<string>("");
    const [ques3, setQues3] = useState<string>("");
    const [ques4, setQues4] = useState<string>("");
    const [ques5, setQues5] = useState<string>("");

    
    const [finished, setFinished] = useState<boolean> (false);
    function submitVisibility(): void {
      setFinished(!finished);
    }
  


     function updateQues1(event: React.ChangeEvent<HTMLInputElement>) {
          setQues1(event.target.value);
          console.log(event);
      }
    
      function updateQues2(event: React.ChangeEvent<HTMLInputElement>) {
        setQues2(event.target.value);
        console.log(event);
    }
      function updateQues3(event: React.ChangeEvent<HTMLInputElement>) {
      setQues3(event.target.value);
      console.log(event);
    
    }
      function updateQues4(event: React.ChangeEvent<HTMLInputElement>) {
      setQues4(event.target.value);
      console.log(event);
    
    }
      function updateQues5(event: React.ChangeEvent<HTMLInputElement>) {
      setQues5(event.target.value);
      console.log(event);
    
    }
    

    

    const navigate = useNavigate();
 
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/Home');
    };
    const goToAbout = () => {
 
        // This will navigate to second component
        navigate('/About');
      };
      
    

      
     
   return (
    <div>
      <div className="App-header2">
            <div className = "navbar">
            
                <img src = {olivia} alt = "logo" id = "image" className='fram'/>
                <ul>
                <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
                <li><Button className="BasicButton" onClick={goToAbout}> About </Button></li>
                <li><Button className="BasicButton"> Survey </Button></li>
                  
                </ul>
            </div> 
        </div>
    <div className="App">
   
              
      <header className="App-header">
        <div className='banner'>
          <div className='surveyHeader'>
         {/*<video controls autoPlay loop muted playsInline>
        <source src= 'src/Components/office.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
    </video>*/}
            <h1> Survey </h1>
            <br></br>
            <Form.Group>
            <div className='questiontobeAsked'>
                <Form.Label>1. You feel that your results were accurate!</Form.Label>
              </div>
        
            <div>
            <Form.Check
                type="radio"
                inline
                name="survey"
                onChange={updateQues1}
                id = "if-the-user-strongly-agrees"
                label="Strongly Agree"
                value="strongly agree"
                checked={ques1 === "strongly agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="surveyy"
                onChange={updateQues1}
                id = "if-the-user-agrees"
                label="Agree"
                value="agree"
                checked={ques1 === "agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="surveyyy"
                onChange={updateQues1}
                id = "if-the-user-isnot-sure"
                label="Not Sure"
                value="not sure"
                checked={ques1 === "not sure"}
            />
            <Form.Check
                type="radio"
                inline
                name="surveyyyy"
                onChange={updateQues1}
                id = "if-the-user-disagrees"
                label="Disagree"
                value="disagree"
                checked={ques1 === "disagree"}
            />
        </div>
        </Form.Group>

        <Form.Group >
            <div className='questiontobeAsked'>
                <Form.Label>2. The site was easily readable and user friendly!</Form.Label>
              </div>
        
            <div>
            <Form.Check
                type="radio"
                inline
                name="survey1"
                onChange={updateQues2}
                id = "if-the-user-strongly-agrees"
                label="Strongly Agree"
                value="strongly agree"
                checked={ques2 === "strongly agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey2"
                onChange={updateQues2}
                id = "if-the-user-agrees"
                label="Agree"
                value="agree"
                checked={ques2 === "agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey3"
                onChange={updateQues2}
                id = "if-the-user-isnot-sure"
                label="Not Sure"
                value="not sure"
                checked={ques2 === "not sure"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey4"
                onChange={updateQues2}
                id = "if-the-user-disagrees"
                label="Disagree"
                value="disagree"
                checked={ques2 === "disagree"}
            />
        </div>
        </Form.Group>

        <Form.Group >
            <div className='questiontobeAsked'>
                <Form.Label>3. You would recommend the quizzes to your friends!</Form.Label>
              </div>
        
            <div>
            <Form.Check
                type="radio"
                inline
                name="survey5"
                onChange={updateQues3}
                id = "if-the-user-strongly-agrees"
                label="Strongly Agree"
                value="strongly agree"
                checked={ques3 === "strongly agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey6"
                onChange={updateQues3}
                id = "if-the-user-agrees"
                label="Agree"
                value="agree"
                checked={ques3 === "agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey7"
                onChange={updateQues3}
                id = "if-the-user-isnot-sure"
                label="Not Sure"
                value="not sure"
                checked={ques3 === "not sure"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey8"
                onChange={updateQues3}
                id = "if-the-user-disagrees"
                label="Disagree"
                value="disagree"
                checked={ques3 === "disagree"}
            />
        </div>
        </Form.Group>
        <Form.Group >
            <div className='questiontobeAsked'>
                <Form.Label>4. The quiz kept you engaged throughout!</Form.Label>
              </div>
        
            <div>
            <Form.Check
                type="radio"
                inline
                name="surveyFourthQ"
                onChange={updateQues4}
                id = "if-the-user-strongly-agrees"
                label="Strongly Agree"
                value="strongly agree"
                checked={ques4 === "strongly agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey4thQ"
                onChange={updateQues4}
                id = "if-the-user-agrees"
                label="Agree"
                value="agree"
                checked={ques4 === "agree"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey4q"
                onChange={updateQues4}
                id = "if-the-user-isnot-sure"
                label="Not Sure"
                value="not sure"
                checked={ques4 === "not sure"}
            />
            <Form.Check
                type="radio"
                inline
                name="survey4thQues"
                onChange={updateQues4}
                id = "if-the-user-disagrees"
                label="Disagree"
                value="disagree"
                checked={ques4 === "disagree"}
            />
        </div>
        </Form.Group>
        <Form.Group controlId="questionSuggestion">
      <Form.Label>5. Do you have any suggestions for improving the quiz experience?</Form.Label>
      <Form.Control
        value={ques5}
        onChange={updateQues5} 
        as="textarea"/>
  </Form.Group>
  <br></br>

        <Form>
        <Button className="Submit-Button" onClick={submitVisibility}>Submit</Button>
      </Form>
        <br></br>
        {/*<Button onClick={submitVisibility}>Show/Hide</Button>*/}
        {finished ? <p> Thank You for Taking the Survey!</p> : null}

                       

          </div>
      
          <div className='right-column'>
          {/*<span> person </span>
          <span> person </span>*/}
          <div className='btn'>
          {/* <Container>
                <Row>
                    <Col>
                    <Button className="BasicButton" onClick={goToBasic}> Basic Assessment </Button>
                    <p style={{ fontSize: '13px' }}> Discover your potential career path through our refined multiple-choice assessment.</p>
                    </Col>
                    <Col>
                    <Button className="DetailedButton" onClick={goToDetailed}>Detailed Assessment</Button>
                    <p style={{ fontSize: '13px' }}>Discover your potential career path through our comprehensive detailed questions.</p>
                    </Col>
                </Row>
            </Container> */}
            </div>
          </div>
        </div>
        
      </header>
      
      <br></br>
       
    </div>
  </div>
);
}
export default Survey;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/