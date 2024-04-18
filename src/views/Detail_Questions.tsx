import { Q1 } from "../DetailQuestions/Q1";
import { Q2 } from "../DetailQuestions/Q2";
import { Q3 } from "../DetailQuestions/Q3";
import { Q4 } from "../DetailQuestions/Q4";
import { Q5 } from "../DetailQuestions/Q5";
import { Q6 } from "../DetailQuestions/Q6";
import { Q7 } from "../DetailQuestions/Q7";
import { Footer } from "../components/Footer";

function Detail_Questions(): JSX.Element {
  return (
    <div className="App">
      <header className="Detail_Question">Home/Detail Questions</header>
      <br></br>

      <Q1></Q1>
      <Q2></Q2>
      <Q3></Q3>
      <Q4></Q4>
      <Q5></Q5>
      <Q6></Q6>
      <Q7></Q7>

      <Footer />
    </div>
  );
}

export default Detail_Questions;
