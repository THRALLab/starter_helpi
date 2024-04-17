import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import splash from "../images/job_search.jpg"
import './homePage.css';


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
    }

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    return (
        <>
        <img src={splash} alt="infograph" className="splashPage"></img>
        <div className="quiz-desc-container">
            <div className="quiz-desc">
                <a href="/BasicPage">
                    <h3>Basic Quiz</h3>
                    <p>Want to take a peek into your career’s future, but don’t have time to take the full career assessment? The basic career quiz is a smaller, faster alternative that gives similar results to the detailed assessment. With only 8 true or false questions, this quiz should only take 5 minutes of your time to show you your future career.</p>
                </a>
            </div>
            <div className="quiz-desc">
                <a href="/DetailedPage">
                    <h3>Detailed Quiz</h3>
                    <p></p>
                </a>
            </div>
        </div>
        <Form>
                <Form.Label>API Key:</Form.Label>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                <br></br>
                <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
            </Form></>
    );
};

export default HomePage;

