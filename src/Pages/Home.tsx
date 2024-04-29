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
        </div>
    );
}

export default Home;