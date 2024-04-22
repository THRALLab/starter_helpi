import React from "react";


interface HomeProp {
    handlePage: (page: string) => void;
}

const home: React.FC<HomeProp> = ({handlePage}) => {
    return (
    <div>
        <h1 style={{ textAlign: 'center'}}> Shore Path</h1>
        <div className="container">
            <div className="section">
                <h2 className="basicHeader">Basic</h2>
                <p className="basicParagraph">
                    The basic assessment quiz is a short questionaire designed
                    to gauge your knowledge and skills with simple and clear
                    questions. With immediate feedback, you will know which
                    career is right for you in a matter of a few minutes!{" "}
                </p>
                <button className="rounded-button blue-gradient" onClick={() => handlePage('Basic')}> Start Basic Quiz</button>
            </div>
            <div className="section">
                <h2 className="detailedHeader">Detailed</h2>
                <p className="detailedParagraph">
                    The Detailed assessment will consist of more questions and
                    will give you a more accurate and detailed assesment of what
                    carreer you should choose.
                </p>
                <button className="rounded-button blue-gradient" onClick={() => handlePage('Detailed')}> Start Detailed Quiz</button>
            </div>
        </div>
    </div>
    );
};
export default home;