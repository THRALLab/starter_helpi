import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import SimpleQuestions from "../Pages/SimpleQuestions";

window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLMediaElement.prototype.pause = function () {};

describe("Basic Page Tests", () => {
  test("Has Header", () => {
    render(
      <HashRouter>
        <SimpleQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has User Input", () => {
    render(
      <HashRouter>
        <SimpleQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("True");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Progress Bar", () => {
    render(
      <HashRouter>
        <SimpleQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("0% completed");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Footer", () => {
    render(
      <HashRouter>
        <SimpleQuestions />
      </HashRouter>
    );
    const linkElement = screen.getByText("API Key:");
    expect(linkElement).toBeInTheDocument();
  });
});
