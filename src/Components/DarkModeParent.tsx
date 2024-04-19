//Parent class to keep toggle state between pages
export let currentState = false;

export function updateCurrentState() {
  currentState = !currentState;
}
