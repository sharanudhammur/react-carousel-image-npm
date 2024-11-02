"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _Button = _interopRequireDefault(require("./stories/Button/Button"));
var _Input = _interopRequireDefault(require("./stories/Input/Input"));
var _Accordion = _interopRequireDefault(require("./stories/Accordion/Accordion"));
var _Modal = _interopRequireDefault(require("./stories/Modal/Modal"));
var _react = require("react");
var _ImageCarousel = _interopRequireDefault(require("./stories/ImageCarousel/ImageCarousel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  const sections = [{
    title: "Section 1",
    content: /*#__PURE__*/React.createElement("p", null, "This is the content of section 1")
  }, {
    title: "Section 2",
    content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here is some content for section 2"), /*#__PURE__*/React.createElement("p", null, "It can contain anything, even nested components!"))
  }, {
    title: "Section 3",
    content: /*#__PURE__*/React.createElement("p", null, "Content for section 3 goes here.")
  }];
  const [isOpen, setisOpen] = (0, _react.useState)(false);
  const images = ["https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg", "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg", "https://i.ytimg.com/vi/jaC-owuMfMc/sddefault.jpg"];
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement(_Button.default, {
    size: "lg",
    onClick: () => setisOpen(!isOpen),
    label: "hello"
  }), /*#__PURE__*/React.createElement(_Button.default, {
    size: "lg",
    onClick: () => setisOpen(!isOpen),
    label: "hello"
  }), /*#__PURE__*/React.createElement(_Button.default, {
    size: "lg",
    onClick: () => setisOpen(!isOpen),
    label: "hello"
  }), /*#__PURE__*/React.createElement(_Input.default, {
    size: "small"
  }), /*#__PURE__*/React.createElement(_Input.default, {
    size: "medium"
  }), /*#__PURE__*/React.createElement(_Input.default, {
    size: "large"
  }), /*#__PURE__*/React.createElement(_Accordion.default, {
    sections: sections
  }), /*#__PURE__*/React.createElement(_Modal.default, {
    isOpen: isOpen,
    onClose: () => setisOpen(!isOpen),
    title: "Hello",
    footer: /*#__PURE__*/React.createElement(_Button.default, {
      label: "close",
      onClick: () => setisOpen(!isOpen)
    }, "Confirm")
  }, /*#__PURE__*/React.createElement("div", null, "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries")), /*#__PURE__*/React.createElement("div", {
    className: "image-carosal-example"
  }, /*#__PURE__*/React.createElement(_ImageCarousel.default, {
    images: images,
    showIndicators: true
    // autoplay={true}
    ,
    autoplayInterval: 1500,
    infiniteLoop: false
  }))));
}
var _default = exports.default = App;