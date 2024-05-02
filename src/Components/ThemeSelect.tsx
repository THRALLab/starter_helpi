import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { themeState, updateThemeState } from "./ThemeParent";

export const ThemeSelect = () => {
  //Theme States
  const [theme, setTheme] = useState<string>(themeState);

  //Theme Control
  function updateTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    //Stores the current theme
    let oldThemeName = theme;
    //Sets the theme to the new selected theme
    setTheme(event.target.value);
    //Sets the theme in the parent theme file
    updateThemeState(event.target.value);
    //Gets the page, if page successfully gotten, swaps the class name
    let bigBody = document.getElementById("bigBody");
    if (bigBody != null) {
      bigBody.classList.remove(oldThemeName);
      bigBody.classList.add(event.target.value);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form.Label
        htmlFor="userThemes"
        style={{
          marginRight: "10px",
          marginTop: "8px",
        }}
      >
        Theme:
      </Form.Label>
      <Form.Select
        id="userThemes"
        value={theme}
        onChange={updateTheme}
        role="Theme-Select"
        style={{ marginRight: "10px" }}
      >
        <option value="body-theme1">Basic</option>
        <option value="body-theme2">Cotton Candy</option>
        <option value="body-theme3">Forest</option>
        <option value="body-theme4">Modern</option>
        <option value="body-theme5">Midnight</option>
        <option value="body-theme6">Retro</option>
        <option value="body-theme7">Watermelon</option>
      </Form.Select>
    </div>
  );
};
