import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import {question, placeholders} from './Components/DetailedPage-interface';
import { QuestionAnswer } from './Components/QuestionAnswerComponent';

export function DetailedPage(): React.JSX.Element {
    const[q, setQuestion] = useState<question>();
    return (
        <div>
            <QuestionAnswer></QuestionAnswer>
            
        </div>
    )
}

