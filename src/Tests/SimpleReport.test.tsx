import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import SimpleReport from "../Pages/SimpleReport";

window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLMediaElement.prototype.pause = function () {};

describe("Simple Report Tests", () => {
  test("Has Header", () => {
    render(
      <HashRouter>
        <SimpleReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Report Button", () => {
    render(
      <HashRouter>
        <SimpleReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("Generate Report");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Descriptionr", () => {
    render(
      <HashRouter>
        <SimpleReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("View your Simple Quiz Results!");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Footer", () => {
    render(
      <HashRouter>
        <SimpleReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("API Key:");
    expect(linkElement).toBeInTheDocument();
  });
});
