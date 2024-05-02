import '../App.css';
import { Button } from 'react-bootstrap';
import '../App';
import { useNavigate } from 'react-router-dom';
import olivia from './logo.png'

function About() {
    const navigate = useNavigate();
 
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/Home');
    };
    
    
   return (
    <div className="App">
        <div className="App-header2">
        <div className = "navbar">
        
        <img src = {olivia} alt = "logo" id = "image" className='fram'/>
        <ul>
            <Button className="DetailedButton" onClick={goToHome}>Home</Button>
            <li>About</li>
            <li>Contact</li>
          
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
            <span> person </span>
            <span> person </span>
            <span> person </span>
            <span> person </span>            

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

export default About;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/