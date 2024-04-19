export let currentState = false;
//Parent class to keep toggle state between pages
export function updateCurrentState(){
    currentState = !currentState;
}