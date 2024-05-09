//Parent class to keep states between pages
export let themeState = "body-theme1";
export let isPlayingAudio = false;
export let audioIcon = "🔇"; //🔊
//Swaps theme state
export function updateThemeState(newThemeState: string) {
  themeState = newThemeState;
}
//Swaps the playing audio state
export function updatePlayingAudio() {
  isPlayingAudio = !isPlayingAudio;
}
//Swaps the audio icon
export function updateAudioIcon() {
  if (audioIcon === "🔊") {
    audioIcon = "🔇";
  } else {
    audioIcon = "🔊";
  }
}
