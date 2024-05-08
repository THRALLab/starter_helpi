import '../App.css';
import { Button } from 'react-bootstrap';
import '../App';
import { useNavigate } from 'react-router-dom';
import olivia from './logo.png'

function Survey() {
    const navigate = useNavigate();
 
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/Home');
    };
    const goToAbout = () => {
 
        // This will navigate to second component
        navigate('/About');
      };
      const goToSurvey = () => {
    
        // This will navigate to second component
        navigate('/Survey');
      };
    
    
   return (
    <div className="App">
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
      <header className="App-header">
        <div className='banner'>
          <div className='left-column'>
         {/*<video controls autoPlay loop muted playsInline>
        <source src= 'src/Components/office.mp4' type="video/mp4"/>
        Your browser does not support the video tag.
    </video>*/}
            <span> SURVERYYYY </span>
                       

          </div>
          <div className='right-column'>
          <span> person </span>
          <span> person </span>
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

export default Survey;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/