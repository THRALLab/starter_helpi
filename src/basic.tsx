import React, { useState } from "react";
import questions from "./basicQuestions.json";
import "./ProgressBar";
import QuestionFormatProps from "./interfaces/questionFormat";
import { QuestionFormatProps } from "./interfaces/questionFormat";
import ProgressBar from "./ProgressBar";

const QuestionFormatComponent: React.FC<QuestionFormatProps> = ({
  options,
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
			{options.map((option: string) => (
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
			<p>You selected: {selected}</p>
		</div>
	);
  const [selected, setSelected] = useState<string | null>(null);
  const optionSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <div>
      <p>Select an option:</p>
      {options.map((option) => (
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
      <p>You selected: {selected}</p>
    </div>
  );
};

function Basic() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <h1>This is the Basic Quiz.</h1>
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={questions.length}
      />
      <div key={currentIndex}>
        <h2>{questions[currentIndex].question}</h2>
        <QuestionFormatComponent
          options={questions[currentIndex].options}
          question={questions[currentIndex].question}
          type={questions[currentIndex].type}
          question_number={questions[currentIndex].question_number}
        />
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
