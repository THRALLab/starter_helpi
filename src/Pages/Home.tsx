import React, {} from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import './Pages.css';

interface HomeProp {
    handlePage: (page: string) => void;
}
const Home: React.FC<HomeProp> = ({ handlePage }) => {
    return (
    <header className="header">
        <div className="icon-container">
        <img src={BrainIcon} alt="Brain Icon" className="icon" />
        </div>
                <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
                <Button className="basic-button" onClick={() => handlePage('Basic')}>Basic Questions
                </Button>
                <Button className="detailed-button" onClick={() => handlePage('Detailed')}>Detailed Questions
                </Button>
        </header>
    );
}

export default Home;