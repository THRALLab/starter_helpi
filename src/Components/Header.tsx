import React from 'react';
import growlithe from "../Images/growlithe.png"
const Header = () => {
  return (
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="Home">
    <img src={growlithe} width="50" height="50" className="d-inline-block align-top" alt="Growlithe"/>
    Career Quizine
  </a>
</nav>
)
};

export default Header;
