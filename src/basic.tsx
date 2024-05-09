/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import questions from "./basicQuestions.json";
import QuestionFormatProps from "./interfaces/questionFormat";
import { BasicOptions } from "./interfaces/basicOption";
import "./Basic.css";
import Modal from "./Modal";
import Confetti from "react-confetti";
import ProgressBar from "./ProgressBar";
import QuestionFormatComponent from "./QuestionFormatComponent";

// Component used for multiple choice responses
// Component used for multiple choice responses
const MultipleChoiceComponent: React.FC<QuestionFormatProps> = ({
	question_number,
	question,
	type,
	options
}) => {
	const [selected, setSelected] = useState<BasicOptions | null>(null);
	const optionSelect = (option: BasicOptions) => {
		setSelected(option);
	};
	return (
		<div className="quizContainer">
			<div className="questionContainer">
				{options?.map((option: BasicOptions) => (
					<label key={option.text}>
						<input
							type="radio"
							value={option.text}
							checked={selected === option.text}
							onChange={() => optionSelect(option)}
						/>
						<div className="optionsContainer">{option.text}</div>
						<img src={option.image} alt="selected" className="selected-image" />
					</label>
				))}
				{/* <p>You selected: {selected?.text}</p> */}
			</div>
		</div>
	);
};

// Component used for range slider answer choices
const RangeComponent: React.FC<QuestionFormatProps> = ({
	question_number,
	question,
	type,
	options
}) => {
	const [rangeVal, setRangeVal] = useState<number>(5);

	const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRangeVal(parseInt(event.target.value));
	};
	return (
		<div className="questionContainer">
			<label htmlFor="range">Select a value:</label>
			<input
				type="range"
				id="range"
				name="range"
				min={1}
				max={10}
				value={rangeVal}
				onChange={handleRangeChange}
			/>
			<p>Selected value: {rangeVal} </p>
		</div>
	);
};

function Basic() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex(prevIndex => prevIndex + 1);
	};

	const handlePrev = () => {
		setCurrentIndex(prevIndex => prevIndex - 1);
	};

	return (
		<div>
			<ProgressBar
				currentIndex={currentIndex}
				totalQuestions={questions.length}
			/>
			<div key={currentIndex}>
				<h2>{questions[currentIndex].question}</h2>
				{questions[currentIndex].type === "multipleChoice" ? (
					<MultipleChoiceComponent
						options={questions[currentIndex].options as BasicOptions[]}
						question_number={0}
						question={""}
						type={""}
					/>
				) : (
					<RangeComponent
						options={questions[currentIndex].options as BasicOptions[]}
						question_number={0}
						question={""}
						type={""}
					/>
				)}
			</div>
			<button onClick={handlePrev} disabled={currentIndex === 0}>
				Previous
			</button>
			<button
				onClick={handleNext}
				disabled={currentIndex === questions.length - 1}
			>
				Next
			</button>
		</div>
	);
}

export default Basic;
