import { useState } from "react";

let darkMode = false;

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [Label, setLabel] = useState("☀️");

  const handleToggle = () => {
    setIsDark(!isDark);
    setLabel(isDark ? "🌙" : "☀️");
    darkMode = isDark;
    console.log("Mode: " + (darkMode? "Dark" : "Light"));

    document.body.style.backgroundColor = isDark ? "black" : "white";
    document.body.style.color = isDark ? "white" : "black";
    document.body.style.transition = "all 0.75s";
  };

  return (
    <button className="darkModeToggle"
      onClick={handleToggle}
      style={{
        height: "30px",
        width: "100px",
        borderRadius: "15px",
        backgroundColor: isDark ? "white" : "black",
        color: isDark ? "white" : "black",
      }}
    >{Label}</button>
  );

};

export { darkMode };