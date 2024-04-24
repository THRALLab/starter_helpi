//Parent class to keep toggle state between pages
export let themeState = "body-theme1";
//Swaps theme state
export function updateThemeState(newThemeState: string) {
  themeState = newThemeState;
}
