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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Form.Label htmlFor="userEmotions" style={{ marginRight: "10px" }}>Theme:</Form.Label>
      <Form.Select
        id="userEmotions"
        value={theme}
        onChange={updateTheme}
        style={{ marginRight: "10px" }}
      >
        <option value="body-theme1">Watermelon</option>
        <option value="body-theme2">Modern</option>
        <option value="body-theme3">Cotton Candy</option>
        <option value="body-theme4">Retro</option>
        <option value="body-theme5">Dark Mode</option>
      </Form.Select>
    </div>
  );
};
