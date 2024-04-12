import { useState } from "react";
import "../src/detailed.css";
import questions from "./detailedQuestions.json";

function Detailed() {
	const saved_index: number =
		Number(localStorage.getItem("current_question")) || 0;
	const last_saved: number = saved_index < 0 ? 0 : saved_index;

	const [currentIndex, setCurrentIndex] = useState(last_saved);
	localStorage.setItem("current_question", currentIndex.toString());

	return (
		<>
			<h1>This is the Detailed Quiz.</h1>
			<div className="quizContainer">
				<div className="questionContainer">
					{questions[currentIndex].question}
				</div>
				<div className="mainContainer">
					<div className="child">
						<img
							src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
							alt="Question"
						/>
					</div>
					<div className="child">
						<div className="btn-group">
							{questions[currentIndex].choices.map(
								(choice: string, index: number) => (
									<button key={index}>{choice}</button>
								)
							)}
						</div>
						<div className="prevNextBtn">
							<button
								disabled={currentIndex === 0}
								onClick={() =>
									setCurrentIndex(index => (index -= 1 % questions.length))
								}
							>
								{currentIndex === 0 ? "END" : "Prev."}
							</button>
							<button
								disabled={currentIndex === questions.length - 1}
								onClick={() =>
									setCurrentIndex(index => (index += 1 % questions.length))
								}
							>
								{currentIndex === questions.length - 1 ? "END" : "Next"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detailed;
