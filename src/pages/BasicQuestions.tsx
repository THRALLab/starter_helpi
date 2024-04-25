import React, { useState } from "react";

interface BasicProp {
    handlePage: (page: string) => void;
}

const BasicQuestions: React.FC<BasicProp> = () => {
    // Set up state to manage form inputs
    const [responses, setResponses] = useState({
      question1: '',
      question2: '',
    });
  
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
            <h2>Basic Quiz</h2>

            {/* Question 1 */}
            <div>
                <p>1. I enjoy solving complex problems.</p>
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
            <div>
                <p>2. I prefer working in a team environment.</p>
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

            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
        <div id="progressBar">
                <div id="myProgress"></div>
        </div>
    </div>
    );
};

export default BasicQuestions;
