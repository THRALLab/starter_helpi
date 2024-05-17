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
    <div style={{
        backgroundColor: '#fafbfa',
        }}>
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
                <img src ={office} alt = "office"/>
              </div>

              <div className='right-column'>
                <h1>Career<span style={{color:'black'}}>Explorer</span></h1>
                <h3 style={{marginLeft: 85}} ><span style={{color:'black'}}>Explore your future</span> career with us!</h3>
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
        </div>
    </div>
  );
}
export default Home;
