import React from 'react';
import { Form } from 'react-bootstrap';
import './General.css';
import './DetailedQuestions.css';

interface DetailedQuestionProps {
    label: string;
    question:string;
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
}

function SliderQuestion(props: DetailedQuestionProps) {
    function updateSliderValue (event: React.ChangeEvent<HTMLInputElement>){
        props.onChange(parseInt(event.target.value));
    }

    return (
        <div className='DetailedQuestions-slider'>
            <label>{props.label}</label>
            <p className='Slider-questions'>{props.question}</p>
            <p className="Slider-text">Strongly Agree</p>
            <Form.Range className = 'Slider-slider' value={props.value} onChange={updateSliderValue}/>
            <p className="Slider-text">Strongly Disagree</p>
            <p className='Slider-value'>{props.value}</p>
        </div>
    )
}

export default SliderQuestion;