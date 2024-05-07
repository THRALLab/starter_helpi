import { useState } from 'react';
import './resultsPage.css';
import { Form } from 'react-bootstrap';

/*function parseAnswers(answers: string|null): string[] {
	  if (answers === null) return [];
    let array = answers.substring(2,answers.length-2).split("\", \"");
    return array;
}*/

//commented out the function until it is being used so we can build on GIT without errors
//get the string-array from the question pages and pass through here.

const ResultsPage = () => {
    const [review, setReview] = useState<number>(0); //create state for all of the questions

    return(
        <>
        <div className="mainCareer">
                <h6>Your ideal career is...</h6>
                <h5>UD Parking Attendent</h5>
                <p>You can tell it's an aspen because of the way it is.</p>
        </div>
        <div className="subCareers">
            <div className="career-desc">
                        <h3>Option 2</h3>
                        <p>This is the description of career option 2</p>
            </div>
            <div className="career-desc">
                        <h3>Option 3</h3>
                        <p>This is the description of career option 3</p>
            </div>
            <div className="career-desc">
                        <h3>Option 4</h3>
                        <p>This is the description of career option 4</p>
            </div>
        </div>
        <div className="review-system">
            <h3>Are you satisified with the job recommendations that you received?</h3>
			<Form.Check
				inline
				type="radio"
				id="review-option1"
				label="Absolutely!"
				value={"1"}
				name="review-question"
				style={{width:"auto"}}
                onChange={() => setReview(1)}
				checked={review === 1}/>
            <Form.Check
                inline
                type="radio"
                id="review-option2"
                label="Eh"
                value={"2"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => setReview(2)}
                checked={review === 2}/>
            <Form.Check
                inline
                type="radio"
                id="review-option3"
                label="Nah f this"
                value={"3"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => setReview(3)}
                checked={review === 3}/>
		</div>
        </>
    )
};
export default ResultsPage;