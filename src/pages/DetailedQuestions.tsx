import React, { useState } from "react";
import ProgressBar from "../components/progress-bar/progressBar"

interface DetailedProp {
    handlePage: (page: string) => void;
}
const detailedQuestions: React.FC<DetailedProp> = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [responses, setResponses] = useState({
        question1: '',
        question2: '',
        question3: ''
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
              <h1>Detailed Quiz</h1>
  
              {/* Question 1 */}
              <div className = "questions">
                  <p>I am a very hands-on person. </p>
                  <div className = "radio-group">
                  {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                      (label, index) => (
                          <label className = "radio-button" key={`question1-${index}`}>
                              <input
                                  type="radio"
                                  name="question1"
                                  value={index + 1}
                                  checked={responses.question1 === `${index + 1}`}
                                  onChange={handleRadioChange} />
                                  <span className="custom-radio"></span>
                              {label}
                          </label>
                      )
                  )}
                  </div>
              </div>
  
              {/* Question 2 */}
              <div className = "questions">
                  <p>I work well under pressure. </p>
                  <div className = "radio-group">
                  {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                      (label, index) => (
                          <label className = "radio-button" key={`question2-${index}`}>
                              <input
                                  type="radio"
                                  name="question2"
                                  value={index + 1}
                                  checked={responses.question2 === `${index + 1}`}
                                  onChange={handleRadioChange} />
                                  <span className="custom-radio"></span>
                              {label}
                          </label>
                      )
                  )}
                  </div>
              </div>
              {/* Question 3 */}
              <div className = "questions">
                  <p>I am good at counseling people. </p>
                  <div className = "radio-group">
                  {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map(
                      (label, index) => (
                          <label className = "radio-button" key={`question3-${index}`}>
                              <input
                                  type="radio"
                                  name="question3"
                                  value={index + 1}
                                  checked={responses.question3 === `${index + 1}`}
                                  onChange={handleRadioChange} />
                                  <span className="custom-radio"></span>
                              {label}
                          </label>
                      )
                  )}
                  </div>
              </div>
  
              {/* Next Button */}
              <button type='button' id = "Next" onClick={incrementProgress}>Next</button>
          </form>
          <ProgressBar progress={progress} max={100} color="#2c6fbb" />
      </div>
      );
  };
  
  export default detailedQuestions;