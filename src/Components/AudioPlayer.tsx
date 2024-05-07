import React from "react";
import ButtonClick from "../Audio/Button-Click.mp3";

const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(ButtonClick);

//Sound effect played when buttons clicked
export function playButtonClick() {
  buttonSoundEffect.play();
}
//Sound effect played when slider placed
export function playSliderSet() {
  sliderSoundEffect.play();
}
//Base music player
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
