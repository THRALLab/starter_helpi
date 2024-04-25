import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";

// Define an array of question objects
const questions = [
  {
    questionType: "Multiple Choice",
    question:
      "Which of the following industries interests you the most: technology, healthcare, finance, or creative arts?",
    choices: [
      "Technology",
      "Healthcare",
      "Finance",
      "Creative arts",
      "Other (please specify)",
    ],
    otherOptionIndex: 4,
  },
  {
    questionType: "Multiple Choice",
    question: "Do you prefer working independently or as part of a team?",
    choices: [
      "Independently",
      "Part of a team",
      "Both, depending on the situation",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Are you more interested in technical roles, creative roles, or leadership positions?",
    choices: [
      "Technical roles",
      "Creative roles",
      "Leadership positions",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Would you rather work in a fast-paced, dynamic environment or a stable, predictable one?",
    choices: [
      "Fast-paced, dynamic environment",
      "Stable, predictable environment",
      "Both, depending on the situation",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Do you enjoy solving complex problems, working with people, or managing projects?",
    choices: [
      "Solving complex problems",
      "Working with people",
      "Managing projects",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Which of the following work settings appeals to you: office, remote, or hybrid?",
    choices: [
      "Office",
      "Remote",
      "Hybrid (combination of office and remote)",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Are you interested in pursuing further education or training in your career field?",
    choices: [
      "Yes, definitely",
      "Maybe, if it's necessary for my career goals",
      "No, I prefer on-the-job learning and experience",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "Do you value job security and stability over potential for growth and advancement?",
    choices: [
      "Job security and stability",
      "Potential for growth and advancement",
      "Both are equally important",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
  {
    questionType: "Multiple Choice",
    question:
      "What level of responsibility are you comfortable with in a professional role?",
    choices: [
      "Entry-level tasks and responsibilities",
      "Mid-level tasks and responsibilities",
      "Senior-level tasks",
      "Other (please specify)",
    ],
    otherOptionIndex: 3,
  },
];


export function BasicQuestions() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  return (
    <div className="basic-questions-page">
      <NavigationBar></NavigationBar>
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      <QuestionCard questions={questions}></QuestionCard>
    </div>
  );
}

export default BasicQuestions;
