import { useState } from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import {Q1} from "../DetailQuestions/Q1";
import {Q2} from "../DetailQuestions/Q2";
import {Q3} from "../DetailQuestions/Q3";
import {Q4} from "../DetailQuestions/Q4";
import {Q5} from "../DetailQuestions/Q5";
import {Q6} from "../DetailQuestions/Q6";
import {Q7} from "../DetailQuestions/Q7";
import { Footer } from "../components/Footer";


function Detail_Questions(): JSX.Element {

  return (
    <div className="App">

      <div id="slider2">
        <input type="radio" name="slider2" id="slide1"></input>
        <input type="radio" name="slider2" id="slide2"></input>
        <input type="radio" name="slider2" id="slide3"></input>
        <input type="radio" name="slider2" id="slide4"></input>
        <input type="radio" name="slider2" id="slide5"></input>
        <input type="radio" name="slider2" id="slide6"></input>
        <input type="radio" name="slider2" id="slide7"></input>
        <input type="radio" name="slider2" id="slide8"></input>
        <div id="slides2">
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
          
        </div>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
          <label htmlFor="slide6"></label>
          <label htmlFor="slide7"></label>
          
        </div>
      </div>

      <footer style={{ gridRow: '3 / 4'}} className='Footer'>
        <Footer />
      </footer>
      
    </div>
  );
}

export default Detail_Questions;
