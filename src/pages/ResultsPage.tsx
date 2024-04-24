import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './resultsPage.css';


const ResultsPage = () => {


    return(
        <>
        <div className="mainCareer">
                <h6>Your ideal career is...</h6>
                <h5>UD Parking Attendant</h5>
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