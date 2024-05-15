import OpenAI from "openai";
import React, { useState } from "react";
import { keyData } from "./App";
import './App.css';

//ChatGPT-4 generated BasicReportProps
interface BasicReportProps {
    answers: {
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answer5: string;
        answer6: string;
        answer7: string;
    };
}

function BasicReport({answers} : BasicReportProps) {  
    const openai = new OpenAI({apiKey: keyData, dangerouslyAllowBrowser: true}); 
    //Code by GPT-4
    const [report, setReport] = useState("");
    // Generated by ChatGPT-4
    const [isLoading, setLoading] = useState(false);

    function formatReport (report: string) {
        setReport(report.replace("*","").replace(" - ", ", "));
        // Generated by ChatGPT-4
        setLoading(false);
    }

    // The basis of this code is from OpenAi's tutorial for their API
    const ChatGPTReport = async () => {
        // Generated by ChatGPT-4
        setLoading(true);
        const answer1 = answers.answer1;
        const answer2 = answers.answer2;
        const answer3 = answers.answer3;
        const answer4 = answers.answer4;
        const answer5 = answers.answer5;
        const answer6 = answers.answer6;
        const answer7 = answers.answer7;
        const completion = await openai.chat.completions.create({
        messages: [{ role: "system", 
            content: "You create reports based on the results of a career assessment. You never use the \"*\" character nor the \"-\" character in your responses, and separate careers in the first 4 categories with a \",\"." + 
            "\"Please model your response in the following format:\"\nBest suited for:\nWill do well in:\nCan adapt to:\nUnlikely suited for:\n" +
            "Why you may be best suited for:\nWhy you would still do well in:\nWhy you might adapt to\nWhy you are likely not suited for:\n" +
            "The best type of work environment for you is:\nUnsuitable types of work environments for you are:\""}, {role: "user", content: "The user has inputted the following results to the" + 
            "following questions:\nDo you enjoy working with your hands? \"" 
            + answer1 + "\"\nAre you interested in technology? \"" + answer2 + "\"\nDo you like solving puzzles or problems? \"" + answer3
            + "\"\nDo you prefer working alone or in a team? \"" + answer4  + "\"\nDo you enjoy being creative? \"" + answer5
            + "\"\nAre you good at analyzing data or information? \"" + answer6 + "\"\nDo you have clear goals for your future career? \"" + answer7}],
        model: "gpt-4-turbo",
        });
        //Lines 42-46 by GPT-4
        if (completion.choices && completion.choices.length > 0 && completion.choices[0].message.content) {
            formatReport(completion.choices[0].message.content);
        } 

    };
    return (
      <div className="Results-container">
    {!isLoading && report === "" && (
      <button className="Button-get-answer" onClick={ChatGPTReport}>Get Results</button>
    )}
      {isLoading ? (
        <div className="Loading-overlay">
          <h2>Loading</h2>
          <div className="Loading-spinner"></div> {/* Spinning circle loading animation */}
        </div>
      ) : report === "Error: Report failed to generate" ? (
        <div>
          <h2>{report}</h2>
        </div>
      ) : report === "" ? (
        <div className="Results-text">
          <h2>You've completed the Basic Quiz!</h2>
        </div>
      ) :  
                (
                  <div>
  <div className="Results-section">
    <h2 className="Results-heading">BEST CAREER(S) FOR YOU:</h2>
    <p>{report.substring(report.indexOf("Best suited for:") + 17, report.indexOf("Will do well in:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">WOULD SUCSEED DOING THESE CAREERS:</h2>
    <p>{report.substring(report.indexOf("Will do well in:") + 17, report.indexOf("Can adapt to:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">CAREERS YOU CAN ADAPT TO:</h2>
    <p>{report.substring(report.indexOf("Can adapt to:") + 14, report.indexOf("Unlikely suited for:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">CAREERS YOU ARE UNLICKELY SUITED FOR:</h2>
    <p>{report.substring(report.indexOf("Unlikely suited for:") + 21, report.indexOf("Why you may be best suited for:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">WHY THESE CAREERS ARE BEST FOR YOU:</h2>
    <p>{report.substring(report.indexOf("Why you may be best suited for:") + 32, report.indexOf("Why you would still do well in:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">WHY YOU WOULD WOULD SUCSEED DOING THESE CAREERS:</h2>
    <p>{report.substring(report.indexOf("Why you would still do well in:") + 32, report.indexOf("Why you might adapt to:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">WHY YOU CAN ADAPT TO THESE CAREERS:</h2>
    <p>{report.substring(report.indexOf("Why you might adapt to:") + 24, report.indexOf("Why you are likely not suited for:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">WHY YOU ARE UNLICKELY SUITED FOR THESE CAREERS:</h2>
    <p>{report.substring(report.indexOf("Why you are likely not suited for:") + 35, report.indexOf("The best type of work environment for you is:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">THE BEST TYPE OF WORK ENVIRONMENT FOR YOU IS:</h2>
    <p>{report.substring(report.indexOf("The best type of work environment for you is:") + 46, report.indexOf("Unsuitable types of work environments for you are:"))}</p>
  </div>
  <div className="Results-section">
    <h2 className="Results-heading">UNSUITABLE TYPES OF WORK ENVIRONMENTS FOR YOU ARE:</h2>
    <p>{report.substring(report.indexOf("Unsuitable types of work environments for you are:") + 51)}</p>
  </div>
</div>
 
                )
            }
        </div>
    )
}

export default BasicReport