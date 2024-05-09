import { useState } from "react";
import QuestionFormatProps from "./interfaces/questionFormat";

const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
	options
}) => {
	const [selected, setSelected] = useState<string | null>(null);

	const optionSelect = (option: string) => {
		setSelected(option);
	};

	return (
		<div>
			<p>Select an option:</p>
			{options.length > 0
				? options.map(option => (
						<label key={option}>
							<input
								type="radio"
								value={option}
								checked={selected === option}
								onChange={() => optionSelect(option)}
							/>
							{option}
						</label>
				  ))
				: null}
			<p>You selected: {selected}</p>
		</div>
	);
};

export default QuestionFormatComponent;
