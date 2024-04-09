import React, { CSSProperties } from 'react';
import {Button} from 'react-bootstrap';

interface HomeProp {
    handlePage: (page: string) => void;
}

const Home: React.FC<HomeProp> = ({ handlePage }) => {
    const style: { column: CSSProperties } = {
        column: {
            border: '1px solid #ccc',
            margin: '10',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    };
    return (
    <>
    <div style={style.column}>
    <h1>Basic Questions</h1>
        <Button className="Basic-Button" onClick={() => handlePage('Basic')}>Basic Questions</Button>
    </div>
    </>
    );
}

export default Home;