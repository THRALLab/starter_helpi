import { useState } from "react";

let darkMode = false;

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [Label, setLabel] = useState("Dark Mode" || "Light Mode");

  const handleToggle = () => {
    setIsDark(!isDark);
    setLabel(isDark ? "Dark Mode" : "Light Mode");
    darkMode = isDark;
    console.log("Mode: " + (darkMode? "Dark" : "Light"));
  };

  return (
    <button className="darkModeToggle"
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

export { darkMode };