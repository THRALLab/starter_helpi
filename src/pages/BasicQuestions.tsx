import React, { useState } from "react";
import ProgressBar from "../components/progress-bar/progressBar"

interface BasicProp {
    handlePage: (page: string) => void;
}


const BasicQuestions: React.FC<BasicProp> = () => {
    // Set up state to manage form inputs and current page

    const handlePage = (page: string) => {
        // Implement navigation logic based on page (e.g., using React Router or state variables)
        if (page === "results") {
            // Handle navigation to results page
        }
    };


    const [responses, setResponses] = useState({
      question1: "",
      question2: "",
      question3: "",
    });

    
    const [progress, setProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    //progress bar handling
    const incrementProgress = () => {
        setProgress((prev) => (prev < 100 ? prev + 20: prev));
    }
    const questions = [
        [ // Page 1 Questions
            { question: "I like working in a team", options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }, // Replace [...] with your options array
            { question: "I prefer working alone", options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }, // Replace [...] with your options array
        ] ,
        [ // Page 2 Questions (add more pages as needed)
            { question: "blah blah blah", options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
            { question: "...", options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
    ]
    ];

    
  
    // Handle radio button change
    function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setResponses((prevResponses) => ({
        ...prevResponses,
        [name]: value,
      }));
    };


    const handleNext = () => {
        // Check if there are more pages
        if (currentPage < questions.length - 1) {
          setCurrentPage(currentPage + 1);
          incrementProgress(); // Update progress
        
        } else {
            handlePage("Results")
        }
        
      };
    

  
    // Handle form submission
    /*
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      console.log('Form Submitted:', responses);
      // Perform your desired submission logic, like sending to a backend
    };
    */



    return (
        <div className="basicForm">
          <form>
            <h1>Basic Quiz</h1>
    
            {/* Conditionally render questions based on current page */}
            {questions[currentPage].map((questionObj, questionIndex) => ( // Use questionIndex here
              <div className="questions" key={questionIndex}>
                <p>{questionObj.question}</p>
                <div className="radio-group">
                  {/* ... radio button logic using questionObj.options ... */}
                  {questionObj.options.map((option, optionIndex) => (
                    <label className="radio-button" key={`question${questionIndex + 1}-${optionIndex}`}>
                      <input
                        type="radio"
                        name={`question${questionIndex + 1}`} // Use questionIndex for unique names
                        value={optionIndex + 1}
                        checked={responses[`question${questionIndex + 1}` as keyof typeof responses] === `${optionIndex + 1}`}
                        onChange={handleRadioChange}
                      />
                      <span className="custom-radio"></span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
    
            {/* Next Button */}
            <button type="button" id="Next" onClick={handleNext}>
              Next
            </button>
          </form>
          <ProgressBar progress={progress} max={100} color="#2c6fbb" />
        </div>
      );
    };
  
 

export default BasicQuestions;