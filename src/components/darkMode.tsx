import { useState } from "react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [Label, setLabel] = useState("Dark Mode" || "Light Mode");

  const handleToggle = () => {
    setIsDark(!isDark);
    setLabel(isDark ? "Light Mode" : "Dark Mode");
    
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        height: "30px",
        width: "100px",
        borderRadius: "15px",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >{Label}</button>
  );
};