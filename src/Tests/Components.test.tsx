import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { HashRouter } from "react-router-dom";
import {
  darkModeState,
  updateDarkModeState,
} from "../Components/DarkModeParent";
import { bodyClassName, DarkModeToggle } from "../Components/DarkModeToggle";
import Home from "../Pages/Home";
import { LinkButton } from "../Components/LinkButton";
import { Route, Routes } from "react-router-dom";

describe("Dark Mode Tests", () => {
  test("Dark Mode Parent", () => {
    expect(darkModeState).toBe(false);
    updateDarkModeState();
    expect(darkModeState).toBe(true);
  });
  test("Dark Mode Toggle", () => {
    render(<DarkModeToggle></DarkModeToggle>);
    const testToggle: HTMLElement[] = screen.getAllByRole("switch");
    expect(testToggle[0].id).toBe("dark-mode-switch");
    expect(bodyClassName).toBe("body");
    expect(testToggle[0]).toBeChecked();
    act(() => {
      testToggle[0].click();
    });
    expect(testToggle[0]).not.toBeChecked();
    act(() => {
      testToggle[0].click();
    });
    expect(testToggle[0]).toBeChecked();
  });
  test("Changed body name", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(bodyClassName).toBe("body-dark");
    const testToggle: HTMLElement[] = screen.getAllByRole("switch");
    expect(testToggle[0].id).toBe("dark-mode-switch");
    act(() => {
      testToggle[0].click();
    });
    expect(bodyClassName).toBe("body");
  });
});

describe("Link Button Tests", () => {
  test("Link Button", () => {
    
    render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
        <LinkButton to="/" label="Home"></LinkButton>
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
