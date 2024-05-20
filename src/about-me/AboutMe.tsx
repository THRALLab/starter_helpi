import React from 'react';
import './AboutMe.css';
import VikiPhoto from '../images/Viki-Photo.png';
import GiaPhoto from '../images/Gia-Photo.png';
import DustinPhoto from '../images/Dustin-Photo.png';
import DustinePhoto from '../images/Dustine-Photo.png';
import linkinLogo from '../images/linkin-logo.png';


const AboutMe: React.FC = () => {
  return (
    <div className="AboutMe-body">
      <br></br>
      <br></br>
      <div className="AboutMe-container">
        <div className="team-container">
          <h3 className="AboutMe-heading">Meet the Team!</h3>
          <p className="AboutMe-text">
            HEY, Welcome to Cat-lyis Quiz!To get to know te site a little bit better and to have a face behind the site, meet the team of
            young developers from Univeristy of Delaware. This site is the hardwork of our final project for our 275 - Intro to Software Development.
            Together, we have worked and learn many things, not only as programmers, but as team. We learned to manage, communicate, and resolve issues
            with both within ourselves but also with our 'client' (aka our fun Professor Armanando). This project, isn't about the code itself, but the 
            processes and thinking that leads us to implementing. We are not code-monkeys, we are engineers and more importantly, computer scientists! Our team
            is full of strong minds and creative thinkers, leading to our well-rounded solutions and continous improvement. Even if our journey started off
            shakey, by the end we have become solid as gold. Hopeful, you will see the work we put into the site.<br></br> Thank you!
          </p>
        </div>
        <div className="card-collection">
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                  src={VikiPhoto}
                  alt="logo"
                  id="card-pic"
              />
              <div className="container-card">
                <h2>Victoria</h2>
                  <p className="title-position">(Wo)Man with a Plan</p>
                  <p>Manager of the team! Worked on the Home & About Us Pages and created design guides for the team and many of the assets. Little Miss Artist!</p>
                  <div className='contact-box'>
                      <p>vniko@udel.edu</p>
                      <a href="https://www.linkedin.com/in/victoria-nikolaeva-447011258/">
                        <img 
                            src={linkinLogo} 
                            alt="linkin-logo"
                            className='linkin-logo'
                        />
                      </a>
                  </div>
              </div>
            </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={DustinPhoto}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Dustin</h2>
              <p className="title-position">Canvas Connoisseu</p>
              <p>Work on the Basic Career Quiz Layout and the Result Page Layout. He helped with Design Guides with the creativity flowing through his fingers!</p>
              <div className='contact-box'>
                      <p>dustintr@udel.edu</p>
                      <a href="https://www.linkedin.com/in/duy-duc-tran/">
                        <img 
                            src={linkinLogo} 
                            alt="linkin-logo"
                            className='linkin-logo'
                        />
                      </a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={GiaPhoto}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Gia</h2>
              <p className="title-position">A Jack of All-Traits!</p>
              <p>Worked on the Detailed Questions Page. She was a super-STAR with design and functionailty details! She was everywhere!</p>
              <div className='contact-box'>
                      <p>gscoz@udel.edu</p>
                      <a href="https://www.linkedin.com/in/gscozzaro/">
                        <img 
                            src={linkinLogo} 
                            alt="linkin-logo"
                            className='linkin-logo'
                        />
                      </a>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
                src={DustinePhoto}
                alt="logo"
                id="card-pic"
            />
            <div className="container-card">
              <h2>Dustine</h2>
              <p className="title-position">IT Department</p>
              <p>He worked on the router and most of the API/AI handling. He handled most of the heavy backend with ease. He deserves applause!</p>
              <div className='contact-box'>
                      <p>dtrieu@udel.edu</p>
                      <a href="https://www.linkedin.com/in/dustine-trieu/">
                        <img 
                            src={linkinLogo} 
                            alt="linkin-logo"
                            className='linkin-logo'
                        />
                      </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="paw-group">
              <div className="paw-print-1">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>
                
              <div className="paw-print-2">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>    
                
              <div className="paw-print-3">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>    
                
              <div className="paw-print-4">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-5">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-6">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-7">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-8">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-9">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div> 

              <div className="paw-print-10">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>              
        </div>

  </div>
  );
};
  
export default AboutMe;
