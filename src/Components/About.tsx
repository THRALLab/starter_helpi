import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import olivia from './logo-removebg-preview.png'
import Zahra from './Zahra1.jpg';
import Olivia from './Olivia.png'
import Khadija from './Khadija.png'
import jacobPlaceHolder from './jacobPlaceHolder.jpg';
import purpleLI from './pLinkedIn.png';
import  {OliviaLinkedIn}  from './linkedInButton';
//import { OliviaLinkedIn, KhadijaLinkedIn } from './linkedInButton';
//import { JacobLinkedIn } from './linkedInButton';
// import { KhadijaLinkedIn } from './linkedInButton';




function About() {
    const navigate = useNavigate();
 
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/Home');
    };
    const goToSurvey = () => {

      // This will navigate to second component
      navigate('/Survey');
    };
    // const goToZahraLinkedIn = () => {


    
   return (
      <div>
        <div className="App-header2">
            <div className = "navbar">
            
                <img src = {olivia} alt = "logo" id = "image" className='fram'/>
                <ul>
                <li><Button className="BasicButton" onClick={goToHome}> Home </Button></li>
                <li><Button className="BasicButton"> About </Button></li>
                <li><Button className="BasicButton" onClick={goToSurvey}> Survey </Button></li>
                  
                </ul>
            </div>
        </div>

    <div className="App">

      <header className="App-header">
        <div className='banner'>
        <Container>
        <h2>About Us</h2>
          <hr></hr>      

          <br></br>
            <Row className="row-Olivia">
                <Col>
                  <img src = {Olivia} alt = "logo" id = "image" style={{height:300, width:300}}/>
                  <br></br>
                  <br></br>
                </Col>
                <Col>
                <h3>Olivia Karney</h3> 
                <span>okarney@udel.edu</span>
                <br></br>
                <span><OliviaLinkedIn></OliviaLinkedIn></span>     
                <br></br>
                <br></br>
                </Col>
                <Col>
                  <img src = {Khadija} alt = "logo" id = "image" style={{height:300, width:300}}/>
                  <br></br>
                  <br></br>
                </Col>
                <Col>
                <h3>Khadija Mohammadi</h3>
                <span>khadija@udel.edu</span>
                <br></br>
                <div>
                  <Link to="https://www.linkedin.com/in/khadija-mohammadi-3ab7892ab/">
                    <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
                    <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
                    </Button>
                  </Link>
                </div> 
                <br></br>
                <br></br>
                </Col>
            </Row>
            <Row>
                <Col>
                  <img src = {Zahra} alt = "logo" id = "image" style={{height:300, width:300}}/>
                </Col>
                <Col>
                  <h3>Zahra Temori</h3>
                  <span>zahratm@udel.edu</span>
                  <br></br>
                  <div>
                    <Link to="https://www.linkedin.com/in/zahra-temori/">
                      <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
                      <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col>
                  <img src = {jacobPlaceHolder} alt = "logo" id = "image" style={{height:300, width:300}}/>
                </Col>
                <Col>
                  <h3>Jacob Whitman</h3>
                  <span>jacobwhi@udel.edu</span>
                  <br></br>
                  <div>
                    <Link to="https://www.linkedin.com/in/jacob-whitman-b22952228/">   
                      <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
                      <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
                      </Button>
                    </Link>
                  </div>
                </Col>
            </Row>
           

            
            {/*<Row>*/}
              {/*<h3>Zahra Temori</h3>
              <span>Email: zahratm@udel.edu</span>
              <br></br>
              <Link to="https://www.linkedin.com/in/zahra-temori/">
              
              <Button style={{ background: '#c3b1e1', display: 'inline-block', height: 100, width: 100 }} type="button">
              <img src={purpleLI} alt="logo" style={{ height: 50, width: 50, marginBottom: 20}} />
              </Button>
              </Link>

              <Button style={{background: '#c3b1e1', backgroundImage:"./pLinkedIn.jpg",backgroundSize:"cover", width:"40px", height:"40px"}}></Button>
              <button style={{background:'#c3b1e1', height: 100, width: 100}}><img src={purpleLI} alt="my image" /></button>
   <br></br>*/}
            {/*</Row>*/}
            
        </Container>
          {/*<div className='left-column'>*/}
            
               

          {/*</div>*/}
          {/*<div className='right-column'>*/}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        
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
        {/*</div>*/}
        
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

export default About;

/*
<li>Home</li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>*/