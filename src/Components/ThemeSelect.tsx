import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { themeState, updateThemeState } from "./ThemeParent";

export const ThemeSelect = () => {
  //Theme States
  const [theme, setTheme] = useState<string>(themeState);

  //Theme Control
  function updateTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    //Stores the old class name
    let oldThemeName = theme;
    //Sets the theme
    setTheme(event.target.value);
    //Updates the state
    updateThemeState(event.target.value);
    //Gets the page, if page successfully gotten, swaps the class name
    let bigBody = document.getElementById("bigBody");
    if (bigBody != null) {
      bigBody.classList.remove(oldThemeName);
      bigBody.classList.add(event.target.value);
    }
  }

  return (
    <span>
      <span>
        <Form.Group controlId="userEmotions">
          <Form.Label>Select a Theme:</Form.Label>
          <Form.Select value={theme} onChange={updateTheme}>
            <option value="body-theme1">Theme 1</option>
            <option value="body-theme2">Theme 2</option>
            <option value="body-theme3">Theme 3</option>
            <option value="body-theme4">Theme 3</option>
            <option value="body-theme5">Dark Mode</option>
          </Form.Select>
        </Form.Group>
      </span>
    </span>
  );
};
