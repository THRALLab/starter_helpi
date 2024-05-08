import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  isPlayingAudio,
  updatePlayingAudio,
  audioIcon,
  updateAudioIcon,
} from "./StateParent";
import BackgroundSound from "../Audio/BackgroundMusic.mp3";
import ButtonClick from "../Audio/Button-Click2-Trimmed.mp3";
import SliderClick from "../Audio/Slider-Click.mp3";

// Audio players for SFX and background music
const backgroundMusic = new Audio(BackgroundSound);
const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(SliderClick);

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
  //Audio States
  const [, setAudioState] = useState<boolean>(isPlayingAudio);
  const [display, setDisplay] = useState<string>(audioIcon);
  //Plays / Pauses the music
  function backgroundMusicPlayer() {
    buttonSoundEffect.play();
    //Updates parent status
    updatePlayingAudio();
    //Updates the current page state
    setAudioState(isPlayingAudio);
    if (isPlayingAudio) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
    updateAudioIcon();
    setDisplay(audioIcon);
  }
  //Music Button for Header
  return (
    <div className="Header-audio-top">
      <Button className="Header-audio-button" onClick={backgroundMusicPlayer}>
        {display}
      </Button>
    </div>
  );
}
