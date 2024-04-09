
import React from 'react';
import {Button} from 'react-bootstrap';

interface BasicProp {
    handlePage: (page: string) => void;
}

const Basic: React.FC<BasicProp> = ({ handlePage }) => {
    const style = {
        column: {
            border: '1px solid #ccc',
            margin: '10',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
        }
    };
    return (<div style={style.column}>
        <h1>Basic Questions</h1>
        <Button className="Home-Button" onClick={() => handlePage('Home')}>Home Page</Button>
    </div>)
}

export default Basic;