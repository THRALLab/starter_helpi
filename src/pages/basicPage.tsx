import { BasicQuestions } from "../components/BasicQuestions";

export function BasicPage() {
  return (
    //The Basic Page will have questions be answered in mulitple choice form
    <>
      <h1>Basic Questionnaire</h1>
      <hr></hr>
      <BasicQuestions question="(add question 1 here)" questionNumber="1" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 2 here)" questionNumber="2" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 3 here)" questionNumber="3" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 4 here)" questionNumber="4" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 5 here)" questionNumber="5" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 6 here)" questionNumber="6" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <BasicQuestions question="(add question 7 here)" questionNumber="7" answer1="yes" answer2="no" answer3="maybe" answer4="idk bruh"></BasicQuestions>
      <h4>add more questions if needed</h4>
    </>
    //this can be stylized later to look better, but for now this is the basic setup
  );
}
