"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
var _io = require("react-icons/io");
var _md = require("react-icons/md");
var _ai = require("react-icons/ai");
var _cg = require("react-icons/cg");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Ensure to import the CSS file

function Modal(_ref) {
  let {
    isOpen,
    onClose,
    title,
    footer,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `modal-overlay ${isOpen ? "fade-in" : "fade-out"}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `modal-content ${isOpen ? "show" : ""}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/_react.default.createElement(_cg.CgClose, {
    className: "modal-close",
    onClick: onClose
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, children), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, footer)));
}
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  footer: _propTypes.default.node,
  children: _propTypes.default.node.isRequired
};
var _default = exports.default = Modal;