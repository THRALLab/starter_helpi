import './resultsPage.css';





//commented out the function until it is being used so we can build on GIT without errors
//get the string-array from the question pages and pass through here.

const ResultsPage = () => {

    //get gptresponse from local storage
    const response:string | null = localStorage.getItem("GPTresponse");
    let GPTresponse:string[];
    if (response === null) {
        GPTresponse = ["Career not found", "Please try again", "", "", "", "", "", ""]
    }
    else {
        GPTresponse = JSON.parse(response || "[]");
    }

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