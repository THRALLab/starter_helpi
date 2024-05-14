import "./App.css";

export function BasicQuiz() {
  return (
    <div>
      <div>
        <h1 className="App-buttons4">Basic Quiz</h1>
        <p className="Career-Quiz-text">
          Basic Quiz provides the option of "Check All That Apply" questions,
          letting users select various answers per question. This facilitates a
          more precise generation of career results.
        </p>
      </div>
    </div>
  );
}

export function DetailedQuiz() {
  return (
    <div>
      <div>
        <h1 className="App-buttons4">Detailed Quiz</h1>
        <p className="Career-Quiz-text">
          Detailed Quiz presents questions that require users to fill in the
          blank, providing them with the liberty to answer in their own unique
          way for each question. This method ensures a more precise
          determination of their career outcome.
        </p>
      </div>
    </div>
  );
}
