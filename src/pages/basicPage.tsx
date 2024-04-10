import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

const BasicPage = () => {
	const [response, setResponse] = useState<(boolean | null)[]>
	([null, null, null, null, null, null, null, null])
	function updateChoice(event: React.ChangeEvent<HTMLInputElement>, index:number){
		const updatedResponse = [...response];
		updatedResponse[index] = event.target.checked ? true : null;
		setResponse(updatedResponse)
		console.log(response[1]);
	}
	return (<>
	<style>{`
                .QuestionNum {
                	font-size: 50px;
					margin-left: 193px
					
					
                    }
				.checkbox-distance{
					margin-left: 10px;
				}
				hr{
					width:1142;
					margin-top: 100px;
				}
                `}</style>
		<div>
			<h1>
				Basic Quiz
			</h1>
			<p style={{ textAlign: "center" }}>
				Want to take a peek into your career’s future, but don’t have time to take the full career assessment? The basic career quiz is a smaller, faster alternative that gives similar results to the detailed assessment. With only 8 true or false questions, this quiz should only take 5 minutes of your time to show you the future of your career.
			</p>
			
		</div>
		<div style={{textAlign:"center"}}>
			<Button disabled >Answer</Button>
		</div>
		<div style={{textAlign: "center", marginTop: "100px"}}>
		</div>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
		<span className="QuestionNum">#1</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="q1-Option1"
					label="holder"
					name="question1"
					onChange={(e) => updateChoice(e, 0)}
					checked = {response[0] === true}
					/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="holder"
					name="question1"
					onChange={(e) => updateChoice(e, 0)}
					checked = {response[0] === false}
					/>
			</span>
			<span className="QuestionNum">#2</span>
			<span className="checkbox-distance">
				<Form.Check 
					type="radio"
					id="q2-Option1"
					label="holder"
					name="question2"
					onChange={(e) => updateChoice(e, 1)}

					/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="holder"
					name="question2"
					onChange={(e) => updateChoice(e, 1)}

					/>
			</span>
			<span className="QuestionNum">#3</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="q3-Option1"
					label="holder"
					name="question3"
					onChange={(e) => updateChoice(e, 2)}

					/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="holder"
					name="question3"
					onChange={(e) => updateChoice(e, 2)}


					/>
			</span>
			<span className="QuestionNum">#4</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="q4-Option1"
					label="holder"
					name="question4"
					onChange={(e) => updateChoice(e, 3)}


					/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="holder"
					name="question4"
					onChange={(e) => updateChoice(e, 3)}


					/>
			</span>
		</div>
		<hr></hr>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "100px"}}>
		<span className="QuestionNum">#5</span>
			<span className="checkbox-distance" >
				<div>
				<Form.Check 
					type="radio"
					id="q5-Option1"
					label="holder"
					name="question5"
					onChange={(e) => updateChoice(e, 4)}


					>
				</Form.Check>
				<Form.Check  /* Fix the radio buttons and include state*/
					type="radio"
					id="q5-Option2"
					label="holder"
					name="question5"
					onChange={(e) => updateChoice(e, 4)}

					>
				</Form.Check>
				</div>
			</span>
			<span className="QuestionNum">#6</span>
			<span className="checkbox-distance">
				<div>
					<Form.Check 
					type="radio"
					id="q6-Option1"
					label="holder"
					name="question5"
					onChange={(e) => updateChoice(e, 5)}

					>
				</Form.Check>
				<Form.Check 
					type="radio"
					id="q6-Option2"
					label="holder"
					name="question6"
					onChange={(e) => updateChoice(e, 5)}

					>
				</Form.Check>
				</div>
			</span>
			<span className="QuestionNum">#7</span>
			<span className="checkbox-distance" >
				<div>
				<Form.Check 
					type="radio"
					id="q7-Option1"
					label="holder"
					name="question7"
					onChange={(e) => updateChoice(e, 6)}
	
					>
				</Form.Check>
				<Form.Check 
					type="radio"
					id="q7-Option2"
					label="holder"
					name="question7"
					onChange={(e) => updateChoice(e, 6)}


					>
				</Form.Check>
				</div>
			</span>
			<span className="QuestionNum">#8</span>
			<span className="checkbox-distance" >
				<div>
				<Form.Check 
					type="radio"
					id="q8-Option1"
					label="holder"
					name="question8"
					onChange={(e) => updateChoice(e, 7)}


					>
				</Form.Check>
				<Form.Check 
					type="radio"
					id="q8-Option2"
					label="holder"
					name="question8"
					onChange={(e) => updateChoice(e, 7)}
					
					>
				</Form.Check>
				</div>
			</span>
		</div>
		</>
		
	);
};
export default BasicPage;
