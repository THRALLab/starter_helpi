import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export function ChangeImages(): JSX.Element {
  type Images =
    | "https://shorturl.at/lmrC9"
    | "https://shorturl.at/hzHQ7"
    | "https://shorturl.at/ahoCO"
    | "https://shorturl.at/lpzN2"
    | "https://rb.gy/64cext";
  const photoTransitionForward: Record<Images, Images> = {
    "https://shorturl.at/lmrC9": "https://shorturl.at/hzHQ7",
    "https://shorturl.at/hzHQ7": "https://shorturl.at/ahoCO",
    "https://shorturl.at/ahoCO": "https://shorturl.at/lpzN2",
    "https://shorturl.at/lpzN2": "https://rb.gy/64cext",
    "https://rb.gy/64cext": "https://shorturl.at/lmrC9",
  };
  const photoTransitionBackward: Record<Images, Images> = {
    "https://rb.gy/64cext": "https://shorturl.at/lpzN2",
    "https://shorturl.at/lpzN2": "https://shorturl.at/ahoCO",
    "https://shorturl.at/ahoCO": "https://shorturl.at/hzHQ7",
    "https://shorturl.at/hzHQ7": "https://shorturl.at/lmrC9",
    "https://shorturl.at/lmrC9": "https://rb.gy/64cext",
  };
  const [currImage, setImage] = useState<Images>("https://shorturl.at/lmrC9");
  //const [direction, setDirection] = useState<"forward" | "backward">();

  function nextImage() {
    const image = photoTransitionForward[currImage];
    setImage(image);
    //setDirection("forward");
  }
  function previousImage() {
    const image = photoTransitionBackward[currImage];
    setImage(image);
    //setDirection("backward");
  }
  return (
    <div className="ImageContainer">
      <img src={currImage} alt="Career Photos" />
      <Button onClick={nextImage} className="NavigationButtonRight">
        {<FaArrowLeft />}
      </Button>
      <Button onClick={previousImage} className="NavigationButtonLeft">
        {<FaArrowRight />}
      </Button>
    </div>
  );
}
