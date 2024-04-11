import "./pages.css"
import { AIKey } from "../interfaces/AIKeyInterface";

export function DetailedQuestions(key: AIKey): JSX.Element {
    return <div className="Pages">
        <h3 className="Page-title">Detailed Questions</h3>
        <div className="Question-instructions">
            The description for how to answer the questions will go here.
        </div>
    </div>;
}