import { Heading } from "../heading/heading";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./carousel.scss";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Heading biggerHeading="Our Tourist Destination" smallerHeading="Tour Packages">
        Extraordinary natural beauty, enjoy the rich culture,
        <br /> and experience the friendliness of the local people.
      </Heading>

      <div className="carousel">
        <div className="carousel-inner">
          {/* Show only the current slide */}
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              key={index}
            >
              <img src={slide.image} alt={`Slide ${index}`} />
              <div className="rating-box">
                <p className="carousel-content tour-days">7 days</p>
                <p className="carousel-content rating">
                  <FaStar style={{ color: "gold" }} /> 4.9
                </p>
              </div>
              <p className="carousel-content carousel-message">Bali Tour package</p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button onClick={prevSlide} className="carousel-button prev">
          <FaArrowLeftLong />
        </button>
        <button onClick={nextSlide} className="carousel-button next">
          <FaArrowRightLong />
        </button>
      </div>
    </>
  );
}
