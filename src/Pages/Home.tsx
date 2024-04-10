import React, {} from 'react';
import {Button} from 'react-bootstrap';
import './Pages.css';

interface HomeProp {
    handlePage: (page: string) => void;
}

const Home: React.FC<HomeProp> = ({ handlePage }) => {
    return (
    <div className="home-container">
            <div className="home-column">
                <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
            </div>
            <div className="home-column">
                <Button className="basic-button" onClick={() => handlePage('Basic')}>Basic Questions</Button>
            </div>
            <div className="home-column">
                <Button className="detailed-button" onClick={() => handlePage('Detailed')}>Detailed Questions</Button>
            </div>
        </div>
    );
}

export default Home;