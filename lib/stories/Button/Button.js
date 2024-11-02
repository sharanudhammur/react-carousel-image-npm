"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Add your CSS styles here

const Button = _ref => {
  let {
    label,
    onClick,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "my-button",
    style: style,
    onClick: onClick
  }, label);
};
Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object
};
var _default = exports.default = Button;