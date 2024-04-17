//import React from "react";
import "./detailedPage.css";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const DetailedPage = () => {
	const [response, setResponse] = useState<(boolean | string)[]>
	([false, false, false, false, "", false, false, false, false, "", false, false, false, false, "", false, false, false, false, "",false, 
	false, false, false, "", false, false, false, false, "",false, false, false, false, "",])
	const [otherSelected, setOtherSelected] = useState<boolean[]>([false, false, false, false, false,false, false]);
	const [otherText, setOtherText] = useState<string>(""); //take out the quotations in the response and make a new state for them like you did for otherSelected and 
	//
	console.log(response[0]);
	console.log(response[1]);
	console.log(response[4])
	console.log(otherSelected)
	function handleRadio(option:string, index:number, otherIndex:number) {
		if(option === "Other:"){
			const newOtherStatus=[...otherSelected]
			newOtherStatus[otherIndex] = true;
			setOtherSelected(newOtherStatus);
			const newResponse = [...response];
			for(let i=0; i < 4; ++i){
				newResponse[i] = false;
			}
			newResponse[index] = "";
			setResponse(newResponse);
		}
		else{
			const newOtherStatus=[...otherSelected]
			newOtherStatus[otherIndex] = false;
			setOtherSelected(newOtherStatus);
			const newResponse = [...response];
			for(let i=0; i < 4; ++i){
				newResponse[i] = false;
			}
			newResponse[index] = true;
			setResponse(newResponse);
		}
	}
	function handleOtherSelect(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index:number){
		const newResponse = [...response];
		newResponse[index] = event.target.value;
		setResponse(newResponse);
		setOtherText(event.target.value);
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
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q1-Option1"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 0, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option2"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 1, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option3"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 2, 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 4)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
			<h3>Question 2</h3>
			<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q2-Option1"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 5, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option2"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 6, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option3"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 7, 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 9)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
		<h3>Question 3</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q3-Option1"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 10, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option2"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 11, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option3"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 12, 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 14)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
		<h3>Question 4</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q4-Option1"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 15, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option2"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 16, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option3"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 17, 3)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 19)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
		<h3>Question 5</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q5-Option1"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 20, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option2"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 21, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option3"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 22, 4)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 24)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
		<h3>Question 6</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q6-Option1"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 25, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option2"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 26, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option3"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 27, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 29)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
		<h3>Question 7</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q7-Option1"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 30, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option2"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 31, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option3"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 32, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option4"
				label="holder"
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
					value={otherText}
					onChange={(event) => handleOtherSelect(event, 34)}
					disabled={!otherSelected}		
						/>
				</div>
			</div>
	</>
	);
};

export default DetailedPage;

