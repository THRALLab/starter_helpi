import React, { useState } from "react";
import DetailedReport from './ChatGPTDetailed';
import DetQuestions from './DetailedQuestions';

function DetailedQuestionsPage() {
    // answers useState generated by GPT-4
    const [completedDetailedQuestions, setCompletedDetailedQuestions] = useState(false);
    const [answers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: ""
    });
    
    function updateCompletedDetailedQuestions () {
        if(answers.answer1 !== "" && answers.answer2 !== "" && answers.answer3 !== "" && answers.answer4 !== "" && answers.answer5 !== "" 
        && answers.answer6 !== "" && answers.answer7 !== "") {
        }
    }

    function handleAnswerChange (answer: string, value: string) {
        if(answer === "answer1") {
            answers.answer1 = value;
        } else if (answer === "answer2") {
            answers.answer2 = value;
        } else if (answer === "answer3") {
            answers.answer3 = value;
        } else if (answer === "answer4") {
            answers.answer4 = value;
        } else if (answer === "answer5") {
            answers.answer5 = value;
        } else if (answer === "answer6") {
            answers.answer6 = value;
        } else if (answer === "answer7") {
            answers.answer7 = value;
        }
        updateCompletedDetailedQuestions();
    };
    
    // GPT-4 used in the creation of parameters for Questions and BasicReport
    return (
        <div>
            {!completedDetailedQuestions ? (
                    <div>
                       <DetQuestions onChange={handleAnswerChange} onSubmit={() => setCompletedDetailedQuestions(true)} />
                    </div>
                ) : (
                    <div>
                        <DetailedReport answers={answers}/>
                    </div>
                )
            }
            <div className={`box ${completedDetailedQuestions ? 'hidden' : ''}`}>
            </div>
        </div>
    )
}
export default DetailedQuestionsPage