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
};
export function ChangeImages({ images }: ChangeImagesProps): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);
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
  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
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
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 170, bottom: 150 }}
        aria-label="Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 170, bottom: 150 }}
        aria-label="Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "13.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`Previous Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
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
