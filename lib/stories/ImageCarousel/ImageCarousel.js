"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./ImageCarousel.css");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ImageCarousel(_ref) {
  let {
    images,
    showArrowButtons = true,
    showIndicators = true,
    autoplay = false,
    autoplayInterval = 3000,
    // Default interval of 3 seconds
    infiniteLoop = true // New prop for enabling/disabling infinite loop
  } = _ref;
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
  const [isTransitioning, setIsTransitioning] = (0, _react.useState)(false);
  const [infiniteLoopState, _] = (0, _react.useState)(autoplay ? true : infiniteLoop);
  const trackRef = (0, _react.useRef)(null);
  const autoplayRef = (0, _react.useRef)(null);
  const totalImages = images.length;

  // Function to handle the transition to the next image
  const nextImage = () => {
    if (infiniteLoopState || currentIndex + 1 !== totalImages) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Function to handle the transition to the previous image
  const prevImage = () => {
    if (infiniteLoopState || currentIndex !== 0) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Reset the position when reaching the cloned images
  (0, _react.useEffect)(() => {
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
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, showArrowButtons && /*#__PURE__*/_react.default.createElement("button", {
    className: "carousel-button left",
    onClick: prevImage,
    disabled: !infiniteLoopState && currentIndex === 0
  }, /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowLeft, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-image-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: trackRef,
    className: "carousel-track",
    style: {
      transform: `translateX(-${(currentIndex + 1) * 100}%)`,
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: images[totalImages - 1],
    alt: `Cloned Image ${totalImages}`,
    className: "carousel-image"
  }), images.map((image, index) => /*#__PURE__*/_react.default.createElement("img", {
    key: index,
    src: image,
    alt: `Image ${index + 1}`,
    className: "carousel-image"
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: images[0],
    alt: "Cloned Image 1",
    className: "carousel-image"
  }))), showArrowButtons && /*#__PURE__*/_react.default.createElement("button", {
    className: "carousel-button right",
    onClick: nextImage,
    disabled: !infiniteLoopState && totalImages === currentIndex + 1
  }, /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowRight, null)), showIndicators && /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-indicators"
  }, images.map((_, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index,
    className: `indicator ${index === currentIndex % totalImages ? "active" : ""}`,
    onClick: () => setCurrentIndex(index)
  }))));
}
ImageCarousel.propTypes = {
  images: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  showIndicators: _propTypes.default.bool,
  showArrowButtons: _propTypes.default.bool,
  autoplay: _propTypes.default.bool,
  autoplayInterval: _propTypes.default.number,
  infiniteLoop: _propTypes.default.bool
};
var _default = exports.default = ImageCarousel;