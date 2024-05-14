import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import "./App.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { url } from "inspector";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
type ChangeImagesProps = {
  images: {
    url: string;
    alt: string;
  }[];
  profession: string[];
};

export function ChangeImages({
  images,
  profession,
}: ChangeImagesProps): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);
  const [profIndex, setProfIndex] = useState(0);
  function showNextProf() {
    setProfIndex((index) => {
      if (index === profession.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevProf() {
    setProfIndex((index) => {
      if (index === 0) return profession.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  function handleClick() {
    showNextImage();
    showNextProf();
  }
  function handleClick2() {
    showPrevImage();
    showPrevProf();
  }

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          display: "flex",
          overflow: "hidden",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={handleClick2}
        className="img-slider-btn"
        style={{ left: 100, bottom: 190 }}
        aria-label="Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={handleClick}
        className="img-slider-btn"
        style={{ right: 100, bottom: 190 }}
        aria-label="Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          color: "white",
        }}
      >
        {profession[profIndex]}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "9rem",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`Image ${index + 1}`}
            onClick={() => {
              setImageIndex(index);
              setProfIndex(index);
            }}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
