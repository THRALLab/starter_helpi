//import React, { useState } from 'react';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import olivia from './logo-removebg-preview.png'
import office from './office.gif';
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

// function OurHeader(){
//   const navigate = useNavigate();
//   const goToAbout = () => {
 
//     // This will navigate to second component
//     navigate('/About');
//   };
//   const goToSurvey = () => {

//     // This will navigate to second component
//     navigate('/Survey');
//   };
//   const goToHome = () => {

//     // This will navigate to second component
//     navigate('/Home');
//   };


// /*function OurHeader(){*/
//   return(
//     <div className="App-header2">
//         <div className = "navbar">
//         <div className = "img">
//           <img src = {olivia} alt = "logo" id = "image" className='fram'/>
//         </div>

//         <ul>
//           <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
//           <li><Button className="BasicButton" onClick={goToAbout}> About </Button></li>
//           <li><Button className="BasicButton" onClick={goToSurvey}> Survey </Button></li>
//         </ul>
//         </div> 
//       </div>

//   )
// }

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

    // the following lines were moved from the "Our Header Function"

  const goToAbout = () => {
 
    // This will navigate to second component
    navigate('/About');
  };
  const goToSurvey = () => {

    // This will navigate to second component
    navigate('/Survey');
  };
  const goToHome = () => {

    // This will navigate to second component
    navigate('/Home');
  };
    

 
    
  // }
  return (
      <div>
        <div className="App-header2">
            <div className = "navbar">
            
                <img src = {olivia} alt = "logo" id = "image" className='fram'/>
                <ul>
                <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
                <li><Button className="BasicButton" onClick={goToAbout}> About </Button></li>
                <li><Button className="BasicButton" onClick={goToSurvey}> Survey </Button></li>      
                </ul>
            </div> 
        </div>
              {/*<OurHeader/>*/}

    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <div className='left-column'>
         {/*<video controls autoPlay loop muted playsInline>
        <source src= 'src/Components/office.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
    </video>*/}
            <img src ={office} alt = "office"/>

          </div>
          <div className='right-column'>
          <h1>Career<span>Explorer</span></h1>
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
        
        <br></br>
        <br></br>


        
      </header>
      {/* <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form> */}
      {/*<span>Created By: Olivia Karney, Khadija Mohammadi, Zahra Temori, and Jacob Whitman</span>*/}
    </div>
    </div>
  );
}

export default Home;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/