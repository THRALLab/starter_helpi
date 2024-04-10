
import React, {} from 'react';
import {Button} from 'react-bootstrap';

interface DetailedProp {
    handlePage: (page: string) => void;
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    return (<div className="home-column">
        <h1>Home Page</h1>
        <Button className="Home-Button" onClick={() => handlePage('Home')}>Home Page</Button>
    </div>)
}

export default Detailed;