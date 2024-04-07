import React, { useState } from "react";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "./MC_MULTI_RESPONSE";

export function DisplayQuestion ({
    type,
    question,
    options,
    answers,
    setAnswers,
    submitting
}: {
    type: string;
    question: string;
    options: string[];
    answers: string[][];
    setAnswers: (answers: string[][]) => void;
    submitting: boolean;
}): JSX.Element {
    const [localAnswer, setLocal] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    if (!submitting && !submitted) {
        if (type === "MC_SINGLE_RESPONSE") {
            return(
                <MC_SINGLE_RESPONSE
                    question={question}
                    options={options}
                    answer={localAnswer}
                    setAnswer={setLocal}
                ></MC_SINGLE_RESPONSE>
            )
        } else if (type === "MC_MULTI_RESPONSE") {
            return (
                <MC_MULTI_RESPONSE
                    question={question}
                    options={options}
                    answers={localAnswer}
                    setAnswers={setLocal}
                ></MC_MULTI_RESPONSE>
            )
        }else if (!submitting){
            return(<h3>Question Not Found</h3>)
        }
    } else if (submitting && !submitted) {
        setAnswers([...answers, localAnswer]);
        setSubmitted(true);
    }
    return(submitted ? <h1>submitted</h1> : <h1>not submitted</h1>)
}