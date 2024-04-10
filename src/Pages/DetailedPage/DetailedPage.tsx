import React, { useState } from "react";
import { QuestionAnswer } from "./Components/QuestionAnswerComponent";
import "./DetailedPage.css";

export function DetailedPage(): React.JSX.Element {

  return (
    <div className="detailed-quiz">
      <div className="detailed-quiz--content">
        <QuestionAnswer></QuestionAnswer>

      </div>
    </div>
  );
}
