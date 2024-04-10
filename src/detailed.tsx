import { Button } from "react-bootstrap";
import "../src/detailed.css";

function Detailed() {
	return (
		<>
			<h1>This is the Detailed Quiz.</h1>
			<div className="quizContainer">
				<div className="questionContainer">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
					molestiae quas, minima labore harum iste quod. Blanditiis repellendus
					vero reiciendis fugit veritatis, perferendis ut! Eveniet nobis
					distinctio dolorem molestias perferendis! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Corporis totam sunt fugit impedit
					tempora incidunt, maiores inventore quod quia, aut excepturi pariatur
					magni laborum atque nulla? Accusamus facere tempora laboriosam.
				</div>
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
		</>
	);
}

export default Detailed;
