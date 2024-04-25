import { useState } from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
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

      <div id="slider">
        <input type="radio" name="slider" id="slide1"></input>
        <input type="radio" name="slider" id="slide2"></input>
        <input type="radio" name="slider" id="slide3"></input>
        <input type="radio" name="slider" id="slide4"></input>
        <input type="radio" name="slider" id="slide5"></input>
        <input type="radio" name="slider" id="slide6"></input>
        <input type="radio" name="slider" id="slide7"></input>
        <input type="radio" name="slider" id="slide8"></input>
        <div id="slides">
          <div id="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="slide_content">
                  <Q1></Q1>
                </div>
              </div>
              <div className="slide slide_2">
                <div className="slide_content">
                  <Q2></Q2>
                </div>
              </div>
              <div className="slide slide_3">
                <div className="slide_content">
                  <Q3></Q3>
                </div>
              </div>
              <div className="slide slide_4">
                <div className="slide_content">
                  <Q4></Q4>
                </div>
              </div>
              <div className="slide slide_5">
                <div className="slide_content">
                  <Q5></Q5>
                </div>
              </div>
              <div className="slide slide_6">
                <div className="slide_content">
                  <Q6></Q6>
                </div>
              </div>
              <div className="slide slide_7">
                <div className="slide_content">
                  <Q7></Q7>
                </div>
              </div>
              <div className="slide slide_8">
                <div className="slide_content">
                  <Q8></Q8>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
          <label htmlFor="slide6"></label>
          <label htmlFor="slide7"></label>
          <label htmlFor="slide8"></label>
        </div>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
          <label htmlFor="slide6"></label>
          <label htmlFor="slide7"></label>
          <label htmlFor="slide8"></label>
        </div>
      </div>

      <footer style={{ gridRow: '3 / 4'}} className='Footer'>
        <Footer />
      </footer>
      
    </div>
  );
}

export default Basic_Questions;
