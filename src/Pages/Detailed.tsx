
import React, {} from 'react';
import {Button} from 'react-bootstrap';

interface DetailedProp {
    handlePage: (page: string) => void;
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    return (
    <div className="home-container">
    <div className="home-column">
        <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
    </div>
    </div>
    )
}

export default Detailed;