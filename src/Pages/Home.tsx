import React from 'react';
import {Button} from 'react-bootstrap';

interface HomeProp {
    handlePage: (page: string) => void;
}

const Home: React.FC<HomeProp> = ({ handlePage }) => {
    const style = {
        column: {
            border: '1px solid #ccc',
            margin: '10',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
        }
    };
    return (
    <>
    <div style={style.column}>
    <h1>Basic Questions</h1>
        <div> 
        <Button className="Basic-Button" onClick={() => handlePage('Basic')}>Basic Questions</Button>
        </div>
    </div>
    </>
    );
}

export default Home;