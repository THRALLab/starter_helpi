// PlanetComponent.tsx
import React from "react";
import Planet1Image from "./Spinning_Mars.gif"; // Import planet 1 image
import Planet2Image from "./planet3.jpg"; // Import planet 2 image
import MilkyWayImage from "./milkyway.jpg";
import ShootingStar from "./ShootingStar.jpg";

const PlanetComponent: React.FC = () => {
  return (
    <div className="planet-container">
      <img
        src={Planet1Image}
        alt="Planet 1"
        className="planet"
        style={{
          position: "absolute",
          top: "900px",
          left: "3%",
          width: "320px", // Adjust size as necessary
          height: "320px",
        }}
      />
      <img
        src={Planet2Image}
        alt="Planet 2"
        className="planet"
        style={{
          position: "absolute",
          top: "900px",
          left: "80%",
          width: "300px", // Adjust size as necessary
          height: "320px",
        }}
      />

      <img
        src={MilkyWayImage}
        alt="Planet 2"
        className="planet"
        style={{
          position: "absolute",
          top: "1280px",
          left: "80%",
          width: "300px", // Adjust size as necessary
          height: "200px",
        }}
      />

      <img
        src={ShootingStar}
        alt="Planet 2"
        className="planet"
        style={{
          position: "absolute",
          top: "1280px",
          left: "0%",
          width: "300px", // Adjust size as necessary
          height: "150px",
        }}
      />

      {/* Add more planet images as needed */}
    </div>
  );
};

export default PlanetComponent;
