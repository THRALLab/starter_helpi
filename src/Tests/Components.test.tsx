import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { HashRouter } from "react-router-dom";
import { themeState, updateThemeState } from "../Components/StateParent";
import { ThemeSelect } from "../Components/ThemeSelect";
import Home from "../Pages/Home";
import { LinkButton } from "../Components/LinkButton";
import { Route, Routes } from "react-router-dom";
//import { SliderQuestion } from "../Components/SliderQuestion";
//import React, { useState } from "react";

window.HTMLElement.prototype.scrollIntoView = function () {};
window.HTMLMediaElement.prototype.pause = function () {};

describe("Theme Tests", () => {
  test("Theme Parent", () => {
    expect(themeState).toBe("body-theme1");
    updateThemeState("body-theme2");
    expect(themeState).toBe("body-theme2");
    updateThemeState("body-theme1");
  });
  test("Theme Drop Down", () => {
    render(<ThemeSelect></ThemeSelect>);
    const testToggle: HTMLElement[] = screen.getAllByRole("Theme-Select");
    expect(themeState).toBe("body-theme1");
    expect(testToggle[0]).toHaveValue("body-theme1");
    act(() => {
      testToggle[0].click();
    });
    //expect(testToggle[0]).toHaveValue("body-theme2");
  });
  test("Changed body name", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(themeState).toBe("body-theme1");
    const testToggle: HTMLElement[] = screen.getAllByRole("Theme-Select");
    act(() => {
      testToggle[0].click();
    });
    //expect(themeState).toBe("body-theme2");
  });
});

describe("Link Button Tests", () => {
  test("Link Button", () => {
    render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <LinkButton
          to="/"
          label="Home"
          classNameGive="Button-link"
        ></LinkButton>
      </HashRouter>
    );
    const testLinkButton: HTMLElement[] = screen.getAllByRole("Button-link");
    act(() => {
      testLinkButton[0].click();
    });
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
  });
});

/*
describe("Slider Question Tests", () => {
  test("Slider Question", () => {
    render(
      <SliderQuestion
        value={50}
        onChange={() => 50}
        label="Question: "
        question={"questionBody"}
      ></SliderQuestion>
    );
    const testLinkButton: HTMLElement[] = screen.getAllByRole(
      "DetailedQuestions-slider"
    );
    const testLinkButton: HTMLElement[] = screen.getAllByRole("form");
    act(() => {
      testLinkButton[0].click();
    });
    const linkElement = screen.getByText("50");
    expect(linkElement).toBeInTheDocument();
  });
});
*/
