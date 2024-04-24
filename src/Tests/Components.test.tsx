import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { HashRouter } from "react-router-dom";
import { themeState, updateThemeState } from "../Components/ThemeParent";
import { ThemeSelect } from "../Components/ThemeSelect";
import Home from "../Pages/Home";

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
    /*
    render(
      <HashRouter>
        <LinkButton to="/" label="Home"></LinkButton>
      </HashRouter>
    );
    const testLinkButton: HTMLElement[] = screen.getAllByRole("Button-link");
    act(() => {
      testLinkButton[0].click();
    });
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
    */
  });
});
