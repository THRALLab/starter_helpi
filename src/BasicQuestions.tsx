import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
    show: boolean;
  }

  const Questions: React.FC<Props> = ({ show }) => {
    const [answer1, setAnswer1] = useState<string>("");
    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer1(event.target.value);
    }
    const [answer2, setAnswer2] = useState<string>("");
    function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer2(event.target.value);
    }
    const [answer3, setAnswer3] = useState<string>("");
    function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer3(event.target.value);
    }
    const [answer4, setAnswer4] = useState<string>("");
    function updateAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer4(event.target.value);
    }
    const [answer5, setAnswer5] = useState<string>("");
    function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer5(event.target.value);
    }
    const [answer6, setAnswer6] = useState<string>("");
    function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer6(event.target.value);
    }
    const [answer7, setAnswer7] = useState<string>("");
    function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer7(event.target.value);
    }

    if (!show) return null;
    
    return(
        <div>
            <p>Do you enjoy working with your hands?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer1}
                    label="Yes"
                    value="yes"
                    checked={answer1 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer1}
                    label="No"
                    value="no"
                    checked={answer1 === "no"}
                />
            </div>
            <p>Are you interested in technology?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer2}
                    label="Yes"
                    value="yes"
                    checked={answer2 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer2}
                    label="No"
                    value="no"
                    checked={answer2 === "no"}
                />
            </div>
            <p>Do you like solving puzzles or problems?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer3}
                    label="Yes"
                    value="yes"
                    checked={answer3 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer3}
                    label="Sometimes"
                    value="sometimes"
                    checked={answer3 === "sometimes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer3}
                    label="No"
                    value="no"
                    checked={answer3 === "no"}
                />
            </div>
            <p>Do you prefer working alone or in a team?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer4}
                    label="Alone"
                    value="alone"
                    checked={answer4 === "alone"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer4}
                    label="With Others"
                    value="with others"
                    checked={answer4 === "with others"}
                />
            </div>
            <p>Do you enjoy being creative?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer5}
                    label="Yes"
                    value="yes"
                    checked={answer5 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer5}
                    label="No"
                    value="no"
                    checked={answer5 === "no"}
                />
            </div>
            <p>Are you good at analyzing data or information?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer6}
                    label="Yes"
                    value="yes"
                    checked={answer6 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer6}
                    label="No"
                    value="no"
                    checked={answer6 === "no"}
                />
            </div>
            <p>Do you have clear goals for your future career?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer7}
                    label="Yes"
                    value="yes"
                    checked={answer7 === "yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer7}
                    label="No"
                    value="no"
                    checked={answer7 === "no"}
                />
            </div>
        </div>
    );
}

export default Questions