import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonClick from "../Audio/Button-Click.mp3";
import BackgroundSound from "../Audio/Mii-Channel.mp3";
import { isPlayingAudio } from "./StateParent";
import { updatePlayingAudio } from "./StateParent";

const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(ButtonClick);
const backgroundMusic = new Audio(BackgroundSound);

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
  //Plays / Pauses the music
  function backgroundMusicPlayer() {
    //Updates parent status
    updatePlayingAudio();
    //Updates the current page state
    setAudioState(isPlayingAudio);
    if (isPlayingAudio) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  //Music Button for Header
  return (
    <div className="Header-audio-top">
      <Button className="Header-audio-button" onClick={backgroundMusicPlayer}>
        🎧
      </Button>
    </div>
  );
}
