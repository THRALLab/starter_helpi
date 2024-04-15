import { useEffect, useState } from "react";
import "../src/detailed.css";
import questions from "./detailedQuestions.json";

// TODO - need to prevent user from going to the next question if they didn't choose an option
// TODO - need to add a variation for user input
// TODO - => need to add a guard to prevent users from entering nothing

function Detailed() {
	interface Answer {
		question: number;
		choice: string;
	}

	const [choice, setChoice] = useState<string>();

	const saved_index: number =
		Number(localStorage.getItem("current_question")) || 0;
	const last_saved: number = saved_index < 0 ? 0 : saved_index;

	const [currentIndex, setCurrentIndex] = useState(last_saved);
	localStorage.setItem("current_question", currentIndex.toString());

	const [answeredQuestions, setAnsweredQuestions] = useState<Answer[]>([]);

	function saveAnswers(choice: string, question: number) {
		if (answeredQuestions.length !== 0) {
			// if it's not empty

			// check if the question number is already added
			// -> if it is, check if the choice already exists
			//    -> if it does, replace it with the newest choice
			//  -> if it isn't, add it

			const q_number: Answer | undefined = answeredQuestions.find(
				answer => answer.question === question
			);
			if (q_number !== undefined) {
				// Check if q_number is defined
				const q_choice: Answer | undefined = answeredQuestions.find(
					answer => answer.choice === choice
				);
				if (q_choice !== undefined) {
					// If choice already exists
					console.log("exists");
					const index: number = answeredQuestions.findIndex(x => {
						return x.choice === q_choice.choice;
					});
					// Find the index of existing choice and replace it
					answeredQuestions[index].choice = choice;
				}
			} else {
				// not found
				setAnsweredQuestions([...answeredQuestions, { question, choice }]);
			}
		} else {
			// if it is empty
			setAnsweredQuestions([{ question, choice }]);
		}
	}

	useEffect(() => {
		localStorage.setItem(
			"answered_questions",
			JSON.stringify(answeredQuestions)
		);
	}, [answeredQuestions]);

	return (
		<>
			<div className="quizContainer">
				<div className="questionContainer">
					{questions[currentIndex].question}
				</div>
				<div className="mainContainer">
					<div className="child">
						<img
							src={questions[currentIndex].image}
							alt="A visual for the question"
						/>
					</div>
					<div className="child">
						<div className="btn-group">
							{questions[currentIndex].choices.map(
								(choice: string, index: number) => (
									<button
										key={index}
										onClick={() => {
											setChoice(choice);
											saveAnswers(
												choice,
												questions[currentIndex].question_number
											);
										}}
									>
										{choice}
									</button>
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
								disabled={currentIndex === questions.length - 1 || !choice}
								onClick={() => {
									setCurrentIndex(index => (index += 1 % questions.length));
									setChoice("");
								}}
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
