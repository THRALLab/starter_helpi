import { useState } from "react";
import { HomePage, Footer } from "./HomePage_Buttons";
import { Button } from "react-bootstrap";
export function createButtons(
  labels: string[],
  containerId: string,
  buttonClass: string
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  labels.forEach((label) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.classList.add(buttonClass);
    container.appendChild(button);
  });

  const buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4"];
  createButtons(buttonLabels, "buttonContainer", "myButton");
}

// Call the function to create buttons
