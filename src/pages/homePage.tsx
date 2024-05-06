import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import splash from "../images/businessman.png"
import pie from "../images/piechart.png"
import './homePage.css';
import { GPTcontext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
//import OpenAI from "openai";


    //local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
    let keyData = "";
    const saveKeyData = "MYKEY";
    //const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect

    const HomePage = () => {

    const [key, setKey] = useState<string>(keyData); //for api key input
  
    //sets the local storage item to the api key the user inputed
    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));       
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
        //main(); //Calls the main function once an API key has been submitted (Commented out because the function is for testing purposes only)
    }

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    /*The code commented out below was used for our initial testing with the GPT model and the inputted API Key
    Keeping it commented out for now incase we run into issues in the future with GPT and want to use this to
    test where the issue is stemming from. Once everything works, can be deleted. */

    /*const openai = new OpenAI({
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
    }*/
    const {GPTresponse, setGPTresponse} = useContext(GPTcontext);
    console.log(GPTresponse);    

    return (
        <>
        <div className="splash-container">
            <img src={splash} alt="businessMountains" className="splashPage"></img>
            <div className="one">Struggling to find your way?</div>
            <div className="two">Looking for answers and coming up short?</div>
            <div className="three">Take the quiz that best suits your needs and worry no longer!</div>
            <Button>Find your quiz!</Button>
        </div>
        <div id="quiz-descs"></div>
        <div className="quiz-desc-container">
            <div className="quiz-desc">
                <a href="../BasicPage">
                    <h3>Basic Quiz</h3>
                    <p>Want to take a peek into your career’s future, but don’t have time to take the full career assessment? The basic career quiz is a smaller, faster alternative that gives similar results to the detailed assessment. With only 8 true or false questions, this quiz should only take 5 minutes of your time to show you your future career.</p>
                </a>
            </div>
            <div className="quiz-desc">
                <a href="../DetailedPage">
                    <h3>Detailed Quiz</h3>
                    <p>If you want to gain in-depth insight into your career path, this quiz is for you! Multiple-choice, personality-based questions will analyze your core values and identify your ideal career path, selecting from numerous high-profile industries.</p>
                </a>
            </div>
        </div>
        <div className="quiz-data-container">
            <div className="quiz-data-text">
                <p>Career quizzes are proven to help the masses achieve thier goals and secure professional success. Money can buy happiness, but only purpose can bring fulfillment.</p>
            </div>
            <div className="quiz-data-graph">
                <img src={pie} alt="graph"></img>
                <p>Satisfaction rates from other users!</p>
            </div>
        </div>
        <Link to="./ResultsPage">Temporary Results Link</Link>
        <Form>
                <Form.Label>API Key:</Form.Label>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                <br></br>
                <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
            </Form></>
    );
};

export const key = localStorage.getItem("MYKEY") || ""; //this is to get the api key from the local storage
export default HomePage;

