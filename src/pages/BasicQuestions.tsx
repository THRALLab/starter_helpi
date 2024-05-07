import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import CustomFooter from "../components/CustomFooter";

// Define an array of question objects


const questions = [
  {
    question: "Which industry interests you the most?",
    choices: [
      "Technology",
      "Healthcare",
      "Finance",
      "Creative Arts",
      "Education",
      "Marketing",
      "Hospitality",
      "Manufacturing",
    ],
  },
  {
    question: "Do you prefer working independently or as part of a team?",
    choices: ["Independently", "Part of a team", "Both equally"],
  },
  {
    question: "Which type of role are you most interested in?",
    choices: ["Technical", "Creative", "Leadership"],
  },
  {
    question: "What work environment do you prefer?",
    choices: ["Fast-paced and dynamic", "Stable and predictable"],
  },
  {
    question: "What aspect of work do you enjoy the most?",
    choices: [
      "Problem-solving",
      "Collaborating with others",
      "Managing projects",
    ],
  },
  {
    question: "Which work setting appeals to you?",
    choices: ["Office", "Remote", "Hybrid"],
  },
  {
    question: "Are you interested in further education or training?",
    choices: ["Yes", "Maybe", "No"],
  },
  {
    question: "What do you prioritize in a career?",
    choices: ["Job security", "Potential for growth", "Both equally"],
  },
  {
    question: "What level of responsibility are you comfortable with?",
    choices: ["Entry-level", "Mid-level", "Senior-level"],
  },
];

export function BasicQuestions() {
  // Callback function to handle completion
  const handleCompletion = () => {
    //window.location.href = "/#/CareerReport";
  };

  return (
    <div className="basic-questions-page">
      <NavigationBar />
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      {/* Render QuestionCard only if not completed */}
      <QuestionCard questions={questions} onCompletion={handleCompletion} />
      <CustomFooter />
    </div>
  );
}

export default BasicQuestions;