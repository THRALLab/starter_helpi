import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert, Stack, Button } from "react-bootstrap";
import OpenAI from "openai";
import { key } from "./homePage"
import "./basicPage.css"

const BasicPage = () => {
	const [response, setResponse] = useState<(number)[]>
	([-1, -1, -1, -1, -1, -1, -1, -1]) //initializes the responses to -1 so no radio button is checked
	function updateChoice(index:number){
		setResponse(prevResponse => {
			const updatedResponse = [...prevResponse];
			if(index % 2 === 0){
				updatedResponse[index/2] = 1; //if the index is even, the first radio button is selected
			}
			else{
				updatedResponse[Math.floor(index/2)] = 0; // the second radio button is selected
			}
			return updatedResponse;
		  });
	}

	function getResponses(): string { //returns a description of the user's responses to the questions
		//let answers = ["", "", "", "", "", "", "", ""];

		/*Originally stored each answer to a question as an array in a string.
		However, there is no reason to access only one specific answer so instead
		switch to one long string that has all the answers on a new line.*/

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

	function sendResponse(): void { //Uses the answers from the quiz and sends it all to the GPT-4 model
		const openai = new OpenAI({
			apiKey: key.replaceAll('"',"") || "", //The key has quotes for some reason so this removes them
			dangerouslyAllowBrowser: true, //this is to allow the api key to be stored in the local storage
		});
		  
		async function runGPT() { //Creates conversation with the GPT-4 model
			console.log("API Key: " + key); //for testing purposes
			try{
				const response = await openai.chat.completions.create({
				model: "gpt-4-turbo",
				messages: [
					{
					"role": "system",
					"content": "You are a helpful assistant that will generate a potential career path for the user based on their preferences. You will also generate three other career paths the user may like. Please complete this in this format, with each field contained in quotes and separated by commas: [ Main Career Path, very Detailed reasoning for Main Career Path with at least 4 sentences, Other Career Path 1, Reasoning for Other Career Path 1, Other Career Path 2, Reasoning for Other Career Path 2, Other Career Path 3, Reasoning for Other Career Path 3 ]"
					//What we want GPT to do
					},
					{
					"role": "user",
					"content": getResponses(), //calls the function that gets the description
					}
				],
				temperature: 0.8,
				max_tokens: 64, //should be 512
				top_p: 1,
				});
	
				console.log(response.choices[0].message.content); //GPT Response to the user's input
			}
			catch(e){ //catches any errors that may occur with an invalid API key
				//console.log(e);
				window.alert("Invalid API Key, please enter a valid key at the bottom of the home page.");
				window.location.href = "./starter_helpi/"; 
			}  
		}

		runGPT(); //run the function at the end
	
	}


	  const answered = response.reduce((currentTotal: number, num: number) => num !== -1 ?  currentTotal+=1 : currentTotal+=0, 0);

  function doReset(): void{ //clears all the choices by setting all elements in array to -1
	const resetResponse: number[] = Array(response.length).fill(-1);
	setResponse(resetResponse)
  }
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
	<body className="page-color">
		<h1 className="basic-title">
			Basic Quiz
		</h1>
		<div className="basic-info">
		Want to take a peek into your career’s future, but don’t have time to take the full career assessment? 
		The basic career quiz is a smaller, faster alternative that gives similar results to the detailed assessment.
		With only 8 parts, choose the statement that best suites you, this quiz should only take 5 minutes of your time to show you the future of your career.
		</div>
		<hr style={{marginTop:"10px", opacity:"1"}}></hr>
		
		<div style={{textAlign: "center"}}>

			<Button size="lg" disabled={!allow} onClick={sendResponse} style={{marginRight:"20px"}}>Get Answer!</Button>  <Button size="lg" onClick={doReset} > Clear All</Button>
		</div>
		<div style={{display: "flex", justifyContent:"center"}}>
		  <Alert show={alert} variant="success" onClose={() => setAlert(false)}dismissible style={{ marginTop:"10px"}}>
		    <p>You've completed all the questions, you can now click the answer button to get your results!</p>
		   </Alert>
		</div>
		<div className="question-container">
		<span className="QuestionNum">#1</span> 
		<span className="radio-container">
			<Stack gap={3} style={{marginTop: "30px"}}>
			<Form.Check 
					type="radio"
					id="q1-Option1"
					label="I prefer working in a group."
					name="question1"
					onChange={() => updateChoice(0)}
					checked={response[0] === 1 }/>
				<Form.Check
					type="radio"
					id="q-1Option2"
					label="I prefer working on my own."
					name="question1"
					onChange={() => updateChoice(1)}
					checked={response[0] === 0}/>
			</Stack>
		</span>
			<span className="QuestionNum">#2</span> 
			<span className="radio-container">
			<Stack gap={3} style={{marginTop: "30px"}}> 
			<Form.Check 
					type="radio"
					id="q2-Option1"
					label="I prefer having my schedule made for me."
					name="question2"
					onChange={() => updateChoice(2)}
					checked={response[1] === 1}/>
				<Form.Check 
					type="radio"
					id="q2-Option2"
					label="I want to be able to work whenever I want."
					name="question2"
					onChange={() => updateChoice(3)}
					checked={response[1] === 0}/>
			</Stack>
			</span>
			<span className="QuestionNum">#3</span> 
			<span className="radio-container">
				<Stack gap={3} style={{marginTop: "30px"}}> 
				<Form.Check 
					type="radio"
					id="q3-Option1"
					label="I like having detailed instructions when doing a task."
					name="question3"
					onChange={() => updateChoice(4)}
					checked={response[2] === 1}/>
				<Form.Check 
					type="radio"
					id="q3-Option2"
					label="I prefer having creative freedom when doing a task."
					name="question3"
					onChange={() => updateChoice(5)}
					checked={response[2] === 0}/>
				</Stack>
			</span>
			<span className="QuestionNum">#4</span> 
			<span className="radio-container">
				<Stack gap={3} style={{marginTop: "20px"}}> 
				<Form.Check 
					type="radio"
					id="q4-Option1"
					label="I enjoy a job that challenges me."
					name="question4"
					onChange={() => updateChoice(6)}
					checked={response[3] === 1}/>
				<Form.Check 
					type="radio"
					id="q4-Option2"
					label="I want a job that is easy."
					name="question4"
					onChange={() => updateChoice(7)}
					checked={response[3] === 0}/>
				</Stack>
			</span>	
			</div>
		<hr style={{marginTop:"78px", marginBottom:"80px", opacity:1}}></hr>
		<div className="question-container">
			<span className="QuestionNum">#5</span> <span>
			<Stack className="last4" gap={3} style={{marginTop: "30px"}}>
			<Form.Check 
						type="radio"
						id="q5-Option1"
						label="I enjoy working with my hands."
						name="question5"
						onChange={() => updateChoice(8)}
						checked={response[4] === 1}/>
					<Form.Check  
						type="radio"
						id="q5-Option2"
						label="I don't like working with my hands."
						name="question5"
						onChange={() => updateChoice(9)}
						checked={response[4] === 0}/>
			</Stack>
			</span>				
			<span className="QuestionNum">#6</span> <span>
			<Stack  className="last4" gap={3} style={{marginTop: "30px"}}> 
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
						checked={response[5] === 0}/>
			</Stack>
			</span>		
			<span className="QuestionNum">#7</span> <span>
			<Stack className="last4" gap={3} style={{marginTop: "30px"}}> 
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
						checked={response[6] === 0}/>
			</Stack>
			</span>	
			<span className="QuestionNum">#8</span> <span>
			<Stack className="last4" gap={3} style={{marginTop: "30px"}}> 
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
						checked={response[7] === 0}/>
			</Stack>
			</span>		
		</div>
		<div style={{marginLeft:"200px", marginRight:"200px", marginBottom:"10px"}}>
		<ProgressBar variant="success" now={answered} animated max={8} />
		</div>
		</body>
		</>
	);
};
export default BasicPage;
