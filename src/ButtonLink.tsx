import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  children: string;
  className: string;
}

const ButtonLink = (props: LinkButtonProps) => {
  const navigate = useNavigate();

  return (
    <Link to={props.to} className={props.className}>
      <Button onClick={() => navigate(props.to)}>{props.children}</Button>
    </Link>
  );
};

export default ButtonLink;
