
import React, {} from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import './Pages.css';

interface BasicProp {
    handlePage: (page: string) => void;
}

const Basic: React.FC<BasicProp> = ({ handlePage }) => {
    return (
        <header className="header">
             <div className="icon-container">
        <img src={BrainIcon} alt="Brain Icon" className="icon" onClick ={() => handlePage('Home')}/>
        </div>
        <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
        <div className="home-container">
        <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
        </div>
    </header>
    )
}

export default Basic;