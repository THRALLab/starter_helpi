import "./modal.css";

export default function Modal() {
	return (
		<div className="modal">
			<div className="modal-content">
				<p>
					Congrats! You've completed all of the questions! Click cancel if you
					would like to go back and review your answer choices once more;
					otherwise, click 'Get Results!'.
				</p>
				<div className="buttonContainer">
					<button>Cancel</button>
					<button>Get Results!</button>
				</div>
			</div>
		</div>
	);
}
