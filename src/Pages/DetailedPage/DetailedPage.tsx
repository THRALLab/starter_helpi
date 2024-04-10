import React, { useState } from 'react';
import {Question} from './Components/DetailedPage-interface';
import { QuestionAnswer } from './Components/QuestionAnswerComponent';
import './DetailedPage.css';

export function DetailedPage(): React.JSX.Element {
    const[q, setQuestion] = useState<Question>();
    return (
        <div className="detailed-quiz">
            <div className="detailed-quiz--content">
            <QuestionAnswer></QuestionAnswer>
            </div>
            
        </div>
    )
}

