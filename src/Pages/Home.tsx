import React, { CSSProperties } from 'react';
import {Button} from 'react-bootstrap';

interface HomeProp {
    handlePage: (page: string) => void;
}

const Home: React.FC<HomeProp> = ({ handlePage }) => {
    const style: { container: CSSProperties, column: CSSProperties } = {
        container: {
            display: 'flex',
        },
        column: {
            border: '1px solid #ccc',
            margin: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    };
    return (
    <>
    <div style={style.container}>
            <div style={style.column}>
                <h1>Basic Questions</h1>
                <Button className="Basic-Button" onClick={() => handlePage('Basic')}>Basic Questions</Button>
            </div>
            <div style={style.column}>
                <h1>Detailed Questions</h1>
                <Button className="Detailed-Button" onClick={() => handlePage('Detailed')}>Detailed Questions</Button>
            </div>
        </div>
    </>
    );
}

export default Home;