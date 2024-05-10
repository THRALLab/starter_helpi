import { useEffect, useState } from "react";
import BasicDetailedButtons from "./basicDetailedButton";
import "./home.css";

export default function Home() {
	const [name, setName] = useState("");
	const [showNextBtn, setShowNextBtn] = useState(false);

	console.log(name);

	return (
		<div className="landingContainer">
			{/* <BasicDetailedButtons /> */}
			<div className="welcomeMessage">
				<h1>Welcome to Careeribou Careers</h1>
				<p>
					Find the career that works just for you through two kinds of quizzes
					that utilizes unique—but important questions—
					<br />
					and actively seeks your input to get tailored and personalized career
					reports. To get started, let's get to know you.
				</p>
				<span>
					<h2>What's your name?</h2>
					<input
						type="text"
						value={name}
						onChange={e => {
							setName(e.target.value);
							setShowNextBtn(!!e.target.value.trim());
						}}
					/>
					{showNextBtn ? <button>Next</button> : null}
				</span>
			</div>
			<img
				src="https://i.ibb.co/mHRSfz0/people-different-professions-together-600nw-2257416441-removebg-preview.png"
				alt="Silhouettes of people in different careers"
			/>
		</div>
	);
}
