import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { playButtonClick } from "../Components/AudioPlayer";
import "../Formatting/General.css";

interface LinkButtonProps {
  to: string;
  label: string;
}

//Special button made for navigating our webpages
export function LinkButton(props: LinkButtonProps) {
  const navigate = useNavigate();
  const handleButtonClick = (whereTo: string) => {
    //Plays button click
    playButtonClick();
    //Moves to new page
    navigate(whereTo);
    //Scrolls to top of page
    window.scrollTo(0, 0);
    scrollToTop();
  };

  //Scrolls to top on page route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Scrolls to top on page route
  function scrollToTop() {
    //Gets header for smooth scrolling
    let element = document.getElementById("bigBody");
    //Scrolls to the top of the page
    if (element != null) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  //Link button component, all formatted using the general css file
  return (
    <Button
      className="Button-link"
      role="Button-link"
      onClick={() => handleButtonClick(props.to)}
    >
      {props.label}
    </Button>
  );
}
