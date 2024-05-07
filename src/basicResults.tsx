import React from 'react';
import { basicGPT } from './basicGPT.mjs';

const basicResults: React.FC = () => {
    basicGPT();
    return (
        <div className="basicResults">
           <h1>Career Report for Basic Career Quiz</h1>
           
        </div>
    )
}
export default basicResults