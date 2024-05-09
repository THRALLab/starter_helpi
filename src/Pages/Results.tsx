import React, { } from 'react';
import './Pages.css';
import './questions.css';

interface ResultsProp {
    handlePage: (page: string) => void;
}

const Results: React.FC<ResultsProp> = ({ handlePage }) => { /* Handes page changes */
    return (
        <div>

<div className="column">
    <h2 className="results-title">Your Results</h2>
    <p>*Insert result process*</p>
</div>

        </div>
    );
}

export default Results;