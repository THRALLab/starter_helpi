//import React from "react";
import "./detailedPage.css";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const DetailedPage = () => {
	const [response, setResponse] = useState<(boolean | string)[]>
	([false, false, false, false, "", false, false, false, false, "", false, false, false, false, "", false, false, false, false, "",false, 
	false, false, false, "", false, false, false, false, "",false, false, false, false, "",])
	const [otherSelected, setOtherSelected] = useState<boolean[]>([false, false, false, false, false,false, false]); //correlates to the the "other" text inputs

	console.log(response)
	function handleRadio(option:string, index:number, otherIndex:number) { 
		if(option === "Other:"){
			const newOtherStatus=[...otherSelected]
			newOtherStatus[otherIndex] = true;
			setOtherSelected(newOtherStatus);
			const newResponse = [...response];
			for(let i=0; i < 4; ++i){ //makes sure all the other radio buttons are false if the other radio button is selected
				newResponse[i] = false;
			}

		}
		else{
			const newOtherStatus=[...otherSelected]
			newOtherStatus[otherIndex] = false;
			setOtherSelected(newOtherStatus);
			const newResponse = [...response];
			for(let i=0; i < 4; ++i){ //makes all the options false
				newResponse[i] = false;
			}
			newResponse[index] = true; //makes the selected radio button true; selecting it
			setResponse(newResponse);
		}
	}
	function handleOtherSelect(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index:number){ //updates the text input box
		const newResponse = [...response];
		newResponse[index] = event.target.value;
		setResponse(newResponse);
	}

	function updateProgress(responseList:boolean[]): number {
		let completed: number = 0;
		for (const response of responseList){
			if(response === true){
				completed +=1;
			}
		}
		return completed;
	}
	return (<>
		<style>{`
        .question-box {
		display:flex;
		gap:100px	
        }
		h3 {
		margin-left: 25px
		}
		.answer-box{
			margin-left: -100px	
			}
        `}</style>
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
		<div style={{textAlign:"center"}}>
		<Button>Answer</Button>
		<ProgressBar></ProgressBar>
		</div>
		<h3>Question 1</h3>
		You slept through your alarm and barely missed the train to work. The next train isn’t for another 30 minutes, so you’ll definitely be late now. What do you do?
		<div className="question-box">
		
			<Form.Check
				inline
				type="radio"
				id="q1-Option1"
				label="I’ll call my boss and let them know I’ll be late."
				name="question1"
				onChange={() => handleRadio("holder", 0, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option2"
				label="Call my friend to see if they can pick me up."
				name="question1"
				onChange={() => handleRadio("holder", 1, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option3"
				label="I’ll call in sick and take the day off."
				name="question1"
				onChange={() => handleRadio("holder", 2, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option4"
				label="I’ll take a taxi to work."
				name="question1"
				onChange={() => handleRadio("holder", 3, 0)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q1-Option5"
					label="Other:"
					name="question1"
					onChange={() => handleRadio("Other:", 4, 0)} 
			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[4])}
					onChange={(event) => handleOtherSelect(event, 4)}
					disabled={!otherSelected[0]}		
						/>
				</div>
			</div>
			<h3>Question 2</h3>
			You and a few coworkers are assigned to create a presentation for a conference that many shareholders of your company will be attending. What’s the first thing you’ll do?
			<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q2-Option1"
				label="I would try to meet shareholders to find out what think about our company."
				name="question2"
				onChange={() => handleRadio("holder", 5, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option2"
				label="I would assign tasks to our group members to organize our workflow."
				name="question2"
				onChange={() => handleRadio("holder", 6, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option3"
				label="I would start researching the topic and create a rough outline of the presentation."
				name="question2"
				onChange={() => handleRadio("holder", 7, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option4"
				label="I would begin designing the slides and decide what topics should be included."
				name="question2"
				onChange={() => handleRadio("holder", 8, 1)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q2-Option5"
					label="Other:"
					name="question2"
					onChange={() => handleRadio("Other:", 9, 1)}
			/>	
				<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[9])}
					onChange={(event) => handleOtherSelect(event, 9)}
					disabled={!otherSelected[1]}		
						/>
				</div>
			</div>
		<h3>Question 3</h3>
		A coworker comments on your part of the presentation and says it isn’t on the correct topic even though you think it is. What do you do to resolve the situation?
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q3-Option1"
				label="I would ask my coworker to explain what they think the topic is about."
				name="question3"
				onChange={() => handleRadio("holder", 10, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option2"
				label="I would ask my boss what they think about my part of the presentation."
				name="question3"
				onChange={() => handleRadio("holder", 11, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option3"
				label="I wouldn't change it because I know I'm right."
				name="question3"
				onChange={() => handleRadio("holder", 12, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option4"
				label="I would review the topic and see if I can make my part clearer."
				name="question3"
				onChange={() => handleRadio("holder", 13, 2)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q3-Option5"
					label="Other:"
					name="question3"
					onChange={() => handleRadio("Other:",14, 2)}
			/>		
				<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[14])}
					onChange={(event) => handleOtherSelect(event, 14)}
					disabled={!otherSelected[2]}		
						/>
				</div>
			</div>
		<h3>Question 4</h3>
		You’re in charge of scheduling the meetings for your presentation group. How often should you meet, and for how long?
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q4-Option1"
				label="We should check in every day for 15 minutes."
				name="question4"
				onChange={() => handleRadio("holder", 15, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option2"
				label="We should only meet once a week for an hour."
				name="question4"
				onChange={() => handleRadio("holder", 16, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option3"
				label="We should meet a few times a week."
				name="question4"
				onChange={() => handleRadio("holder", 17, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option4"
				label="I don't think we need to meet at all, email is fine."
				name="question4"
				onChange={() => handleRadio("holder", 18, 3)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q4-Option5"
					label="Other:"
					name="question4"
					onChange={() => handleRadio("Other:", 19, 3)}
			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[19])}
					onChange={(event) => handleOtherSelect(event, 19)}
					disabled={!otherSelected[3]}		
						/>
				</div>
			</div>
		<h3>Question 5</h3>
		Recently, you feel that you have been working hard and deserve a higher salary. How will you go about asking your boss for a raise?
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q5-Option1"
				label="I would ask for a raise during my next performance review."
				name="question5"
				onChange={() => handleRadio("holder", 20, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option2"
				label="I’ll just keep quiet until my boss notices my hard work."
				name="question5"
				onChange={() => handleRadio("holder", 21, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option3"
				label="I'll talk to my coworker about how to ask for a raise."
				name="question5"
				onChange={() => handleRadio("holder", 22, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option4"
				label="I need to research how much I should ask for first."
				name="question5"
				onChange={() => handleRadio("holder", 23, 4)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q5-Option5"
					label="Other:"
					name="question5"
					onChange={() => handleRadio("Other:", 24, 4)}
			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[24])}
					onChange={(event) => handleOtherSelect(event, 24)}
					disabled={!otherSelected[4]}		
						/>
				</div>
			</div>
		<h3>Question 6</h3>
		As you’re leaving your job for the day, you see a stressed coworker with a pile of paperwork on their desk. What do you do?
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q6-Option1"
				label="I would offer to help them finish their work."
				name="question6"
				onChange={() => handleRadio("holder", 25, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option2"
				label="I'm going home. I have my own work to do."
				name="question6"
				onChange={() => handleRadio("holder", 26, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option3"
				label="I would wait until tommorow to ask if they need help."
				name="question6"
				onChange={() => handleRadio("holder", 27, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option4"
				label="I would let my boss know that they need help."
				name="question6"
				onChange={() => handleRadio("holder", 28, 5)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q6-Option5"
					label="Other:"
					name="question6"
					onChange={() => handleRadio("Other:", 29, 5)}
			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[29])}
					onChange={(event) => handleOtherSelect(event, 29)}
					disabled={!otherSelected[5]}		
						/>
				</div>
			</div>
		<h3>Question 7</h3>
		After a very stressful workweek, it’s finally time to relax. What do you do to destress over the weekend?
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q7-Option1"
				label="I would go out with friends to relax."
				name="question7"
				onChange={() => handleRadio("holder", 30, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option2"
				label="I would stay home and watch TV to relax."
				name="question7"
				onChange={() => handleRadio("holder", 31, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option3"
				label="I would go to the gym to relax."
				name="question7"
				onChange={() => handleRadio("holder", 32, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option4"
				label="I would go to the beach to relax."
				name="question7"
				onChange={() => handleRadio("holder", 33, 6)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q7-Option5"
					label="Other:"
					name="question7"
					onChange={() => handleRadio("Other:", 34, 6)}
			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(response[34])}
					onChange={(event) => handleOtherSelect(event, 34)}
					disabled={!otherSelected[6]}		
						/>
				</div>
			</div>
	</>
	);
};

export default DetailedPage;

