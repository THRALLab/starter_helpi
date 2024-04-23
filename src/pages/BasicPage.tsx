import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert, Stack } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";


const BasicPage = () => {
	const [response, setResponse] = useState<(number)[]>
	([-1, -1, -1, -1, -1, -1, -1, -1])
	function updateChoice(index:number){
		setResponse(prevResponse => {
			const updatedResponse = [...prevResponse];
			if(index % 2 === 0){
				updatedResponse[index/2] = 1;
			}
			else{
				updatedResponse[Math.floor(index/2)] = 0;
			}
			return updatedResponse;
		  });
	}

	function getResponses() {
		let answers = ["", "", "", "", "", "", "", ""];

		if(response[0]){
			answers[0] = "I prefer working in a group.";
		}
		else{
			answers[0] = "I prefer working on my own.";
		}

		if(response[1]){
			answers[1] = "I prefer having my schedule made for me.";
		}
		else{
			answers[1] = "I want to be able to work when I want.";
		}

		if(response[2]){
			answers[2] = " I like having detailed instructions when doing a task.";
		}
		else{
			answers[2] = " I prefer having creative freedom when doing a task.";
		}

		if(response[3]){
			answers[3] = "I enjoy a job that challenges me.";
		}
		else{
			answers[3] = "I want a job that is easy.";
		}

		if(response[4]){
			answers[4] = "I enjoy working with my hands.";
		}
		else{
			answers[4] = "I don't like working with my hands.";
		}

		if(response[5]){
			answers[5] = "I would work a job I dislike for the money.";
		}
		else{
			answers[5] = "I would only ever work a job I like.";
		}

		if(response[6]){
			answers[6] = "I want to make a difference in the world.";
		}
		else{
			answers[6] = "I just want a job.";
		}

		if(response[7]){
			answers[7] = "I love to travel.";
		}
		else{
			answers[7]= "I don't like to travel.";

		}

		console.log(answers);
	}

    const answered = response.reduce((currentTotal: number, num: number) => num === 1 || num ===0 ?  currentTotal+=1 : currentTotal+=0, 0)
	console.log(answered)
   
	const [allow, setAllow] = useState<boolean>(false);
	const [alert, setAlert] = useState<boolean>(false);
	
    useEffect(() => {
        if (answered === 8) {
            setAllow(true);
			setAlert(true);
        } else {
            setAllow(false);
			setAlert(false);
        }
    }, [answered]);
	return (<>
	<style>{`
                .QuestionNum {
                	font-size: 50px;
					margin-left: 35px;
					display:flex;	
                    }
				hr{
					width:max;
					margin-top: 50px;
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
		<div style={{textAlign: "center"}}>
			<Button size="lg" disabled={!allow} onClick={getResponses}>Get Answer</Button>
			<Alert show={alert} variant="success" onClose={() => setAlert(false)}dismissible style={{marginLeft:"400px", marginRight:"400px"}}>
				<p>You've completed all the questions, you can now click the answer button to get your results!</p>
			</Alert>
		</div>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
		<span className="QuestionNum">#1</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}>
			<Form.Check 
					type="radio"
					id="q1-Option1"
					label="I prefer working in a group."
					name="question1"
					onChange={() => updateChoice(0)}
					checked={response[0] === 1 }
		
					/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="I prefer working on my own."
					name="question1"
					onChange={() => updateChoice(1)}
					checked={response[0] === 0}
					style={{width:"200px"}}
					/>
			</Stack>
		</span>
			<span className="QuestionNum">#2</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}> 
			<Form.Check 
					type="radio"
					id="q2-Option1"
					label="I prefer having my schedule made for me."
					name="question2"
					onChange={() => updateChoice(2)}
					checked={response[1] === 1}

					/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="I want to be able to work whenever I want."
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[1] === 0}
			
					/>
			</Stack>
			</span>
			<span className="QuestionNum">#3</span> <span>
				<Stack gap={3} style={{marginTop: "30px"}}> 
				<Form.Check 
					type="radio"
					id="q3-Option1"
					label="I like having detailed instructions when doing a task."
					name="question3"
					onChange={() => updateChoice(4)}
					checked={response[2] === 1}
					/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="I prefer having creative freedom when doing a task."
					name="question3"
					onChange={() => updateChoice(5)}
					checked={response[2] === 0}
					/>
				</Stack>
			</span>
			<span className="QuestionNum">#4</span> <span>
				<Stack gap={3} style={{marginTop: "30px"}}> 
				<Form.Check 
					type="radio"
					id="q4-Option1"
					label="I enjoy a job that challenges me."
					name="question4"
					onChange={() => updateChoice(6)}
					checked={response[3] === 1}
					/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="I want a job that is easy."
					name="question4"
					onChange={() => updateChoice(7)}
					checked={response[3] === 0}
					/>
				</Stack>
			</span>	
		</div>
		<hr></hr>

		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "25px"}}>
			<span className="QuestionNum">#5</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}>
			<Form.Check 
						type="radio"
						id="q5-Option1"
						label="I enjoy working with my hands."
						name="question5"
						onChange={() => updateChoice(8)}
						checked={response[4] === 1}
						/>
					<Form.Check  
						type="radio"
						id="q5-Option2"
						label="I don't like working with my hands."
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[4] === 0}
						style={{marginBottom:"30px"}}

					/>
			</Stack>
			</span>				
			<span className="QuestionNum">#6</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}> 
					<Form.Check 
						type="radio"
						id="q6-Option1"
						label="I would work a job I dislike for the money."
						name="question6"
						onChange={() => updateChoice(10)}
						checked={response[5] === 1}/>
					<Form.Check 
						type="radio"
						id="q6-Option2"
						label="I would only ever work a job I like."
						name="question6"
						onChange={() => updateChoice(11)}
						checked={response[5] === 0}
						style={{marginBottom:"30px"}}/>
			</Stack>
			</span>		
			<span className="QuestionNum">#7</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}> 
			<Form.Check 
						type="radio"
						id="q7-Option1"
						label="I want to make a difference in the world."
						name="question7"
						onChange={() => updateChoice(12)}
						checked={response[6] === 1}/>
					<Form.Check 
						type="radio"
						id="q7-Option2"
						label="I just want a job."
						name="question7"
						onChange={() => updateChoice(13)}
						checked={response[6] === 0}
						style={{marginBottom:"30px"}}/>
			</Stack>
			</span>	
			<span className="QuestionNum">#8</span> <span>
			<Stack gap={3} style={{marginTop: "30px"}}> 
			<Form.Check 
						type="radio"
						id="q8-Option1"
						label="I love to travel."
						name="question8"
						onChange={() => updateChoice(14)}
						checked={response[7] === 1}/>
					<Form.Check 
						type="radio"
						id="q8-Option2"
						label="I don't like to travel."
						name="question8"
						onChange={() => updateChoice(15)}
						checked={response[7] === 0}
						style={{marginBottom:"30px"}}/>
			</Stack>
			</span>
					
		</div>
		<ProgressBar variant="success" now={answered} animated max={8} style={{marginLeft:"100px", marginRight:"100px", marginTop:"30px", marginBottom: "30px"}}/>
		</>
		
	);
};
export default BasicPage;
