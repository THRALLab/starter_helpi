import React from "react";
import "../styles/ScrollToSectionButton.css";

function ScrollToSectionButton({
  className,
  section,
  content,
}: {
  className: string;
  section: string;
  content: string;
}): JSX.Element {
  const scrollToSection = () => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={className} onClick={scrollToSection}>
      <strong>{content}</strong>
    </button>
  );
}

export default ScrollToSectionButton;
