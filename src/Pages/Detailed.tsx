
import React, {} from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import './Pages.css';

interface DetailedProp {
    handlePage: (page: string) => void;
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    return (
        <header className="header">
             <div className="icon-container">
        <img src={BrainIcon} alt="Brain Icon" className="icon" />
        </div>
        <h2 className="title">Brain Spark</h2>
        <div className="home-container">
        <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
        </div>
    </header>
    )
}

export default Detailed;