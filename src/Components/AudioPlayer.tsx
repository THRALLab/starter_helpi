import React from "react";
import ButtonClick from "../Audio/Button-Click.mp3";

export function ButtonAudio() {
  return (
    <div className="General-Button-Audio">
      <audio controls>
        <source src={ButtonClick} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
