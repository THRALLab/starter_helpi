import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const basicPage = () => {
	return (<>
	<style>{`
                .QuestionNum {
                	font-size: 50px;
					margin-left: 200px
					
					
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
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check  /* Fix the radio buttons and include state*/
					type="radio"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#2</span>
			<span className="checkbox-distance">
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#3</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#4</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
		</div>
		<hr></hr>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "100px"}}>
		<span className="QuestionNum">#5</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check  /* Fix the radio buttons and include state*/
					type="radio"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#6</span>
			<span className="checkbox-distance">
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#7</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
			<span className="QuestionNum">#8</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
				<Form.Check 
					type="checkbox"
					id="holder1"
					label="holder">
				</Form.Check>
			</span>
		</div>
		</>
		
	);
};

export default basicPage;
