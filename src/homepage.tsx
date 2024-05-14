import easy_cat  from "./images/Lying_down_Calico_Cat_with_Red_Collar.webp";
import hard_cat from "./images/calico_cat_sitting.webp";
import './homepage.css';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <><div id="home-page">
      {/*
      <header className="App-header">
        <div className="image">
          <img
              src={logo}
              alt="logo"
              id="logo-pic"
          />
        </div>
        <div className="text">
          <h1>Cat-ylist Career</h1> 
          <nav>
            <Link to ="/homepage">
            <Button className='nav-btn'>Home</Button>
            </Link>
            <Link to ="/basicQuestion">
            <Button className='nav-btn'>Basic Quiz</Button>
            </Link>
            <Link to = "/DetailedQuestion">
            <Button className='nav-btn'>Detailed Quiz</Button>
            </Link>
            <Link to ="/AboutMe">
            <Button className='nav-btn'>About</Button>
            </Link>
          </nav>
        </div>
      </header>
  */}

      <body>
        <div className="homepage-body">
          <div className="homepage-quiz-section">
          <h3 className='heading'>THE EASY ROUTE  <br></br>  (=˃ᆺ˂=)</h3>

            <div className="homepage-box">

            <p>
              This is the basic version of our career quiz. It consists of simple multiple choice
              The purpose of this quiz is meant to have more generic questions with a more limited answer
              choices. It prioritized to be answered relatively quickly and easy to answer with a quick glance.
              This can be useful for those that already have confidence within their desired career and want
              reassurance or need specification in what they want.
            </p>

            <img
                  src={easy_cat}
                  alt="Easy Pic"
                  className ="image-easy"
            />
            </div>
            
            <Link to = "/BasicQuestion">
              <Button className="homepage-buttons">Take Basic Questions</Button>
            </Link>
          </div>

          <div className="homepage-quiz-section">
            <h3 className='heading'>THE JOURNEY <br></br> (=✪ᆽ✪=)</h3>
              <div className="homepage-box">
                <p>
                  The Journey is meant to be more thought-provoking type of quiz. This quiz is designed to have
                  more complex and demanding questions that needs a deep reflection into your own soul to respond
                  to these questions. This is meant for those that have the time and patience. These questions more
                  reflect questions that follow more a personailty style rather than those of 'would-you-rathers' to
                  really encourage a deeper connection with the results.
                </p>
                
                <img
                    src={hard_cat}
                    alt="Hard Pic"
                    className ="image-hard"
                />
              </div>
              <Link to = "/DetailedQuestion">
                <Button className="homepage-buttons">Take Detailed Questions</Button>
              </Link>
          </div>
        </div>
      </body>
    </div></>
  );
}
export default Homepage;
