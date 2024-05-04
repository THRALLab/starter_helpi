import { useState } from "react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    ></button> // Added closing tag for the button element
  );
};