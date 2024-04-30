import React, {} from 'react';
import {Button} from 'react-bootstrap';
import arrowIcon from './arrow.svg';
import './Pages.css';
import telescopeManImage from './telescope-man.png';

interface HomeProp {
    handlePage: (page: string) => void;
}
const Home: React.FC<HomeProp> = ({ handlePage }) => { /* Handes page changes */
    return (
        <div>

        <div className="home-center" /* Middle of page */>
        <div className="background-image" style={{backgroundImage: `url(${telescopeManImage})`}}></div>
            <h1 className="center-title">Start your future here</h1>
            <p className="center-left">Student-made career test<br></br>powered through the use of AI</p>
            <p className="basic-page-description" /* Page description */>
                    The Basic Page provides a quick overview of potential career paths based on your responses to fundamental questions. 
                    It's a great starting point for exploring your interests and skills.
                </p>
                <p className="detailed-page-description" /* Page description */>
                    The Detailed Page offers a more in-depth insight into specific career options by asking more detailed into 
                    what you really want out of a career Dive deeper into each career path to make 
                    well-informed decisions about your future.
                </p>
            <Button className="basic-button" onClick={() => handlePage('Basic')}>Basic Questions<img src={arrowIcon} alt="arrow" className="arrow-icon" /* Changes to Basic page */ /></Button>
                <Button className="detailed-button" onClick={() => handlePage('Detailed')}>Detailed Questions<img src={arrowIcon} alt="arrow" className="arrow-icon" /* Changes to Basic page */ /></Button>
        </div>
        <div className="why-box">
        <h1 className="why-box-title">Why our quiz?</h1>
        <p className="why-box-text">After spending many hours implementing the best career quiz we can, we're confident that our 
            quiz will help find the best career for you. 
            Using cutting edge AI to provide you with the greatest career path to your liking.</p>
        </div>
        <div className="fq-space">
            <h2 className="fq-title">Frequently asked questions</h2>
            <p className="fq-subtitle">What is a career quiz?</p>
            <p className="fq-text">A career quiz is a tool designed to help individuals explore and identify potential career paths based on their interests, skills, values, and personality traits. It typically consists of a series of questions that assess various aspects of the individual's preferences and characteristics.</p>
            <p className="fq-subtitle">How can a career quiz help me in my job search?</p>
            <p className="fq-text">A career quiz can provide valuable insights into potential career paths that align with your strengths, interests, and values. By identifying suitable career options, it can help you focus your job search efforts and make more informed decisions about your career.</p>
            <p className="fq-subtitle">Are career quizzes accurate?</p>
            <p className="fq-text">The accuracy of a career quiz can vary depending on factors such as the quality of the quiz, the validity of the assessment methods used, and the individual's honesty in responding to the questions. While career quizzes can provide useful insights, they should be used as one of many resources in the career exploration process.</p>
            <p className="fq-subtitle">How do career quizzes work?</p>
            <p className="fq-text">Career quizzes typically work by presenting individuals with a series of questions designed to assess their preferences, interests, skills, and personality traits. These responses are then analyzed to generate potential career options that may be a good fit for the individual.</p>
            <p className="fq-subtitle">Can I trust the results of a career quiz?</p>
            <p className="fq-text">While career quizzes can provide valuable insights, it's essential to approach the results with some level of skepticism and use them as a starting point for further exploration. Factors such as the quality of the quiz, the validity of the assessment methods, and the individual's unique circumstances can all impact the accuracy and relevance of the results.</p>
            <div className="home-foot-space"></div>
        </div>
        </div>
    );
}

export default Home;