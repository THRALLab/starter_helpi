import React, { useEffect, useState } from "react";
import { Form, /*ProgressBar, Alert*/ } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import OpenAI from "openai";


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

	function getResponses(): string {
		//let answers = ["", "", "", "", "", "", "", ""];

		let description = "";

		if(response[0]){
			//answers[0] = "I prefer working in a group.";
			description += "I prefer working in a group.\n";
		}
		else{
			//answers[0] = "I prefer working on my own.";
			description += "I prefer working on my own.\n";
		}

		if(response[1]){
			//answers[1] = "I prefer having my schedule made for me.";
			description += "I prefer having my schedule made for me.\n";
		}
		else{
			//answers[1] = "I want to be able to work when I want.";
			description += "I want to be able to work when I want.\n";
		}

		if(response[2]){
			//answers[2] = "I like having detailed instructions when doing a task.";
			description += "I like having detailed instructions when doing a task.\n";
		}
		else{
			//answers[2] = "I prefer having creative freedom when doing a task.";
			description += "I prefer having creative freedom when doing a task.\n";
		}

		if(response[3]){
			//answers[3] = "I enjoy a job that challenges me.";
			description += "I enjoy a job that challenges me.\n";
		}
		else{
			//answers[3] = "I want a job that is easy.";
			description	+= "I want a job that is easy.\n";
		}

		if(response[4]){
			//answers[4] = "I enjoy working with my hands.";
			description += "I enjoy working with my hands.\n";
		}
		else{
			//answers[4] = "I don't like working with my hands.";
			description += "I don't like working with my hands.\n";
		}

		if(response[5]){
			//answers[5] = "I would work a job I dislike for the money.";
			description += "I would work a job I dislike for the money.\n";
		}
		else{
			//answers[5] = "I would only ever work a job I like.";
			description += "I would only ever work a job I like.\n";
		}

		if(response[6]){
			//answers[6] = "I want to make a difference in the world.";
			description	+= "I want to make a difference in the world.\n";
		}
		else{
			//answers[6] = "I just want a job.";
			description += "I just want a job.\n";
		}

		if(response[7]){
			//answers[7] = "I love to travel.";
			description += "I love to travel.\n";
		}
		else{
			//answers[7]= "I don't like to travel.";
			description += "I don't like to travel.\n";
		}

		//console.log(answers + '/n')
		console.log(description);

		return description;
	}



	const openai = new OpenAI({
        apiKey: key, //this is the api key that the user inputted
        dangerouslyAllowBrowser: true, //this is to allow the api key to be stored in the local storage
    });

	async function main() { //This function is to test a fake conversation witht the GPT-4 model
        console.log("API Key: " + key); //purely for testing purposes
        try{
            const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
                {
                "role": "system",
                "content": "You will tell me what career I should pursue based on my interests."
                },
                {
                "role": "user",
                "content": "I like math, computers, and logic."
                }
            ],
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1,
            });

            console.log(response.choices[0].message.content); //GPT Response to the user's input
        }
        catch(e){ //catches any errors that may occur with an invalid API key
            console.log(e);
        }  
    }

	function updateProgress(responseList:number[]): number {
		let completed: number = 0;
		for (const response of responseList){
			if(response === 1 || response === 0){
				completed +=1;
			}
		}
		return completed;
	}

    let answered = updateProgress(response);
    const [allow, setAllow] = useState<boolean>(false);
	const [/*alert*/, setAlert] = useState<boolean>(false);
	
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
				
					/>
			</span>
			<span className="QuestionNum">#2</span>
			<span className="checkbox-distance">
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
					label="I want to be able to work when I want."
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[1] === 0}

					/>
			</span>
			<span className="QuestionNum">#3</span>
			<span className="checkbox-distance" >
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
			</span>
			<span className="QuestionNum">#4</span>
			<span className="checkbox-distance" >
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
			</span>
		</div>
		<hr></hr>

		<div className="questions" style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "25px"}}>

			<span className="QuestionNum">#5</span>
				<span className="checkbox-distance" >
					<Form.Check 
						type="radio"
						id="q5-Option1"
						label="I enjoy working with my hands."
						name="question5"
						onChange={() => updateChoice(8)}
						checked={response[4] === 1}
						/>
					<Form.Check  /* Fix the radio buttons and include state*/
						type="radio"
						id="q5-Option2"
						label="I don't like working with my hands."
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[4] === 0}

					/>
				</span>
				

			<span className="QuestionNum">#6</span>
				<span className="checkbox-distance">
					<div>
						<Form.Check 
						type="radio"
						id="q6-Option1"
						label="I would work a job I dislike for the money."
						name="question6"
						onChange={() => updateChoice(10)}
						checked={response[5] === 1}

						/>
					<Form.Check 
						type="radio"
						id="q6-Option2"
						label="I would only ever work a job I like."
						name="question6"
						onChange={() => updateChoice(11)}
						checked={response[5] === 0}

						/>

					</div>
				</span>
			<span className="QuestionNum">#7</span>
				<span className="checkbox-distance" >
					<div>
					<Form.Check 
						type="radio"
						id="q7-Option1"
						label="I want to make a difference in the world."
						name="question7"
						onChange={() => updateChoice(12)}
						checked={response[6] === 1}
		
						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q7-Option2"
						label="I just want a job."
						name="question7"
						onChange={() => updateChoice(13)}
						checked={response[6] === 0}


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
						label="I love to travel."
						name="question8"
						onChange={() => updateChoice(14)}
						checked={response[7] === 1}


						>
					</Form.Check>
					<Form.Check 
						type="radio"
						id="q8-Option2"
						label="I don't like to travel."
						name="question8"
						onChange={() => updateChoice(15)}
						checked={response[7] === 0}
						
						>
					</Form.Check>
					</div>
				</span>
		</div>
		</>
		
	);
};
export default BasicPage;
