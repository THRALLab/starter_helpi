import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Formatting/General.css";

interface LinkButtonProps {
  to: string;
  label: string;
}

//Special button made for navigating our webpages
export function LinkButton(props: LinkButtonProps) {
  const navigate = useNavigate();
  const handleButtonClick = (whereTo: string) => {
    //Moves to new page
    navigate(whereTo);
    scrollToTop();
  };

  //Scrolls to top on page route
  function scrollToTop() {
    //Gets header for smooth scrolling
    let element = document.getElementById("bgBody");
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
