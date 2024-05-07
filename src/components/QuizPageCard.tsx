import React from "react";
import "../styles/QuizPageCard.css";

// The API object needed to do API calls which requires a working API key
//export let openai: OpenAI;

function QuizPageCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}): JSX.Element {

  // Generates the AI and sends you to the quiz.
  function handleClick() {
    //openai = new OpenAI({apiKey: localStorage.getItem(saveKeyData)?.replace(/"/g, '') || undefined, dangerouslyAllowBrowser: true});
    window.location.href = link;
  }

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="desc">{description}</p>
      <button className="link-btn" type="button" onClick={handleClick}>
        <strong>Take the Quiz</strong>
      </button>
    </div>
  );
}

export default QuizPageCard;
