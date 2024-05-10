import BasicDetailedButtons from "./basicDetailedButton";
import "./home.css";

export default function Home() {
	return (
		<div className="landingContainer">
			{/* <BasicDetailedButtons /> */}
			<div className="welcomeMessage">
				<h1>Welcome to Careeribou Careers</h1>
				<p>
					Find the career that works just for you through a comprehensive quiz
					that utilizes unique—but important questions—
					<br />
					and actively seeks your input to get tailored and personalized career
					reports. To get started, let's get to know you.
				</p>
				<h2>What's your name? </h2>
			</div>
			<img
				src="https://i.ibb.co/mHRSfz0/people-different-professions-together-600nw-2257416441-removebg-preview.png"
				alt="Silhouettes of people in different careers"
			/>
		</div>
	);
}
