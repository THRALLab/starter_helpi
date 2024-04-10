//import React from "react";
import "./detailedPage.css";

const detailedPage = () => {
	return (
		<>
			<div className="info-portion">
				<h1>
					Detailed Page Stuff
				</h1>
				<>
					Welcome! For this quiz, you will answer the statements by 
					choosing one of the corresponding multiple choice options
					 below! You will be able to click the "Answer" which will 
					 allow you to see the results of you future career.
				</>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Question 1: The question can be really long or short. It will all fit in here
				</h3>
				<div className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div style={{display: "flex"}} className="question-box">
				<h3 className="question-prompt">
					Maybe put options in the same line as question?
				</h3>
				<div style={{flex: "4"}} className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Stack options on one another rather than side by side?
				</h3>
				<div style={{display: "block", padding: "0px 24px"}} className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Question 1: Favorite Disney Princess Movie?
				</h3>
				<div className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Question 1: Favorite Disney Princess Movie?
				</h3>
				<div className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Question 1: Favorite Disney Princess Movie?
				</h3>
				<div className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
			<div className="question-box">
				<h3 className="question-prompt">
					Question 1: Favorite Disney Princess Movie?
				</h3>
				<div className="multiple-answers">
					<div className="answer-option">
						<input type="radio" id="movie1" name="movie" value="Tangled" />
						<label htmlFor="age1">Tangled</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie2" name="movie" value="Frozen" />
						<label htmlFor="age1">Frozen</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie3" name="movie" value="Cinderella" />
						<label htmlFor="age1">Cinderella</label>
					</div>
					<div className="answer-option">
						<input type="radio" id="movie4" name="movie" value="Moana" />
						<label htmlFor="age1">Moana</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default detailedPage;
