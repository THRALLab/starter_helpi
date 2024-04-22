//Parent class to keep toggle state between pages
export let darkModeState = false;
//Swaps dark mode state
export function updateDarkModeState() {
  darkModeState = !darkModeState;
}
