//import React from "react";
import "./detailedPage.css";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const DetailedPage = () => {
	const [response, setResponse] = useState<(boolean | string)[]>
	([false, false, false, false, "", false, false, false, false, "", false, false, false, false, "", false, false, false, false, "",false, 
	false, false, false, "", false, false, false, false, "",false, false, false, false, "",])
	const [otherSelected, setOtherSelected] = useState<boolean>(false);
	const [otherText, setOtherText] = useState<string>("");
	console.log(response[0]);
	console.log(response[1]);
	console.log(response[4])
	function handleRadio(option:string, index:number) {
		if(option === "Other:"){
			setOtherSelected(true);
			const newResponse = [...response];
			for(let i=0; i < 4; ++i){
				newResponse[i] = false;
			}
			newResponse[index] = "";
			setResponse(newResponse);
		}
		else{
			setOtherSelected(false);
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
				onChange={() => handleRadio("holder", 0)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option2"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 1)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option3"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 2)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option4"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 3)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q1-Option5"
					label="Other:"
					name="question1"
					onChange={() => handleRadio("Other:", 4)}
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
			<h3>Question 2</h3>
			<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q2-Option1"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option2"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option3"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 7)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option4"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder", 8)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q2-Option5"
					label="Other:"
					name="question2"
					onChange={() => handleRadio("Other:", 9)}
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
				onChange={() => handleRadio("holder", 10)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option2"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 11)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option3"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 12)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q3-Option4"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 13)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q3-Option5"
					label="Other:"
					name="question3"
					onChange={() => handleRadio("Other:",14)}
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
		<h3>Question 4</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q4-Option1"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 15)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option2"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 16)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option3"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 17)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option4"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 18)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q4-Option5"
					label="Other:"
					name="question4"
					onChange={() => handleRadio("Other:", 19)}
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
		<h3>Question 5</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q5-Option1"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 20)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option2"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 21)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option3"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 22)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q5-Option4"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 23)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q5-Option5"
					label="Other:"
					name="question5"
					onChange={() => handleRadio("Other:", 24)}
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
		<h3>Question 6</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q6-Option1"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 25)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option2"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 26)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option3"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 27)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option4"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 28)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q6-Option5"
					label="Other:"
					name="question6"
					onChange={() => handleRadio("Other:", 29)}
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
		<h3>Question 7</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q7-Option1"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 30)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option2"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 31)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option3"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 32)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option4"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 33)}
			/>
			<Form.Check
					inline
					type="radio"
					id="q7-Option5"
					label="Other:"
					name="question7"
					onChange={() => handleRadio("Other:", 34)}
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
	</>
	);
};

export default DetailedPage;

