import "../src/detailed.css";

interface QuestionBody {
	question: string;
	choices: string[];
}

function Detailed() {
	const questions = [
		{
			question:
				"Which of the following particular careers have peaked your interest?",
			choices: [
				"Healthcare: Medicine, Nursing, Therapy",
				"Technology: Software Development, Data Analysis, Cybersecurity",
				"Creative Arts: Graphic Design, Writing, Music Production",
				"Business: Marketing, Entrepreneurship, Management",
				"Education: Teaching, Academic Administration, Training"
			]
		},
		{
			question:
				"What kind of sacrifices or challenges are you willing to embrace or absolutely want to avoid in your career?",
			choices: [
				"I am willing to embrace: Long hours, frequent travel, financial uncertainty",
				"I want to avoid: Toxic work environment, lack of work-life balance, stagnant growth opportunities",
				"I am willing to embrace: Career change, continuous learning, relocation",
				"I want to avoid: High stress levels, unethical practices, limited autonomy",
				"I am willing to embrace: Limited initial salary, physical demands, intense competition"
			]
		},
		{
			question:
				"Which of the following are causes or missions that resonate with you that you would like to support or participate in your career?",
			choices: [
				"Environmental conservation and sustainability",
				"Social justice and equality",
				"Education access and empowerment",
				"Health and wellness promotion",
				"Economic development and poverty alleviation"
			]
		},
		{
			question: "What rewards or benefits do you hope to gain?",
			choices: [
				"Competitive salary and bonuses",
				"Opportunities for career advancement and professional development",
				"Comprehensive health and wellness benefits",
				"Work-life balance and flexible scheduling",
				"Recognition and appreciation for contributions"
			]
		},
		{
			question:
				"What other careers have you considered as a parallel/alternative plan? (Plan B, Plan C, etc)",
			choices: [
				"Freelancing or consulting in current industry",
				"Starting a small business or entrepreneurial venture",
				"Pursuing further education or certification in a related field",
				"Transitioning into a different sector with transferable skills",
				"Exploring opportunities in a completely different field of interest"
			]
		},
		{
			question:
				"What’s something you feel you’ve missed out on/currently missing out on in your current job that you wish was more applied?",
			choices: [
				"Opportunities for creativity and innovation",
				"Mentorship and guidance for career growth",
				"Collaborative work environment and team dynamics",
				"Work-life balance and flexibility",
				"Training and development opportunities for new skills"
			]
		},
		{
			question:
				"What key skills do you feel your current job isn't utilizing and that you feel may be holding you back from gaining valuable experience?",
			choices: [
				"Leadership and decision-making abilities",
				"Technical or specialized expertise",
				"Communication and interpersonal skills",
				"Problem-solving and analytical capabilities",
				"I am currently not employed"
			]
		}
	];

	return (
		<>
			<h1>This is the Detailed Quiz.</h1>
			{questions.map((q: QuestionBody, index: number) => {
				return (
					<div className="quizContainer" key={index}>
						<div className="questionContainer">{q.question}</div>
						<div className="mainContainer">
							<div className="child">
								<img
									src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
									alt="Question image"
								/>
							</div>
							<div className="child">
								<div className="btn-group">
									{q.choices.map((choice: string, index: number) => (
										<button key={index}>{choice}</button>
									))}
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
