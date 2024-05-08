import React, { useState} from "react";
import questions from "./basicQuestions.json";
import { QuestionFormatProps } from "./interfaces/questionFormat"
import { BasicOptions } from "./interfaces/basicOption"

const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
	options
}) => {
	const [selected, setSelected] = useState<string | null>(null);
	const optionSelect = (option: string) => {
		setSelected(option);
	};
	/*useEffect(()=>{
		setSelected(basicQuestions);
	},[]);*/
	return (
		<div>
			<p>Select an option:</p>
			{options.map((option: BasicOptions) => (
				<label key={option.text}>
					<input
						type="radio"
						value={option.text}
						checked={selected === option.text}
						onChange={() => optionSelect(option.text)}
					/>
					<span>{option.text}</span>
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
			{questions.map((question, question_number) => (
				<div key={question_number}>
					<h2>{question.question}</h2>
					<QuestionFormatComponent question_number={question.question_number} question={question.question} options={question.options} type={question.type}/>
				</div>
			))}
		</div>
	);
}
export default Basic;