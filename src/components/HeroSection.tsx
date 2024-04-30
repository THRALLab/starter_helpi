import React from "react";
import "../styles/HeroSection.css";
// @ts-ignore
import backgroundVideo from "../mixkit-cinematic-view-of-friends-hiking-rough-terrain-8947-medium.mp4";
import ScrollToSectionButton from "./ScrollToSectionButton";

function HeroSection({
  sectionToScroll,
}: {
  sectionToScroll: string;
}): JSX.Element {
  return (
    <div className="hero-container">
      <div className="background-video">
        <video autoPlay loop muted>
          {" "}
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="over-text">
        <h1>NAVIGATE YOUR CAREER JOURNEY</h1>
        <p>
          Discover your path to success today. Take our interactive career quiz
          and unlock personalized insights tailored just for you. Let's start
          your journey together!
        </p>
        <ScrollToSectionButton
          className="hero-btn"
          content="EXPLORE PROFESSIONS"
          section={sectionToScroll}
        />
      </div>
    </div>
  );
}

export default HeroSection;
