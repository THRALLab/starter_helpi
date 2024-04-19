import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";


const BasicPage = () => {
	const [response, setResponse] = useState<(boolean)[]>
	([false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false])
	function updateChoice(index:number){
		setResponse(prevResponse => {
			const updatedResponse = [...prevResponse];
			if(index % 2 === 0){
				updatedResponse[index + 1] = false;
			}
			else{
				updatedResponse[index - 1] = false;
			}

			updatedResponse[index] = true;
			return updatedResponse;
		  });
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
		<div style={{textAlign:"center"}}>
			<Button size="lg" disabled={!allow} >Answer</Button>
			<ProgressBar variant="success" now={answered} animated max={8} style={{marginLeft:"100px", marginRight:"100px", marginTop:"25px"}}/>
			<Alert show={alert} variant="success" onClose={() => setAlert(false)}dismissible style={{marginLeft:"350px", marginRight:"350px"}}>
				<p>You've completed all the questions, you can now click the answer button to get your results!</p>
			</Alert>
		</div>
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
					checked={response[0] ===true }
		
					/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="On my own."
					name="question1"
					onChange={() => updateChoice(1)}
					checked={response[1] === true}
				
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
					checked={response[2] === true}

					/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="I want to clock in when I want."
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[3] === true}

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
					checked={response[4] === true}

					/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="I prefer creative freedom"
					name="question3"
					onChange={() => updateChoice(5)}
					checked={response[5] === true}


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
					checked={response[6] === true}


					/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="No, I want a job that is easy."
					name="question4"
					onChange={() => updateChoice(7)}
					checked={response[7] === true}


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
						checked={response[8] === true}
						/>
					<Form.Check  /* Fix the radio buttons and include state*/
						type="radio"
						id="q5-Option2"
						label="No, I don't."
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[9] === true}

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
						checked={response[10] === true}

						/>
					<Form.Check 
						type="radio"
						id="q6-Option2"
						label="I'd only work a job I like."
						name="question6"
						onChange={() => updateChoice(11)}
						checked={response[11] === true}

						/>

					</div>
				</span>
			<span className="QuestionNum">#7</span>
				<span className="checkbox-distance" >
					<div>
					<Form.Check 
						type="radio"
						id="q7-Option1"
						label="Yes, I want to make a difference."
						name="question7"
						onChange={() => updateChoice(12)}
						checked={response[12] === true}
		
						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q7-Option2"
						label="No, I just want a job."
						name="question7"
						onChange={() => updateChoice(13)}
						checked={response[13] === true}


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
						checked={response[14] === true}


						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q8-Option2"
						label="holder"
						name="question8"
						onChange={() => updateChoice(15)}
						checked={response[15] === true}
						
						>
					</Form.Check>
					</div>
				</span>
		</div>
		</>
		
	);
};
export default BasicPage;
