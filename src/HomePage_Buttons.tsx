import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { BasicQuiz, DetailedQuiz } from "./CareerQuiz";
import { ChangeImages } from "./image2";
import { BasicQuestion } from "./BasicQuiz";
import { DetailedQuestion } from "./DetailedQuiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
  let keyData = "";
  const saveKeyData = "MYKEY";
  const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
  if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
  }
  const [key, setKey] = useState<string>(keyData); //for api key input

  // sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

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
              className="App-link"
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
          <p>
            {" "}
            <a
              className="App-link"
              href="https://docs.google.com/document/d/149faakIa1NP_6sUFtb7AjWHycS_MKdZhvkVtbTFS_HU/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Picture Credits
            </a>{" "}
          </p>
        </div>
        <div className="col">
          <h3>Collaborator</h3>
          <p>
            Maliq Adewale{" "}
            <a
              href="https://www.instagram.com/m4_liq?igsh=MTIzM3VjYml2M24xYw=="
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="brand" />
            </a>
            <a
              href="https://www.linkedin.com/in/maliq-adewale/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="brand1" />
            </a>
            <a
              href="https://github.com/nolimitmaliq"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="brand2" />
            </a>
          </p>
          <p>
            Ujjwala Pothula{" "}
            <a
              href="https://www.instagram.com/_ujjwalap?igsh=MTVhNGc4Y3JtNGVtbA=="
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="brand" />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwalap16/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="brand1" />
            </a>
            <a
              href="https://github.com/ujjwalaa7"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="brand2" />
            </a>
          </p>
          <p>
            Rahul Patel{" "}
            <a
              href="https://www.instagram.com/rahulp5400?igsh=Y2JqYjNrZ3Q1bHpo"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="brand" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulpatel0/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="brand1" />
            </a>
            <a
              href="https://github.com/rahul5400"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="brand2" />
            </a>
          </p>
        </div>
        <div className="col">
          <h3>NewsLetter</h3>
          <form>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
            ></input>
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </form>
        </div>
        <div className="col">
          <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insert API Key Here"
              onChange={changeKey}
            ></Form.Control>
            <br></br>
            <Button className="Submit-Button" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
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
  function toTop(): void {
    window.scrollTo(0, 0);
  }

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
              <PlanetComponent></PlanetComponent>
              <h1 className="caption fade-in-horizontal">
                There are endless career possibilities...All the way to the
                Moon...
              </h1>
            </header>
            <div className="buttonContainer">
              <a href="#differentCareers" className="Home-button">
                Different Careers
              </a>
              <a href="#careerQuizzes" className="Home-button">
                Career Quizzes
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
              <h1
                className="Career-Quiz-Button"
                style={{ margin: "12px auto" }}
              >
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
                    onClick={() => {
                      setTab("basic");
                      toTop();
                    }}
                    className="Career-Quiz2"
                  >
                    Basic Quiz
                  </Button>
                  <DetailedQuiz />
                  <Button
                    onClick={() => {
                      setTab("detailed");
                      toTop();
                    }}
                    className="Career-Quiz2"
                  >
                    Detailed Quiz
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
