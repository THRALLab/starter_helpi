import "../styles/BasicQuestions.css"; // Import CSS file
import "../styles/DetailedQuestions.css"; // Import CSS file
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import CustomFooter from "../components/CustomFooter";

function DetailedQuestions() {
  const followUpQuestions = [
    {
      question:
        "What specific skills or experiences do you have that could contribute to [Industry from previous question]?",
      choices: [],
    },
    {
      question:
        "How do you see yourself making an impact in [Industry from previous question]? Can you provide an example of a problem or challenge you'd like to address within this industry?",
      choices: [],
    },
    {
      question:
        "In your ideal [Work Environment from previous question], what types of tasks or projects would you be most excited to work on?",
      choices: [],
    },
    {
      question:
        "Can you share a personal or professional experience that highlights your strengths in [Aspect of Work from previous question]?",
      choices: [],
    },
    {
      question:
        "Considering your prioritized aspect in a career ([Prioritized Aspect in Career from previous question]), what specific goals do you hope to achieve in your professional journey?",
      choices: [],
    },
    {
      question:
        "For someone comfortable with [Level of Responsibility from previous question], what types of challenges or opportunities do you seek in your next career move?",
      choices: [],
    },
    {
      question:
        "How do you envision your career progressing in the next 5-10 years, given your interests and aspirations in [Industry from previous question]?",
      choices: [],
    },
  ];

  // Callback function to handle completion
  const handleCompletion = () => {
    window.location.href = "/#/CareerReport";
  };

  return (
    <div className="detailed-q-page">
      <NavigationBar></NavigationBar>
      <h1 style={{ fontSize: "3rem" }}>Detailed Questions Page</h1>

      <QuestionCard
        questions={followUpQuestions}
        onCompletion={handleCompletion}
      />

      <CustomFooter />
    </div>
  );
}

/*
const [key, setKey] = useState<string>("");
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0); // Define answeredQuestions state

const handleSubmit = () => {
    localStorage.setItem("MYKEY", JSON.stringify(key));
    window.location.reload();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const questionNumber = parseInt(id.split("-")[1]);
    const newValue = event.target.value.trim(); // Get the trimmed value of the input

    // Check if the input field was previously empty and is now filled out
    if (newValue && !prevAnswers[questionNumber - 1]) {
      setAnsweredQuestions((prevCount) => prevCount + 1); // Increment answeredQuestions
    }
    // Check if the input field was previously filled out and is now emptied
    else if (!newValue && prevAnswers[questionNumber - 1]) {
      setAnsweredQuestions((prevCount) => prevCount - 1); // Decrement answeredQuestions
    }

    // Update the previous answers array
    const updatedPrevAnswers = [...prevAnswers];
    updatedPrevAnswers[questionNumber - 1] = newValue;
    setPrevAnswers(updatedPrevAnswers);

    // Update the state of the input field
    setKey(newValue);
  };*/

export default DetailedQuestions;
