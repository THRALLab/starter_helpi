import React, { useState } from 'react';
import BasicQuestions from '../../pages/BasicQuestions';
import DetailedQuestions from '../../pages/DetailedQuestions';

const DescriptionTable: React.FC = () => {
    //const [page, setPage] = useState(0);
    //const [activeTab, setActiveTab] = useState<string>('Home');
    const [page, setPage] = useState(0);
  


    const handleTabClick = (tabName: string) => {
        if(tabName === 'Basic') {
          setPage(1)
        }
        else if(tabName === 'Detailed') {
          setPage(2)
        }
      };

    return (
        <div className="container">
            <div className="section">
                <h2 className="header">Basic</h2>
                <p className="paragraph">
                    The basic assessment quiz is a short questionaire designed
                    to gauge your knowledge and skills with simple and clear
                    questions. With immediate feedback, you will know which
                    career is right for you in a matter of a few minutes!{" "}
                </p>
                <button onClick={() => handleTabClick('Basic')}> Start Basic Quiz</button>
            </div>
            <div className="section">
                <h2 className="header">Detailed</h2>
                <p className="paragraph">
                    The Detailed assessment will consist of more questions and
                    will give you a more accurate and detailed assesment of what
                    carreer you should choose.
                </p>
                <button onClick={() => handleTabClick('Detailed')}> Start Detailed Quiz</button>
            </div>
            {page === 1 ? <BasicQuestions /> : <DetailedQuestions />}
        </div>
        
    );
};
export default DescriptionTable;
