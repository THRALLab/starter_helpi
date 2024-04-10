import React from 'react';
import { Form } from 'react-bootstrap';
import './General.css';

interface DetailedQuestionProps {
    label: string;
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
}

function SliderQuestion(props: DetailedQuestionProps) {

    function updateSliderValue (event: React.ChangeEvent<HTMLInputElement>){
        props.onChange(parseInt(event.target.value));
      }

    return (
        <div>
        <label>{props.label}</label><br />
        <Form.Range style={{ transform: 'rotate(270deg)', width: '90px', marginLeft: '100px' }} value={props.value} onChange={updateSliderValue}/>
        <p>Selected Value: {props.value}</p>
        </div>
    )
}

export default SliderQuestion;