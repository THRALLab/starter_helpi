import './resultsPage.css';

/*function parseAnswers(answers: string|null): string[] {
	  if (answers === null) return [];
    let array = answers.substring(2,answers.length-2).split("\", \"");
    return array;
}*/

//commented out the function until it is being used so we can build on GIT without errors
//get the string-array from the question pages and pass through here.

const ResultsPage = () => {


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
        </>
    )
};
export default ResultsPage;