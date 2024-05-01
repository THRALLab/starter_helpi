import React, { useState } from "react";
import questions from "./basicQuestions.json";
import { QuestionFormatProps } from "./interfaces/questionFormat"
//import ProgressBar from './ProgressBar';

//component used for formatting of radio buttons and questions
const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
	options
}) => {
	//selected options for each question
	const [selected, setSelected] = useState<string | null>(null);
	const optionSelect = (option: string) => {
		setSelected(option);
	};
	
	//mapping of each question's option
	return (
		<div>
			<p>Select an option:</p>
			{options.map((option) => (
				<label key={option}>
					<input
						type="radio"
						value={options}
						checked={selected === option}
						onChange={() => optionSelect(option)}
					/>
					{option}
				</label>
			))}
			<p>You selected: {selected}</p>
		</div>
	);
};

function Basic() {
	return (
		<div>
			<h1>This is the Basic Quiz.</h1>
			{questions.map((question: QuestionFormatProps, question_number) => (
				<div key={question_number}>
					<h2>{question.question}</h2>
					<QuestionFormatComponent question_number = {question.question_number} question={question.question} options={question.options} type={question.type}/>
				</div>
			))}
		</div>
	);
}
export default Basic;
