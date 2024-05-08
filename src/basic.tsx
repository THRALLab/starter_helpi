/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState} from "react";
import questions from "./basicQuestions.json";
import { QuestionFormatProps } from "./interfaces/questionFormat";
import { BasicOptions } from "./interfaces/basicOption";
import "./Basic.css";
import Modal from "./Modal";
import Confetti from 'react-confetti';
//component used for basic question format
const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
	options
}) => {
	const [selected, setSelected] = useState<BasicOptions | null>(null);
	const optionSelect = (option: BasicOptions) => {
		setSelected(option);
	};
	/*useEffect(()=>{
		setSelected(basicQuestions);
	},[]);*/
	return (
		<div className="quizContainer">
			{options.map((option: BasicOptions) => (
				<label key={option.text}>
					<input
						type="radio"
						value={option.text}
						checked={selected === option.text}
						onChange={() => optionSelect(option)}
					/>
					<div className="optionsContainer">{option.text}</div>
					<img src={option.image} alt="selected" className="selected-image"/>
				</label>
			))}
			<p>You selected: {selected?.text}</p>
		</div>
	);
};

function Basic() {
	return (
		<div>
			{questions.map((question, question_number) => (
				<div key={question_number}>
					<div className="questionContainer">{question.question}</div>
					<QuestionFormatComponent question_number={question.question_number} question={question.question} options={question.options as BasicOptions[]} type={question.type}/>
				</div>
			))}
	/</div>
	);
}
export default Basic;