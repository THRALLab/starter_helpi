import React, { useState } from 'react';
import '../App.css';
import {Button, Form} from "react-bootstrap";
import {Q1} from "../BasicQuestions/Q1";
import {Q2} from "../BasicQuestions/Q2";
import {Q3} from "../BasicQuestions/Q3";
import {Q4} from "../BasicQuestions/Q4";
import {Q5} from "../BasicQuestions/Q5";
import {Q6} from "../BasicQuestions/Q6";
import {Q7} from "../BasicQuestions/Q7";
import {Q8} from "../BasicQuestions/Q8";
import { Footer } from "../components/Footer";

function Basic_Questions(): JSX.Element {

  return (
    <div className="App">

      <header className="Basic_Question">Home/Basic Questions</header>
      <br></br>

      <Q1></Q1>
      <Q2></Q2>
      <Q3></Q3>
      <Q4></Q4>
      <Q5></Q5>
      <Q6></Q6>
      <Q7></Q7>
      <Q8></Q8>

      <Footer/>
    </div>
  );
}

export default Basic_Questions;
