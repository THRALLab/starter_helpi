import React, { useEffect, useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
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

    useEffect(() => {
        if (answered === 8) {
            setAllow(true);
        } else {
            setAllow(false);
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
			<Button disabled={!allow} >Answer</Button>
			<ProgressBar variant="success" now={answered} animated max={8} style={{marginLeft:"100px", marginRight:"100px", marginTop:"25px"}}/>
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
					onChange={() => updateChoice(0)}
					checked={response[0] ===true }
		
					/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="thing"
					name="question1"
					onChange={() => updateChoice(1)}
					checked={response[1] === true}
				
					/>
			</span>
			<span className="QuestionNum">#2</span>
			<span className="checkbox-distance">
				<Form.Check 
					type="radio"
					id="q2-Option1"
					label="holder"
					name="question2"
					onChange={() => updateChoice(2)}
					checked={response[2] === true}

					/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="holder"
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[3] === true}

					/>
			</span>
			<span className="QuestionNum">#3</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="q3-Option1"
					label="holder"
					name="question3"
					onChange={() => updateChoice(4)}
					checked={response[4] === true}

					/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="holder"
					name="question3"
					onChange={() => updateChoice(5)}
					checked={response[5] === true}


					/>
			</span>
			<span className="QuestionNum">#4</span>
			<span className="checkbox-distance" >
				<Form.Check 
					type="radio"
					id="q4-Option1"
					label="holder"
					name="question4"
					onChange={() => updateChoice(6)}
					checked={response[6] === true}


					/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="holder"
					name="question4"
					onChange={() => updateChoice(7)}
					checked={response[7] === true}


					/>
			</span>
		</div>
		<hr></hr>
		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "100px"}}>
			<span className="QuestionNum">#5</span>
				<span className="checkbox-distance" >
					
					<Form.Check 
						type="radio"
						id="q5-Option1"
						label="holder"
						name="question5"
						onChange={() => updateChoice(8)}
						checked={response[8] === true}
						/>
					<Form.Check  /* Fix the radio buttons and include state*/
						type="radio"
						id="q5-Option2"
						label="holder"
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[9] === true}

					/>
				</span>
				

			<span className="QuestionNum">#6</span>
				<span className="checkbox-distance">
					<div>
						<Form.Check 
						type="radio"
						id="q6-Option1"
						label="holder"
						name="question6"
						onChange={() => updateChoice(10)}
						checked={response[10] === true}

						/>
					<Form.Check 
						type="radio"
						id="q6-Option2"
						label="holder"
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
						label="holder"
						name="question7"
						onChange={() => updateChoice(12)}
						checked={response[12] === true}
		
						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q7-Option2"
						label="holder"
						name="question7"
						onChange={() => updateChoice(13)}
						checked={response[13] === true}


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
