import { useState } from 'react';
import './resultsPage.css';
import { Button, Form } from 'react-bootstrap';

/*function parseAnswers(answers: string|null): string[] {
	  if (answers === null) return [];
    let array = answers.substring(2,answers.length-2).split("\", \"");
    return array;
}*/


const reviewData: number[] = [0,0,0];
const saveReviewData = "MYPIE";

const ResultsPage = () => {
    const [review, setReview] = useState<number>(0); //individiual review to be submitted by store function
    const [reviews, setReviews] = useState<number[]>(reviewData); //create state for all of the questions

    function pullReviews(): number[] {
        if(localStorage.getItem("MYPIE")){
            const newLocal = localStorage.getItem("MYPIE") || "";
            return JSON.parse(newLocal);
        }
        return [0, 0, 0] 
    }

    function storeReviews() {
        const currReviews = [...reviews]
        currReviews[review] += 1;
        const storedReviews = [...pullReviews()]
        const combinedReviews = [currReviews[0] + storedReviews[0], currReviews[1] + storedReviews[1], currReviews[2] + storedReviews[2]];
        localStorage.setItem(saveReviewData, JSON.stringify(combinedReviews));
        window.location.reload(); 
        
    }

    function changeReview(newNumber: number) {
        // const updatedReviewData = [...reviews];
        // updatedReviewData[newNumber] += 1;
        setReview(newNumber);
    }

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
                onChange={() => changeReview(0)}
				/>
            <Form.Check
                inline
                type="radio"
                id="review-option2"
                label="Eh"
                value={"2"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => changeReview(1)}
                />
            <Form.Check
                inline
                type="radio"
                id="review-option3"
                label="Nah f this"
                value={"3"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => changeReview(2)}
                />
                <div>The magic array is {reviews}</div>
                <Button className="Submit-Button" onClick={storeReviews}>Submit</Button>
		</div>
        </>
    )

};
export default ResultsPage;
export const reviews = localStorage.getItem("MYPIE") || ""; //this is to get the api key from the local storage