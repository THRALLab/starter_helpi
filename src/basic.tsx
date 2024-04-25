import React, { useState , useEffect} from "react";
import basicQuestions from "./basicQuestions.json";
function Basic() {
	return (
		<div>
		basicQuestions.map((q => {
		<h2>{q.question}</h2>
		{q.options.map(o => {
		<p>{o.option}</p>
		})}
	}))</div>
	)
}
		
interface QuestionFormatProps {
	options: string[];
}
const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
	options
}) => {
	const [selected, setSelected] = useState<string | null>(null);
	const optionSelect = (option: string) => {
		setSelected(option);
	};
	useEffect(()=>{
		setSelected(basicQuestions);
	},[]);
	return (
		<div>
			if(q.type == "multiple choice"){
				//use below function, otherwise use slider
			}
			<p>Select an option:</p>
			{options.map(option => (
				<label key={option}>
					<input
						type="radio"
						value={option}
						checked={selected === option}
						onChange={() => optionSelect(option)}
					/>
					{option}
				</label>
			))}
		</div>
	);
};
export default Basic;
