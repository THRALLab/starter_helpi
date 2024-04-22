import React from "react";
interface DetailedProp {
    handlePage: (page: string) => void;
}
const detailedQuestions: React.FC<DetailedProp> = () => {

    return (
    <div>
        <h1 style={{ textAlign: 'center'}}>Detailed Assessment Page</h1>             
    </div>

    
    );
};
export default detailedQuestions;