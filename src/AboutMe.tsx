import React from 'react';
import './AboutMe.css';
import temp from './images/temp_image.png';

const AboutMe: React.FC = () => {
  return (
    <div className="AboutMe-body">
      <br></br>
      <br></br>
      <div className="AboutMe-container">
        <div className="team-container">
          <h3 className="AboutMe-heading">Meet the Team!</h3>
          <p className="AboutMe-text">
            A cohesive and dynamic four-person team can be a powerful force within an organization. 
            Each member brings unique skills, experiences, and perspectives to the table, contributing 
            to the team's overall success. With clear communication channels and a shared vision, they 
            collaborate efficiently, leveraging their individual strengths to tackle complex challenges 
            and achieve collective goals. The team's diversity fosters creativity and innovation, leading
            to well-rounded solutions and continuous improvement. Through mutual support, trust, and 
            effective leadership, this team cultivates a positive work environment where everyone feels 
            valued and motivated, paving the way for sustained growth and success."
          </p>
        </div>
        <div className="card-collection">
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                  src={temp}
                  alt="logo"
                  id="card-pic"
              />
              <div className="container-card">
                <h2>Victoria</h2>
                  <p className="title-position">Manager</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
              </div>
            </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={temp}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Dustin</h2>
              <p className="title-position">The Fruit in the Basket</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={temp}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Gia</h2>
              <p className="title-position">A Jack of All-Traits!</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={temp}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Dustine</h2>
              <p className="title-position">Router Guy</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
  
export default AboutMe;
