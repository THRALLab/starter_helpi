import React, { useState } from "react";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";

export function Basic_Quiz(): JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    
    const question1 = "How old are you?"
    const options1 = ["1","2","3","4","5"]
    return (
        <div>
            <MC_SINGLE_RESPONSE
                question={question1}
                choices={options1}
                answer={firstAnswer}
                setAnswer={setFirstAnswer}
            ></MC_SINGLE_RESPONSE>
        </div>
    )
}