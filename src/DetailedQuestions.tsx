import React, { useState } from "react";
import { Form } from "react-bootstrap";

function DetQuestions () {
    const [danswer1, setDAnswer1] = useState<string>("");
    function updateDAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer1(event.target.value);
    }
    const [danswer2, setDAnswer2] = useState<string>("");
    function updateDAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer2(event.target.value);
    }
    const [danswer3, setDAnswer3] = useState<string>("");
    function updateDAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer3(event.target.value);
    }
    const [danswer4, setDAnswer4] = useState<string>("");
    function updateDAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer4(event.target.value);
    }
    const [danswer5, setDAnswer5] = useState<string>("");
    function updateDAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer5(event.target.value);
    }
    const [danswer6, setDAnswer6] = useState<string>("");
    function updateDAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer6(event.target.value);
    }
    const [danswer7, setDAnswer7] = useState<string>("");
    function updateDAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer7(event.target.value);
    }
    return (
        <div>
            <p>
                On a scale of one to five, how much do you like programming?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="1"
                        value="1"
                        checked={danswer1 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="2"
                        value="2"
                        checked={danswer1 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="3"
                        value="3"
                        checked={danswer1 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="4"
                        value="4"
                        checked={danswer1 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="5"
                        value="5"
                        checked={danswer1 === "5"}
                    />
            </div>
            <p>
                On a scale of strongly agree to strongly disagree, are you a leader?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Strongly Agree"
                        value="1"
                        checked={danswer2 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Agree"
                        value="2"
                        checked={danswer2 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Neutral"
                        value="3"
                        checked={danswer2 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Disagree"
                        value="4"
                        checked={danswer2 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Strongly Disagree"
                        value="5"
                        checked={danswer2 === "5"}
                    />
            </div>
            <p>
                Respond with how correct the following statement is: reality is objective.
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="100% correct"
                        value="1"
                        checked={danswer3 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="75% correct"
                        value="2"
                        checked={danswer3 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="50% correct"
                        value="3"
                        checked={danswer3 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="25% correct"
                        value="4"
                        checked={danswer3 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="0% correct"
                        value="5"
                        checked={danswer3 === "5"}
                    />
            </div>
            <p>
                Respond with how often you do the following: think about the future.
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="All the time"
                        value="1"
                        checked={danswer4 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="A lot of the time"
                        value="2"
                        checked={danswer4 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="Sometimes"
                        value="3"
                        checked={danswer4 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="Not very often"
                        value="4"
                        checked={danswer4 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="Never"
                        value="5"
                        checked={danswer4 === "5"}
                    />
            </div>
            <p>
                Can you see yourself in this career: a fast-paced work environment?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer5}
                        label="Yes"
                        value="1"
                        checked={danswer5 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer5}
                        label="Maybe"
                        value="2"
                        checked={danswer5 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer5}
                        label="No"
                        value="3"
                        checked={danswer5 === "3"}
                    />
            </div>
            <p>
                Does the following sound like you: I want a good-work life balance?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer6}
                        label="That sounds like me"
                        value="1"
                        checked={danswer6 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer6}
                        label="That kind of sounds like me"
                        value="2"
                        checked={danswer6 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer6}
                        label="No, that does not sound like me"
                        value="3"
                        checked={danswer6 === "3"}
                    />
            </div>
            <p>
                Which one of the following careers sounds the most appealing?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Carpenter"
                        value="1"
                        checked={danswer7 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Tailor"
                        value="2"
                        checked={danswer7 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Construction Worker"
                        value="3"
                        checked={danswer7 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Jeweler"
                        value="4"
                        checked={danswer7 === "4"}
                    />
            </div>
        </div>
    );
}

export default DetQuestions