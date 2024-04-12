import React from 'react';
import { Form } from 'react-bootstrap';
import './General.css';

interface DetailedQuestionProps {
    label: string;
    question: string;
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
}

function SliderQuestion(props: DetailedQuestionProps) {

    function updateSliderValue (event: React.ChangeEvent<HTMLInputElement>){
        props.onChange(parseInt(event.target.value));
      }

    return (
        <div style={{marginTop: '30px'}}>
            <label>{props.label}</label>
            <p style={{flexWrap: 'wrap'}}>{props.question}</p>
            <p style={{justifyContent: 'left', marginLeft: '330px', fontSize: '16px'}}>Strongly Agree</p>
            <Form.Range style={{ transform: 'rotate(270deg)', width: '90px', marginLeft: '200px' }} value={props.value} onChange={updateSliderValue}/>
            <p style={{justifyContent: 'left', marginLeft: '340px', fontSize: '16px'}}>Strongly Disagree</p>
            <p style={{marginLeft: '200px'}}>{props.value}</p>
        </div>
    )
}

export default SliderQuestion;