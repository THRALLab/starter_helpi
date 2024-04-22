import "./modal.css";

export default function Modal() {
	return (
		<div className="modal">
			<div className="modal-content">
				<p>
					Congratulations, you've answered all of the questions! Click the
					cancel button if you would like to go back and review your answer
					choices once more; otherwise, click the 'GET RESULTS!' button to
					proceed.
				</p>
				<div className="buttonContainer">
					<button>CANCEL</button>
					<button>GET RESULTS!</button>
				</div>
			</div>
		</div>
	);
}
