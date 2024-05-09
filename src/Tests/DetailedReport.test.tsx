import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import DetailedReport from "../Pages/DetailedReport";

window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLMediaElement.prototype.pause = function () {};

describe("Detailed Report Tests", () => {
  test("Has Header", () => {
    render(
      <HashRouter>
        <DetailedReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Report Button", () => {
    render(
      <HashRouter>
        <DetailedReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("Generate Report");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Descriptionr", () => {
    render(
      <HashRouter>
        <DetailedReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("View your Detailed Quiz Results!");
    expect(linkElement).toBeInTheDocument();
  });
  test("Has Footer", () => {
    render(
      <HashRouter>
        <DetailedReport />
      </HashRouter>
    );
    const linkElement = screen.getByText("API Key:");
    expect(linkElement).toBeInTheDocument();
  });
});
