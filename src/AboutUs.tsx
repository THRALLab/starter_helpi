import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nathanael Pierre-Louis',
      image: 'https://cdn.discordapp.com/attachments/842745578030104658/1241191070147022978/headshotsmile.JPG?ex=66494cc3&is=6647fb43&hm=6b9362093773e3ac2604b85cda31b28f6d774f55b2d8814c83ea033cd7d02951&',
      linkedin: 'https://www.linkedin.com/in/nathanael-pierre-louis-767955259/'
    },
    {
      name: 'Carter McCabe',
      image: 'https://cdn.discordapp.com/attachments/1219751295641190530/1241190128744009800/1677002122802.png?ex=66494be2&is=6647fa62&hm=50a135e5fdc1cf810ef3c9f1baefdc11eaffcad87d768f57cae8962209a5eb6c&', // Update with actual path
      linkedin: 'https://www.linkedin.com/in/carter-mccabe-76658b24b/'
    },
    {
      name: 'Gregory Turbe',
      image: 'https://cdn.discordapp.com/attachments/1219751295641190530/1241190887153733693/IMG_6594.jpg?ex=66494c97&is=6647fb17&hm=68f16739cc1bd5cdf0a400b50a505d5b697e454554372ed49cdd3dc18219af0c&', // Update with actual path
      linkedin: 'https://www.linkedin.com/in/greg-turbe/'
    }
  ];

  return (
    <div className="AboutUs">
      <h2>About Us</h2>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <p>{member.name}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
      {/* <button className="home-button" onClick={() => window.location.href = '/'}>
        Return to Home Page
      </button> */}
      <Link to = '/'>
               <button>Return to Home Page</button>
             </Link>
    </div>
  );
};

export default AboutUs;
