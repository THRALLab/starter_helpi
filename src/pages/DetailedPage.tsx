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
		if(option === "other"){
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
	return (
		<>
<style>{`
                .question-box {
					display:flex;
					gap:100px
				
                    }
				h3 {
					margin-left: 25px
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
					label="other"
					name="question1"
					onChange={() => handleRadio("other", 4)}
		
				/>
				{otherSelected && (
		
					<Form.Control
						type="text"
						placeholder="Enter your answer"
						value={otherText}
						onChange={(event) => handleOtherSelect(event, 4)}
					/>
				
				)}

			</div>
			
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q2-Option1"
					label="holder"
					name="question3"

				/>
				<Form.Check
					inline
					type="radio"
					id="q2-Option2"
					label="holder"
					name="question3"
				/>
				<Form.Check
					inline
					type="radio"
					id="q2-Option3"
					label="holder"
					name="question3"
				/>
				<Form.Check
					inline
					type="radio"
					id="q2-Option4"
					label="holder"
					name="question3"
				/>
				<Form.Check
					inline
					type="radio"
					id="q2-Option5"
					label="other"
					name="question3"
				/>	
			</div>
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q3-Option1"
					label="holder"
					name="question4"

				/>
				<Form.Check
					inline
					type="radio"
					id="q3-Option2"
					label="holder"
					name="question4"
				/>
				<Form.Check
					inline
					type="radio"
					id="q3-Option3"
					label="holder"
					name="question4"
				/>
				<Form.Check
					inline
					type="radio"
					id="q3-Option4"
					label="holder"
					name="question4"
				/>
				<Form.Check
					inline
					type="radio"
					id="q3-Option5"
					label="other"
					name="question4"
				/>	
			</div>
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q4-Option1"
					label="holder"
					name="question5"

				/>
				<Form.Check
					inline
					type="radio"
					id="q4-Option2"
					label="holder"
					name="question5"
				/>
				<Form.Check
					inline
					type="radio"
					id="q4-Option3"
					label="holder"
					name="question5"
				/>
				<Form.Check
					inline
					type="radio"
					id="q4-Option4"
					label="holder"
					name="question5"
				/>
				<Form.Check
					inline
					type="radio"
					id="q4-Option5"
					label="other"
					name="question5"
				/>	
			</div>
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q5-Option1"
					label="holder"
					name="question6"

				/>
				<Form.Check
					inline
					type="radio"
					id="q5-Option2"
					label="holder"
					name="question6"
				/>
				<Form.Check
					inline
					type="radio"
					id="q5-Option3"
					label="holder"
					name="question6"
				/>
				<Form.Check
					inline
					type="radio"
					id="q5-Option4"
					label="holder"
					name="question6"
				/>
				<Form.Check
					inline
					type="radio"
					id="q5-Option5"
					label="other"
					name="question6"
				/>	
			</div>
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q6-Option1"
					label="holder"
					name="question7"

				/>
				<Form.Check
					inline
					type="radio"
					id="q6-Option2"
					label="holder"
					name="question7"
				/>
				<Form.Check
					inline
					type="radio"
					id="q6-Option3"
					label="holder"
					name="question7"
				/>
				<Form.Check
					inline
					type="radio"
					id="q6-Option4"
					label="holder"
					name="question7"
				/>
				<Form.Check
					inline
					type="radio"
					id="q6-Option5"
					label="other"
					name="question7"
				/>	
			</div>
			<h3>Question 1</h3>
			<div className="question-box">
				<Form.Check
					inline
					type="radio"
					id="q7-Option1"
					label="holder"
					name="question2"

				/>
				<Form.Check
					inline
					type="radio"
					id="q7-Option2"
					label="holder"
					name="question2"
				/>
				<Form.Check
					inline
					type="radio"
					id="q7-Option3"
					label="holder"
					name="question2"
				/>
				<Form.Check
					inline
					type="radio"
					id="q7-Option4"
					label="holder"
					name="question2"
				/>
				<Form.Check
					inline
					type="radio"
					id="q7-Option5"
					label="other"
					name="question2"
				/>	
			</div>
			
			
		</>
	);
};

export default DetailedPage;

