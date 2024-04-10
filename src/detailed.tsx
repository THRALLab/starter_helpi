import "../src/detailed.css";

function Detailed() {
	const questions = [
		"Are there any particular careers that have peaked your interest?",
		"Are there any sacrifices or challenges that you’re willing to embrace or absolutely want to avoid in your career?",
		"Are there any causes or missions that resonate with you that you would like to support or participate in your career?",
		"What rewards or benefits do you hope to gain?",
		"What other careers have you considered as a parallel/alternative plan? (Plan B, Plan C, etc)",
		"What’s something you feel you’ve missed out on/currently missing out on in your current job that you wish was more applied?",
		"Do you feel like your current job isn't utilizing key skills that you feel may be holding you back from gaining valuable experience?"
	];

	return (
		<>
			<h1>This is the Detailed Quiz.</h1>
			{questions.map((question: string, index: number) => {
				return (
					<div className="quizContainer" key={index}>
						<div className="questionContainer">{question}</div>
						<div className="mainContainer">
							<div className="child">
								<img
									src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
									alt="Question image"
								/>
							</div>
							<div className="child">
								<div className="btn-group">
									<button>Answer Choice 1</button>
									<button>Answer Choice 2</button>
									<button>Answer Choice 3</button>
									<button>Answer Choice 4</button>
									<button>Answer Choice 5</button>
								</div>
								<div className="prevNextBtn">
									<button>Prev.</button>
									<button>Next</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default Detailed;
