import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
//import { Button } from "react-bootstrap";

export function DetailedQuestionPage(): JSX.Element {
    const [answer1, setAnswer1] = useState<string>("");
    const [answer2, setAnswer2] = useState<string>("");
    const [answer3, setAnswer3] = useState<string>("");
    const [answer4, setAnswer4] = useState<string>("");
    const [answer5, setAnswer5] = useState<string>("");
    const [answer6, setAnswer6] = useState<string>("");
    const [answer7, setAnswer7] = useState<string>("");
    const [answer8, setAnswer8] = useState<string>("");

    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {setAnswer1(event.target.value);}

    function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {setAnswer2(event.target.value);}

    function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {setAnswer3(event.target.value);}

    function updateAnswer4(event: React.ChangeEvent<HTMLInputElement>) {setAnswer4(event.target.value);}
    
    function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {setAnswer5(event.target.value);}

    function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {setAnswer6(event.target.value);}
    
    function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {setAnswer7(event.target.value);}
    
    function updateAnswer8(event: React.ChangeEvent<HTMLInputElement>) {setAnswer8(event.target.value);}
    
    return (
        <div>
            <h2>Detailed Career Assessment</h2>
            <hr></hr>
            <p>The Career Helpi's Detailed Career Assessment allows users to fill out 
                a more personal quiz that reflects their specific interest and goals. 
                Here, users' results will be more personalized to who you are. Providing 
                extra detail allows the Career Helpi to better match a potential career.</p>
            <hr></hr>
            <h4>What are some skills you have or are planning to learn that will help you would like to apply to your career? (ex. Writing, Coding, Public Speaking, Foreign Languages, etc)</h4>
                <FormGroup>
                    <FormLabel>Answer:</FormLabel>
                    <div></div>
                    <FormControl
                        value={answer1}
                        onChange={updateAnswer1}
                    ></FormControl>
                </FormGroup>
            <hr></hr>
            <h4>What do you want your work environment to look like?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer2}
                    onChange={updateAnswer2}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>How much collaboration do you want in your job?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer3}
                    onChange={updateAnswer3}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>Do you have any passions or interests that you would like to incorporate into your career?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer4}
                    onChange={updateAnswer4}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>What type of people do you see yourself working with?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer5}
                    onChange={updateAnswer5}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>Do you enjoy work that is Structured or open-ended and flexible?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer6}
                    onChange={updateAnswer6}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>What are some of your long term career goals?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer7}
                    onChange={updateAnswer7}
                ></FormControl>
            </FormGroup>
            <hr></hr>
            <h4>What are some jobs/careers that you are not interested in?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    value={answer8}
                    onChange={updateAnswer8}
                ></FormControl>
            </FormGroup>
        </div>
    );
}