import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ImageCarousel.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function ImageCarousel({
  images,
  showArrowButtons = true,
  showIndicators = true,
  autoplay = false,
  autoplayInterval = 3000, // Default interval of 3 seconds
  infiniteLoop = true // New prop for enabling/disabling infinite loop
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [infiniteLoopState, _] = useState(autoplay ? true : infiniteLoop);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const totalImages = images.length;

  // Function to handle the transition to the next image
  const nextImage = () => {
    if (infiniteLoopState || currentIndex + 1 !== totalImages) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle the transition to the previous image
  const prevImage = () => {
    if (infiniteLoopState || currentIndex !== 0) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Reset the position when reaching the cloned images
  useEffect(() => {
    if (currentIndex === totalImages) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Reset after the transition duration (500ms in this case)
    }

    if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages - 1);
      }, 500);
    }
  }, [currentIndex, totalImages]);

  // Autoplay effect
  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    }

    return () => stopAutoplay();
  }, [autoplay, autoplayInterval]);

  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval
    autoplayRef.current = setInterval(nextImage, autoplayInterval);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Handlers for mouse events to pause/resume autoplay
  const handleMouseEnter = () => {
    if (autoplay) stopAutoplay();
  };

  const handleMouseLeave = () => {
    if (autoplay) startAutoplay();
  };

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showArrowButtons && (
        <button
          className="carousel-button left"
          onClick={prevImage}
          disabled={!infiniteLoopState && currentIndex === 0}
        >
          <MdKeyboardArrowLeft />
        </button>
      )}
      <div className="carousel-image-container">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex + 1) * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {/* Cloned last image for infinite loop */}
          <img
            src={images[totalImages - 1]}
            alt={`Cloned Image ${totalImages}`}
            className="carousel-image"
          />
          {/* Original images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
          {/* Cloned first image for infinite loop */}
          <img
            src={images[0]}
            alt="Cloned Image 1"
            className="carousel-image"
          />
        </div>
      </div>

      {showArrowButtons && (
        <button
          className="carousel-button right"
          onClick={nextImage}
          disabled={!infiniteLoopState && totalImages === currentIndex + 1}
        >
          <MdKeyboardArrowRight />
        </button>
      )}
      {showIndicators && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentIndex % totalImages ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  showIndicators: PropTypes.bool,
  showArrowButtons: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  infiniteLoop: PropTypes.bool
};

export default ImageCarousel;
