"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Accordion.css");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// src/stories/Accordion.jsx

const AccordionSection = _ref => {
  let {
    title,
    content,
    isOpen,
    onClick,
    hiderBorderBottom
  } = _ref;
  const contentRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-section",
    style: {
      borderBottom: hiderBorderBottom && "0px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-header",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-name"
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow-icon ${isOpen ? "rotate" : ""}`
  }, /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowRight, null))), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentRef,
    className: `accordion-content ${isOpen ? "open" : ""}`,
    style: {
      maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px"
    }
  }, content));
};
const Accordion = _ref2 => {
  let {
    sections
  } = _ref2;
  const [openIndex, setOpenIndex] = (0, _react.useState)(null);
  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion"
  }, sections.map((section, index) => /*#__PURE__*/_react.default.createElement(AccordionSection, {
    key: index,
    title: section.title,
    content: section.content,
    isOpen: openIndex === index,
    onClick: () => handleToggle(index),
    hiderBorderBottom: sections.length === index + 1
  })));
};
Accordion.propTypes = {
  sections: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    content: _propTypes.default.node.isRequired
  })).isRequired
};
var _default = exports.default = Accordion;