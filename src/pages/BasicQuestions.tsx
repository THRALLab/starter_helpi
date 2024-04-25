import React, { useState } from "react";
import ProgressBar from "../components/progress-bar/progressBar"

interface BasicProp {
    handlePage: (page: string) => void;
}


const BasicQuestions: React.FC<BasicProp> = () => {
    // Set up state to manage form inputs
    const [responses, setResponses] = useState({
      question1: '',
      question2: '',
      question3: ''
    });
    const [progress, setProgress] = useState(0); // Add state for progress

    //progress bar handling
    const incrementProgress = () => {
        setProgress((prev) => (prev < 100 ? prev + 20: prev));
    }
  
    // Handle radio button change
    function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setResponses((prevResponses) => ({
        ...prevResponses,
        [name]: value,
      }));
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
      <div className = "basicForm"><form>
            <h1>Basic Quiz</h1>

            {/* Question 1 */}
            <div className = "questions">
                <p>I like working in a team</p>
                {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                    (label, index) => (
                        <label key={`question1-${index}`}>
                            <input
                                type="radio"
                                name="question1"
                                value={index + 1}
                                checked={responses.question1 === `${index + 1}`}
                                onChange={handleRadioChange} />
                            {label}
                        </label>
                    )
                )}
            </div>

            {/* Question 2 */}
            <div className = "questions">
                <p>I prefer working alone </p>
                {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                    (label, index) => (
                        <label key={`question2-${index}`}>
                            <input
                                type="radio"
                                name="question2"
                                value={index + 1}
                                checked={responses.question2 === `${index + 1}`}
                                onChange={handleRadioChange} />
                            {label}
                        </label>
                    )
                )}
            </div>
            {/* Question 3 */}
            <div className = "questions">
                <p>I am fascinated by different ideas </p>
                {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                    (label, index) => (
                        <label key={`question3-${index}`}>
                            <input
                                type="radio"
                                name="question3"
                                value={index + 1}
                                checked={responses.question3 === `${index + 1}`}
                                onChange={handleRadioChange} />
                            {label}
                        </label>
                    )
                )}
            </div>

            {/* Next Button */}
            <button type='button' id = "Next" onClick={incrementProgress}>Next</button>
        </form>
        <ProgressBar progress={progress} max={100} color="#2c6fbb" />
    </div>
    );
};

export default BasicQuestions;
