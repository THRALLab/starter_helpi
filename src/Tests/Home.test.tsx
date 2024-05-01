import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Home from "../Pages/Home";

describe("Home Page Tests", () => {
  test("Has Header", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    let linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
    linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Basic Button", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText("Basic Quiz");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Detailed Button", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText("Detailed Quiz");
    expect(linkElement).toBeInTheDocument();
  });
  /*
  test("Has Basic Explanation", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText(
      "This is a basic quiz with 15 questions. <br /> It will take around 5 to 10 minutes to complete. <br /> The questions are simple and multiple choice."
    );
    expect(linkElement).toBeInTheDocument();
  });
  */
  /*
  test("Has Detailed Explanation", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText(
      "This is a detailed quiz with 30 questions."
    );
    const linkElement1 = screen.getByText(
      "It will take around 10 to 15 minutes to complete."
    );
    const linkElement2 = screen.getByText(
      "The questions are answered on a scale."
    );
    expect(linkElement && linkElement1 && linkElement2).toBeInTheDocument();
  });
  */
  test("Has Footer", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText("API Key:");
    expect(linkElement).toBeInTheDocument();
  });
});
