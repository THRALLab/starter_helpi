import { render, screen } from "@testing-library/react";
import {
  darkModeState,
  updateDarkModeState,
} from "../Components/DarkModeParent";
import { bodyClassName, DarkModeToggle } from "../Components/DarkModeToggle";
import { act } from "react-dom/test-utils";

describe("Components Tests", () => {
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
});
