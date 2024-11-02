"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Input.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/stories/Input.jsx

// Optional: Include your CSS styles

const Input = _ref => {
  let {
    size,
    value,
    onChange,
    placeholder
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("input", {
    className: `my-input ${size}` // Add class based on size
    ,
    value: value,
    onChange: onChange,
    placeholder: placeholder
  });
};
Input.propTypes = {
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  // Accepts 'small' or 'large'
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string
};
Input.defaultProps = {
  size: "medium",
  // Default size
  placeholder: "Enter text..." // Default placeholder
};
var _default = exports.default = Input;