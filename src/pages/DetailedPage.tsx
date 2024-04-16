//import React from "react";
import "./detailedPage.css";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const DetailedPage = () => {
	const [response, setResponse] = useState<(boolean| string)[]>
	([false, false, false, false, "", false, false, false, false, "", false, false, false, false, "", false, false, false, false, "",false, 
	false, false, false, "", false, false, false, false, "",false, false, false, false, "",])
	const [allow, setAllow] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	return (
		<>
<style>{`
                .question-box {
					display:flex;
					gap:200px
				
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
			<Button disabled={!allow}>Answer</Button>
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
				/>
				<Form.Check
					inline
					type="radio"
					id="q1-Option2"
					label="holder"
					name="question1"
				/>
				<Form.Check
					inline
					type="radio"
					id="q1-Option3"
					label="holder"
					name="question1"
				/>
				<Form.Check
					inline
					type="radio"
					id="q1-Option4"
					label="holder"
					name="question1"
				/>
				<Form.Check
					inline
					type="radio"
					id="q1-Option5"
					label="holder"
					name="question1"
				/>	
			</div>
			
			
		</>
	);
};

export default DetailedPage;
