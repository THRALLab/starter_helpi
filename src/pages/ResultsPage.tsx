import { GPTresponse } from './DetailedPage';
import './resultsPage.css';



function parseAnswers(answers: string|null): string[] {
	  if (answers === null) return [];
    let array = answers.substring(2,answers.length-2).split("\", \"");
    return array;
}

//commented out the function until it is being used so we can build on GIT without errors
//get the string-array from the question pages and pass through here.

const ResultsPage = () => {


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
        </>
    )
};
export default ResultsPage;