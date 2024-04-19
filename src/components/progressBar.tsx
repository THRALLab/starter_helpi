import React, { useState } from "react";
import { Form } from "react-bootstrap";


export function ProgressBar({numAnswered}: {numAnswered:number}): JSX.Element{
    const [progress, setProgress] = useState<number>(numAnswered);

    return(
        <div>
            <center>
            <progress value={progress} max={100} />
            <span>{progress}%</span>
            </center>
        </div>
    );
}