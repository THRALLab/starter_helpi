import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Formatting/General.css";
import { useEffect } from "react";

interface LinkButtonProps {
  to: string;
  label: string;
}

//Special button made for navigating our webpages
export function LinkButton(props: LinkButtonProps) {
  const navigate = useNavigate();
  const handleButtonClick = (whereTo: string) => {
    navigate(whereTo);
  };
  //Scrolls to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
