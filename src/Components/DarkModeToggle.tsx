import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { darkModeState, updateDarkModeState } from "./DarkModeParent";

//Name of the class changes what colors are used
export let bodyClassName = "body";

export const DarkModeToggle = () => {
  //DarkMode States
  const [isDarkMode, setIsDarkMode] = useState<boolean>(darkModeState);
  let oldClassName = "";
  //Dark Mode Control
  function updateDarkMode(event: React.ChangeEvent<HTMLInputElement>) {
    setIsDarkMode(event.target.checked);
    //Swaps the parent classname, see CSS file for what changes
    updateDarkModeState();
    if (isDarkMode) {
      oldClassName = "body-dark";
      bodyClassName = "body";
    } else {
      oldClassName = "body";
      bodyClassName = "body-dark";
    }
    let bigBody = document.getElementById("bigBody");
    if (bigBody != null) {
      bigBody.classList.remove(oldClassName);
      bigBody.classList.add(bodyClassName);
    }
  }
  //Dark Mode Toggle Icon
  return (
    <span>
      <span>
        <Form.Check
          type="switch"
          id="dark-mode-switch"
          label="Dark Mode"
          checked={isDarkMode}
          onChange={updateDarkMode}
        />
      </span>
    </span>
  );
};
