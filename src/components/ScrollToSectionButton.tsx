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
    const navbar = document.getElementById("navbar"); // Get navbar element
    const footer = document.getElementById("footer"); // Get footer element
    if (targetSection && navbar && footer) {
      // Check if targetSection, navbar, and footer exist
      const navbarHeight = navbar.offsetHeight; // Get navbar height
      const footerHeight = footer.offsetHeight; // Get footer height
      const targetSectionTop =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const targetSectionHeight = targetSection.offsetHeight;

      // Determine the height of the viewport
      const viewportHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      // Calculate the distance to scroll
      const scrollDistance = targetSectionTop - navbarHeight;

      // Calculate the bottom position of the viewport
      const viewportBottom = window.scrollY + viewportHeight;

      // Calculate the total height from the top of the section to the bottom of the viewport
      const totalHeightToFooter =
        targetSectionTop + targetSectionHeight + footerHeight;

      // Check if the footer will be visible after scrolling
      if (totalHeightToFooter > viewportBottom) {
        window.scrollTo({
          top: scrollDistance,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: targetSectionTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <button className={className} onClick={scrollToSection}>
      <strong>{content}</strong>
    </button>
  );
}

export default ScrollToSectionButton;