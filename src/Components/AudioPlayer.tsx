import React from "react";
import ButtonClick from "../Audio/Button-Click.mp3";

const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(ButtonClick);

export function playButtonClick() {
  buttonSoundEffect.play();
}

export function playSliderSet() {
  sliderSoundEffect.play();
}

export function AudioPlayer() {
  return (
    <div className="General-Button-Audio">
      <audio controls>
        <source src={ButtonClick} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
