//import React, { useState } from 'react';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import olivia from './logo.png'
import careerpic from './careerpic.png'
//import {office} from './careervideo.mp4'
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
// let keyData = "";
// const saveKeyData = "MYKEY";
// const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
// if (prevKey !== null) {
//   keyData = JSON.parse(prevKey);
// }



// function BasicQuestions() {
//   return (
//     <div>
//     <Link to="/BasicQuestions">
//         <Button className="BasicButton">Basic Questions</Button>
//       </Link>
//       </div>
//   );
// }

// function DetailedQuestions() {


//   return (
//     <div>
//     <Link to="/DetailedQuestions">
//       <Button className="DetailedButton">
//       Detailed Assessment
//       </Button>
//     </Link>
//     </div>
    
//   );
// }

function OurHeader(){
  const navigate = useNavigate();
  const goToAbout = () => {
 
    // This will navigate to second component
    navigate('/About');
};

    return(
      <div className="App-header2">
        <div className = "navbar">
        
        <img src = {olivia} alt = "logo" id = "image" className='fram'/>
        <ul>
          <li>Home</li>
          <li><Button className="BasicButton" onClick={goToAbout}> About </Button></li>
          <li>Contact</li>
        </ul>
        </div> 
      </div>
      
      
    )
  }

function Home() {
    const navigate = useNavigate();
 
    const goToBasic = () => {
 
        // This will navigate to second component
        navigate('/BasicQuestions');
    };
    const goToDetailed = () => {
 
        // This will navigate to first component
        navigate('/DetailedQuestions');
    };
    
 
 // const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  // function handleSubmit() {
  //   localStorage.setItem(saveKeyData, JSON.stringify(key));
  //   window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  // }


  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  // function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
  //   setKey(event.target.value);
    
  // }
  return (
    <div className="App">
        <OurHeader/>
      <header className="App-header">
        <div className='banner'>
          <div className='left-column'>
         {/*<video controls autoPlay loop muted playsInline>
        <source src= 'src/Components/office.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
    </video>*/}
            <img src = {careerpic} alt = "Creer pic" />

          </div>
          <div className='right-column'>
          <h1>Career <span>Explorer</span></h1>
        <h3><span>Explore your future</span> career with us!</h3>
          <div className='btn'>
          <Container>
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
            </Container>
            </div>
          </div>
        </div>
        
      </header>
      {/* <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form> */}
      <span>Created By: Olivia Karney, Khadija Mohammadi, Zahra Temori, and Jacob Whitman</span>
    </div>
  );
}

export default Home;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/