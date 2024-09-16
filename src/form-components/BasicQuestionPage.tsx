import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestionPage(): JSX.Element {
   
 // This is the State (Model)
 const [/*basicQuestion*/, setBasicQuestion] = useState<string>("Default");

 // This is the Control
 function updateBasicQuestion(event: React.ChangeEvent<HTMLInputElement>) {
     setBasicQuestion(event.target.value);
 }

const [emotions, setEmotions] = useState<string[]>(["happy", "sad"]);

// This is the Control
function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {
const emotion = event.target.value;
// Check if the emotion is already present
if (emotions.includes(emotion)) {
 // Remove the given value
    setEmotions(emotions.filter((e) => e !== emotion));
    } 
    else {
     // Append the given value
        setEmotions([...emotions, emotion]);
        }
     }     
return (
            <div>
            <h1>Career Quiz Basic Questions</h1>
            <h3>In order for us to estimate your personal Interests and Usual Style, you will first need to answer a series of questions. Read each pair of phrases below and decide which one of the two most describes you, then select the radio button next to that phrase. </h3>    
            <p>This is just a radio type question </p>
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <p>This is just a radio type question </p>
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <p>This is just a radio type question </p>
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <p>This is just a radio type question </p>
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />
            <Form.Check
                type="radio"
                name="Career-Question"
                onChange={updateBasicQuestion}
                id="Career-Question"
                label="Default"
                value="Default"
            />

            
            <p>Multi-Choice Question</p>
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-sad"
                label="Sad"
                name="emotions"
                value="sad"
                checked={emotions.includes("sad")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={emotions.includes("angry")}
                onChange={updateEmotion}
            />

<p>Multi-Choice Question</p>
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-sad"
                label="Sad"
                name="emotions"
                value="sad"
                checked={emotions.includes("sad")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={emotions.includes("angry")}
                onChange={updateEmotion}
            />

<p>Multi-Choice Question</p>
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-sad"
                label="Sad"
                name="emotions"
                value="sad"
                checked={emotions.includes("sad")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={emotions.includes("angry")}
                onChange={updateEmotion}
            />

<p>Multi-Choice Question</p>
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-sad"
                label="Sad"
                name="emotions"
                value="sad"
                checked={emotions.includes("sad")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={emotions.includes("angry")}
                onChange={updateEmotion}
            />

<p>Multi-Choice Question</p>
            <Form.Check
                type="checkbox"
                id="emotion-check-happy"
                label="Happy"
                name="emotions"
                value="happy"
                checked={emotions.includes("happy")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-sad"
                label="Sad"
                name="emotions"
                value="sad"
                checked={emotions.includes("sad")}
                onChange={updateEmotion}
            />
            <Form.Check
                type="checkbox"
                id="emotion-check-angry"
                label="Angry"
                name="emotions"
                value="angry"
                checked={emotions.includes("angry")}
                onChange={updateEmotion}
            />


        </div>
        );
    }
    

