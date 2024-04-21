//Parent class to keep toggle state between pages
export let currentState = false;
//Swaps dark mode state
export function updateCurrentState() {
  currentState = !currentState;
}
