
import React, {} from 'react';
import {Button} from 'react-bootstrap';

interface DetailedProp {
    handlePage: (page: string) => void;
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    return (
        <header className="header">
    <div className="home-container">
    <div className="home-column">
        <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
    </div>
    </div>
    </header>
    )
}

export default Detailed;