import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";


const BasicPage = () => {
	const [response, setResponse] = useState<(number)[]>
	([0, 0, 0, 0, 0, 0, 0, 0])
	function updateChoice(index:number){
		console.log("Here:" + 11/2);
		setResponse(prevResponse => {
			const updatedResponse = [...prevResponse];
			if(index % 2 === 0){
				updatedResponse[index/2] = 1;
			}
			else{
				updatedResponse[Math.floor(index/2)] = -1;
			}
			return updatedResponse;
		  });
	}

	function getResponses() {
		let answers = ["", "", "", "", "", "", "", ""];

		if(response[0]){
			answers[0] = "In groups";
		}
		else{
			answers[0] = "On my own.";
		}

		if(response[1]){
			answers[1] = "I want my schedule made for me";
		}
		else{
			answers[1] = "I want to clock in when I want.";
		}

		if(response[2]){
			answers[2] = "I want detailed instructions.";
		}
		else{
			answers[2] = "I prefer creative freedom";
		}

		if(response[3]){
			answers[3] = "Yes, I enjoy a challenge.";
		}
		else{
			answers[3] = "No, I want a job that is easy.";
		}

		if(response[4]){
			answers[4] = "Yes, I do.";
		}
		else{
			answers[4] = "No, I don't.";
		}

		if(response[5]){
			answers[5] = "I care more about the money.";
		}
		else{
			answers[5] = "I'd only work a job I like.";
		}

		if(response[6]){
			answers[6] = "Yes, I want to make a difference.";
		}
		else{
			answers[6] = "No, I just want a job.";
		}

		if(response[7]){
			answers[7] = "Yes, I love to travel.";
		}
		else{
			answers[7]= "No, I don't.";
		}

		console.log(answers);
	}

	function updateProgress(responseList:number[]): number {
		let completed: number = 0;
		for (const response of responseList){
			if(response === 1){
				completed +=1;
			}
		}
		return completed;
	}

    let answered = updateProgress(response);
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
					margin-left: 193px
					
					
                    }
				.checkbox-distance{
					margin-left: 10px;
				}
				hr{
					width:1142;
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
		<Button size="lg" disabled={!allow} onClick={getResponses}>Answer</Button>
		<div style={{textAlign: "center", marginTop:"10px"}}>
		</div>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
		<span className="QuestionNum">#1</span>
				
			<span className="checkbox-distance" >
			Do you prefer working on your own or working in a group?
				<Form.Check 
					type="radio"
					id="q1-Option1"
					label="In groups"
					name="question1"
					onChange={() => updateChoice(0)}
					checked={response[0] === 1 }
		
					/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="On my own."
					name="question1"
					onChange={() => updateChoice(1)}
					checked={response[0] === -1}
				
					/>
			</span>
			<span className="QuestionNum">#2</span>
			<span className="checkbox-distance">
			Would you rather have your schedule made by your boss, or be allowed to clock in at your own discretion?
				<Form.Check 
					type="radio"
					id="q2-Option1"
					label="I want my schedule made for me"
					name="question2"
					onChange={() => updateChoice(2)}
					checked={response[1] === 1}

					/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="I want to clock in when I want."
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[1] === -1}

					/>
			</span>
			<span className="QuestionNum">#3</span>
			<span className="checkbox-distance" >
			When working on a task, do you prefer having detailed instructions or creative freedom?

				<Form.Check 
					type="radio"
					id="q3-Option1"
					label="I want detailed instructions."
					name="question3"
					onChange={() => updateChoice(4)}
					checked={response[2] === 1}

					/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="I prefer creative freedom"
					name="question3"
					onChange={() => updateChoice(5)}
					checked={response[2] === -1}


					/>
			</span>
			<span className="QuestionNum">#4</span>
			<span className="checkbox-distance" >
			Do you enjoy a job that challenges you?
				<Form.Check 
					type="radio"
					id="q4-Option1"
					label="Yes, I enjoy a challenge."
					name="question4"
					onChange={() => updateChoice(6)}
					checked={response[3] === 1}


					/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="No, I want a job that is easy."
					name="question4"
					onChange={() => updateChoice(7)}
					checked={response[3] === -1}


					/>
			</span>
		</div>
		<hr></hr>

		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "25px"}}>

			<span className="QuestionNum">#5</span>
				<span className="checkbox-distance" >
				Do you like to work with your hands?
					<Form.Check 
						type="radio"
						id="q5-Option1"
						label="Yes, I do."
						name="question5"
						onChange={() => updateChoice(8)}
						checked={response[4] === 1}
						/>
					<Form.Check  /* Fix the radio buttons and include state*/
						type="radio"
						id="q5-Option2"
						label="No, I don't."
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[4] === -1}

					/>
				</span>
				

			<span className="QuestionNum">#6</span>
				<span className="checkbox-distance">
				Would you work a job you dislike if it makes you a lot of money?
					<div>
						<Form.Check 
						type="radio"
						id="q6-Option1"
						label="I care more about the money."
						name="question6"
						onChange={() => updateChoice(10)}
						checked={response[5] === 1}

						/>
					<Form.Check 
						type="radio"
						id="q6-Option2"
						label="I'd only work a job I like."
						name="question6"
						onChange={() => updateChoice(11)}
						checked={response[5] === -1}

						/>

					</div>
				</span>
			<span className="QuestionNum">#7</span>
			Is it important to you that your job makes the world a better place to live?
				<span className="checkbox-distance" >
					<div>
					<Form.Check 
						type="radio"
						id="q7-Option1"
						label="Yes, I want to make a difference."
						name="question7"
						onChange={() => updateChoice(12)}
						checked={response[6] === 1}
		
						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q7-Option2"
						label="No, I just want a job."
						name="question7"
						onChange={() => updateChoice(13)}
						checked={response[6] === -1}


						>
					</Form.Check>
					</div>
				</span>
			<span className="QuestionNum">#8</span>
			Do you enjoy traveling?
				<span className="checkbox-distance" >
					<div>
					<Form.Check 
						type="radio"
						id="q8-Option1"
						label="Yes, I love to travel."
						name="question8"
						onChange={() => updateChoice(14)}
						checked={response[7] === 1}


						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q8-Option2"
						label="holder"
						name="question8"
						onChange={() => updateChoice(15)}
						checked={response[7] === -1}
						
						>
					</Form.Check>
					</div>
				</span>
		</div>
		</>
		
	);
};
export default BasicPage;
