import React, { useState } from 'react';
import '../App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../App';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}



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
  

    return(
      <div className="App-header2">
        
        <div className="App-header2">
          <h1>The Career Helpi</h1>
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
    
 
  const [key, setKey] = useState<string>(keyData); //for api key input
  
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
        <OurHeader/>
      <header className="App-header">
        <h1>The Career Helpi</h1>
        
        {/*<p>
          <div style={{ margin: '30px 0' }}>
            

          </div>
  </p>*/}

        <Container>
                <Row>
                <Col>
                    <Button className="BasicButton" onClick={goToBasic}>Basic Questions</Button>

                    {/* <BasicQuestions/> */}
                    <p style={{ fontSize: '13px' }}> Discover your potential career path through our refined multiple-choice assessment.</p>
                        
                    </Col>
                    <Col>
                    <Button className="DetailedButton" onClick={goToDetailed}>
                    Detailed Assessment
                    </Button>
                    {/* <DetailedQuestions/> */}
                    <p style={{ fontSize: '13px' }}>Discover your potential career path through our comprehensive assessment featuring detailed questions.</p>

                    </Col>
                </Row>
            </Container>
        
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      <span>Created By: Olivia Karney, Khadija Mohammadi, Zahra Temori, and Jacob Whitman</span>
    </div>
  );
}

export default Home;
