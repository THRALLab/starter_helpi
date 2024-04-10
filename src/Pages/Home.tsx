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
                <h1>Home Page</h1>
                <Button className="Home-Button" onClick={() => handlePage('Home')}>Home Page</Button>
            </div>
            <div className="home-column">
                <h1>Basic Questions</h1>
                <Button className="Basic-Button" onClick={() => handlePage('Basic')}>Basic Questions</Button>
            </div>
            <div className="home-column">
                <h1>Detailed Questions</h1>
                <Button className="Detailed-Button" onClick={() => handlePage('Detailed')}>Detailed Questions</Button>
            </div>
        </div>
    );
}

export default Home;