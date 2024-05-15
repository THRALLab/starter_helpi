import { useState } from 'react';
import './resultsPage.css';
import { Button, Form } from 'react-bootstrap';


export function parseAnswers(answers: string|null): string[] { //this function is to parse the GPT response from the local storage
	if (answers === null) return [];
    let array = answers.substring(2,answers.length-2).split("\", \"");
    return array;
}

const reviewData: number[] = [0,0,0]; //Review data to be stored in local storage
const saveReviewData = "MYPIE"; //local storage key for review data

const ResultsPage = () => {
   
   
    const [review, setReview] = useState<number>(0); //individiual review to be submitted by store function
    const [reviews, setReviews] = useState<number[]>(reviewData); //create state for all of the questions

    function pullReviews(): number[] { //Pulls the review data from local storage
        if(localStorage.getItem("MYPIE")){
            const newLocal = localStorage.getItem("MYPIE") || "";
            return JSON.parse(newLocal);
        }
        return [0, 0, 0] 
    }

    function updateReviews(inputArray: number[]){ //updates the review data in the state
        setReviews(inputArray);
    }


    function storeReviews() { //stores the review data in local storage
        const currReviews = [...reviews]
        currReviews[review] += 1;
        updateReviews(currReviews)
        const storedReviews = [...pullReviews()]
        const combinedReviews = [currReviews[0] + storedReviews[0], currReviews[1] + storedReviews[1], currReviews[2] + storedReviews[2]];
        localStorage.setItem(saveReviewData, JSON.stringify(combinedReviews));
        window.location.reload(); 
        
    }

    function changeReview(newNumber: number) {
        setReview(newNumber);
    }

    
    const response:string | null = localStorage.getItem("GPTresponse"); //get gptresponse from local storage

    let GPTresponse:string[]; //initialize GPTresponse array, each element will be put in a different part of the page

    if (response === null) { //if there is no response, then it will display this message
        GPTresponse = ["No Career Found!", "Please go to one of JobNav's career quizzes to generate your ideal career paths.", "", "", "", "", "", ""] 
    }
    else {
        GPTresponse = JSON.parse(response || "[]"); //GPT puts it in a string format with brackets so we have to parse it correctly
    }

    //HTML for the results page
    return(
        <>
        <div className="mainCareer">
                <h6>Your ideal career is...</h6>
                <h5>{GPTresponse[0]}</h5>
                <p>{GPTresponse[1]}</p>
        </div>
        <div className="subCareers">
            <div className="career-desc">
                        <h3>{GPTresponse[2]}</h3>
                        <p>{GPTresponse[3]}</p>
            </div>
            <div className="career-desc">
                        <h3>{GPTresponse[4]}</h3>
                        <p>{GPTresponse[5]}</p>
            </div>
            <div className="career-desc">
                        <h3>{GPTresponse[6]}</h3>
                        <p>{GPTresponse[7]}</p>
            </div>
        </div>
        <div className="reviewPrompt"style={{}}> Consider Giving Us A Rating Below!</div>
        <div className="review-system">
            <h4>Are you satisified with the job recommendations that you received?</h4>
            <div className="review-radio">
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
                label="They were alright"
                value={"2"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => changeReview(1)}
                />
            <Form.Check
                inline
                type="radio"
                id="review-option3"
                label="I'm not so impressed"
                value={"3"}
                name="review-question"
                style={{width:"auto"}}
                onChange={() => changeReview(2)}
                />
            </div>
                <Button className="Submit-Button" onClick={storeReviews}>Submit</Button>
		</div>
        
        </>
    )

};

export default ResultsPage;
export const reviews = localStorage.getItem("MYPIE") || "";
