import React from "react";
import branchTop from "../images/homePageImages/branchTop.png";


interface HomeProp {
    handlePage: (page: string) => void;
}

const home: React.FC<HomeProp> = ({handlePage}) => {
    return (
    <div>
        <h1 style={{ textAlign: 'center'}}> Home Page</h1>
        <img src={branchTop} alt="Branch" style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', zIndex: 1, transform: 'rotate(90deg)'}} />
        <img src={branchTop} alt="Branch" style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', zIndex: 1, transform: 'rotate(-90deg)' }} />
        <div className="container">
            <div className="section">
                <h2 className="header">Basic</h2>
                <p className="paragraph">
                    The basic assessment quiz is a short questionaire designed
                    to gauge your knowledge and skills with simple and clear
                    questions. With immediate feedback, you will know which
                    career is right for you in a matter of a few minutes!{" "}
                </p>
                <button onClick={() => handlePage('Basic')}> Start Basic Quiz</button>
            </div>
            <div className="section">
                <h2 className="header">Detailed</h2>
                <p className="paragraph">
                    The Detailed assessment will consist of more questions and
                    will give you a more accurate and detailed assesment of what
                    carreer you should choose.
                </p>
                <button onClick={() => handlePage('Detailed')}> Start Detailed Quiz</button>
            </div>
        </div>
    </div>
    );
};
export default home;