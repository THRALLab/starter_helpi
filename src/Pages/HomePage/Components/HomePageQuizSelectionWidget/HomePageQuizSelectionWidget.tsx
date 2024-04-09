import React from "react"

import "./HomePageQuizSelectionWidget.css"

export function HomePageQuizSelectionWidget() : JSX.Element {
    return (
        <div className = "home-page-quiz-selection-widget">  
            <h1> Let's Get Started!</h1>
            <h2 className = "selection-widget--sub-header"> Choose the quiz that suits your career needs </h2>
            <div className = "quiz-selection-widget--text-content">
                <div className = "quiz-selection-widget--choice-card">
                    <h2 className = "choice-card--header"> If you're in a rush, but still need some career help. </h2>
                    <button className = "choice-card--button"> Start Short Quiz </button>
                </div> 
                <div className = "quiz-selection-widget--choice-card">
                    <h2 className = "choice-card--header"> For the full Helpi, career guidence experience.</h2>
                    <button className = "choice-card--button"> Start Long Quiz </button>
                </div> 
            </div>
        </div>
    )
}