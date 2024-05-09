import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import DetailedQuestions from "../Pages/DetailedQuestions";

window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLMediaElement.prototype.pause = function () {};

describe("Detailed Page Tests", () => {
  test("Has Header", () => {
    render(
      <HashRouter>
        <DetailedQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has User Input", () => {
    render(
      <HashRouter>
        <DetailedQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("I am a hard worker.");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Progress Bar", () => {
    render(
      <HashRouter>
        <DetailedQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("0% completed");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Footer", () => {
    render(
      <HashRouter>
        <DetailedQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("API Key:");
    expect(linkElement).toBeInTheDocument();
  });
});
