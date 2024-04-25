import React from "react";
import Card from "../../Components/Card/Card";

const BasicQuestionsPage = () => {
  return (
    <>
      <div className="flex justify-center pt-20">
        <h1>Basic Questions Page</h1>
      </div>
      <div className="flex justify-center pt-5">
        <Card 
          questions={["bq1?", "bq2?", "bq3?", "bq4?", "bq5?"]}
        />
      </div>
    </>
  );
};

export default BasicQuestionsPage;
