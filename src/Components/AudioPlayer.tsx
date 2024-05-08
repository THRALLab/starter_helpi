import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonClick from "../Audio/Button-Click2-Trimmed.mp3";
import BackgroundSound from "../Audio/Burgers.mp3";
import SliderClick from "../Audio/Slider-Click.mp3";
import { isPlayingAudio } from "./StateParent";
import { updatePlayingAudio } from "./StateParent";

const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(SliderClick);
const backgroundMusic = new Audio(BackgroundSound);
type emojiList = "🔊" | "🔇";
const emojis: Record<emojiList, emojiList> = {
  "🔊": "🔇",
  "🔇": "🔊",
};

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
  const [display, setDisplay] = useState<emojiList>("🔊");
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
    setDisplay(emojis[display]);
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
