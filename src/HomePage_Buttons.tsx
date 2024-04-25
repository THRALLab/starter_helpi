import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { BasicQuiz, DetailedQuiz } from "./CareerQuiz";
import { ChangeImages } from "./image2";
import { BasicQuestion } from "./BasicQuiz";
import { DetailedQuestion } from "./DetailedQuiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { HomePage } from "./HomePage_Buttons";
//import Menubar from "./Menubar";

//import img from "./spaceheader.jpg";
import spaceheader from "./spaceheader.jpg";
import career1 from "./image 1.jpg";
import career2 from "./image 2.jpg";
import career3 from "./image 4.jpg";
import career4 from "./image 5.jpg";
import career5 from "./Accountant.jpg";
import career6 from "./police officer.jpg";
import career7 from "./engineer.jpg";
import career8 from "./psychologist.jpg";
import PlanetComponent from "./PlanetComponent";

const Images = [
  { url: career1, alt: "Lawyer" },
  { url: career2, alt: "Doctor" },
  { url: career3, alt: "Personal Trainer" },
  { url: career4, alt: "Professor" },
  { url: career5, alt: "Accountant" },
  { url: career6, alt: "Police Office" },
  { url: career7, alt: "Engineer" },
  { url: career8, alt: "Psychologist" },
];
const profession = [
  "Lawyer",
  "Doctor",
  "Personal Trainer",
  "Professor",
  "Accountant",
  "Police Officer",
  "Engineer",
  "Psychologist",
];

export function Footer(): JSX.Element {
  // const [email, setEmail] = useState<string>("");

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Submitted email:", email);
  // };

  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>Career Tips </h3>
          <p>
            Career Tips is a resource designed to guide users on how to pursue
            their potential career. This platform educates users about various
            useful websites and provides an insight into the hiring process.{" "}
          </p>
          <p>
            {" "}
            <a
              href="https://www.linkedin.com/pulse/seven-great-career-advice-tips-college-students-resumemansion/"
              target="_blank"
              rel="noreferrer"
            >
              Click Here
            </a>{" "}
          </p>
        </div>
        <div className="col">
          <h3> About Us </h3>
          <p>
            Our mission is to help people of all ages find the right career for
            them. All information on the website is credible and please stay
            connected if you would like to receive updates on the website and
            newer features. We are working towards improving the website to help
            everyone.
          </p>
        </div>
        <div className="col">
          <h3>Collaborator</h3>
          <p>
            Maliq Adewale{" "}
            <FontAwesomeIcon icon={faInstagram} className="brand" />
            <FontAwesomeIcon icon={faXTwitter} className="brand" />
            <FontAwesomeIcon icon={faGithub} className="brand" />
          </p>
          <p>
            Ujjwala Pothula
            <FontAwesomeIcon icon={faInstagram} className="brand" />
            <FontAwesomeIcon icon={faXTwitter} className="brand" />
            <FontAwesomeIcon icon={faGithub} className="brand" />
          </p>
          <p>
            Rahul Patel <FontAwesomeIcon icon={faInstagram} className="brand" />
            <FontAwesomeIcon icon={faXTwitter} className="brand" />
            <FontAwesomeIcon icon={faGithub} className="brand" />
          </p>
        </div>
        <div className="col">
          <h3>NewsLetter</h3>
          <form>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              placeholder="Enter Your Email Addreess"
              required
            ></input>
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export function HomePage(): JSX.Element {
  const [tab, setTab] = useState<string>("home");
  const [displayText2, setDisplayText2] = useState<boolean>(false);

  const handleButton2 = () => {
    setDisplayText2(!displayText2);
  };

  // Function to handle the click event of the "Job Search" button
  // const handleJobSearchClick = () => {
  //   // Toggle the visibility of the paragraph
  //   setJobSearchInfoVisible(!jobSearchInfoVisible);
  // };

  useEffect(() => {
    function random(min: number, max: number): number {
      return min + Math.random() * (max - min);
    }

    const body = document.querySelector("body");
    if (!body) throw new Error("Body element not found!");

    const numberOfStars = 100; // Set the desired number of stars
    const sideMargin = 20; // Define the margin from the sides of the screen

    for (let i = 0; i < numberOfStars; i++) {
      let xPos =
        i % 2 === 0
          ? random(0, sideMargin) // Generate xPos for the left side
          : random(100 - sideMargin, 100); // Generate xPos for the right side
      let yPos = random(0, 120); // Generate yPos within the vertical range
      let alpha = random(0.5, 2);
      let size = random(1, 2);
      let colour = "#ffffff";

      const star = document.createElement("div");
      star.style.position = "absolute";
      star.style.left = xPos + "%";
      star.style.top = yPos + "%";
      star.style.opacity = alpha.toString();
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.backgroundColor = colour;

      body.appendChild(star);
    }

    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount
  return (
    <div className="home-page-container">
      <div className="stars-container">{/* Stars will be appended here */}</div>
      <div className="home-page-content">
        {tab === "basic" ? (
          <BasicQuestion />
        ) : tab === "detailed" ? (
          <DetailedQuestion />
        ) : (
          <div className="Body">
            <header
              className="App-header"
              style={{
                backgroundImage: `url(${spaceheader})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>Welcome to Career-Way!</h1>
              <h1 className="caption">
                There are endless career possibilities...All the way to the
                Moon...
              </h1>
            </header>
            <div className="buttonContainer">
              <a href="#differentCareers" className="button">
                Different Careers
              </a>
              <a href="#careerQuizzes" className="button">
                Career Quizzes
              </a>
              <a href="#careerTips" className="button">
                Career Tips
              </a>
              <a href="#aboutUs" className="button">
                About Us
              </a>
            </div>

            <div id="differentCareers">
              <h1 className="App-differentcareersbutton">Different Careers</h1>
              <p className="HomePage-text">
                There are so many career options to choose from. One must first
                consider their strengths, interests, and passions. It's also
                important to think about job availability, growth opportunity,
                and salary expectations. But ultimately, choosing a career is a
                personal decision that should reflect one's own goals, values,
                and ambitions. It can be helpful to speak to professionals in
                fields of interest or work with a career coach to gain more
                clarity and make an informed decision. Remember, this choice
                isn't set in stone, people often change careers in their
                lifetime, so don't feel pressured to find the "perfect" option.
              </p>
            </div>
            <div
              style={{
                maxWidth: "1100px",
                width: "100%",
                aspectRatio: "10/6",
                margin: "0 auto",
              }}
            >
              <ChangeImages images={Images} profession={profession} />
            </div>
            <div id="careerQuizzes">
              <h1 className="App-buttons2" style={{ margin: "12px auto" }}>
                Career Quizzes
              </h1>
              <p className="HomePage-text">
                Ever pondered upon your life's direction and struggled to
                identify a career you'd feel passionate about? Now, thanks to
                our Basic and Detailed Quizzes, deciphering your future becomes
                possible. Our quizzes are designed for everyone, irrespective of
                your age, race, ethnicity, gender, or nationality.
              </p>
            </div>
            <div>
              <Button onClick={handleButton2} className="Career-Quiz2">
                View Quizzes
              </Button>
              {displayText2 && (
                <>
                  <BasicQuiz />
                  <Button
                    onClick={() => setTab("basic")}
                    className="Career-Quiz2"
                  >
                    Basic Quiz
                  </Button>
                  <DetailedQuiz />
                  <Button
                    onClick={() => setTab("detailed")}
                    className="Career-Quiz2"
                  >
                    Detailed Quiz
                  </Button>
                </>
              )}
            </div>
            <PlanetComponent></PlanetComponent>
          </div>
        )}
      </div>
    </div>
  );
}
