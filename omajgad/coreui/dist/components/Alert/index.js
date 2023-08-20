"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "onClose", "severity", "muted", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.78 17.78a.75.75 0 0 1-1.06 0L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 1 1 1.06-1.06L12 10.94l4.72-4.72a.75.75 0 0 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 0 1 0 1.06z",
      fill: "currentColor"
    })
  }));
};
CrossIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Alert = function Alert(_ref) {
  var children = _ref.children,
    onClose = _ref.onClose,
    severity = _ref.severity,
    muted = _ref.muted,
    className = _ref.className,
    alertProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, _objectSpread(_objectSpread({
    className: (0, _classnames.default)(className, {
      muted: muted || severity === 'muted'
    }),
    severity: severity === 'muted' ? 'info' : severity
  }, alertProps), {}, {
    action: onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      size: "small",
      onClick: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CrossIcon, {})
    }),
    children: children
  }));
};
exports.Alert = Alert;