import React, { useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import {question, placeholders} from './DetailedPage-interface';



export function QuestionAnswer(): React.JSX.Element {

    const[q, setQuestion] = useState<number>(0);
    return (
        <div>
            {placeholders[q].type === "radio" ? placeholders[q].options.map((question: string) => <Form.Check inline type="radio" name="response" label={question} />) : "radio"}

            <div>
            <Button> back </Button>
            <Button> forward </Button>
        </div>
            
        </div>
        
    )
}

