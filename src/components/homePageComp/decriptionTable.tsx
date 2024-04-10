const DescriptionTable: React.FC = () => {
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
            </div>
            <div className="section">
                <h2 className="header">Detailed</h2>
                <p className="paragraph">
                    The Detailed assessment will consist of more questions and
                    will give you a more accurate and detailed assesment of what
                    carreer you should choose.
                </p>
            </div>
        </div>
    );
};
export default DescriptionTable;
