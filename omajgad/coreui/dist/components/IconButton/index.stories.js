"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButtonTertiary = exports.IconButtonSecondary = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _addonActions = require("@storybook/addon-actions");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Pen = function Pen(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.81 14.25l1.94 1.94L21.22 4.72a.75.75 0 1 1 1.06 1.06L9.75 18.31l-4.06-4.06L18.22 1.72a.75.75 0 1 1 1.06 1.06L7.81 14.25zm-2.598 2.487l-1.026 3.077 3.077-1.026a.75.75 0 0 1 .474 1.424l-5.923 1.974 1.974-5.923a.75.75 0 0 1 1.424.474z",
      fill: "currentColor"
    })
  }));
};
Pen.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/IconButton',
  component: _.IconButton
};
exports.default = _default;
var IconButtonSecondary = function IconButtonSecondary(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.IconButton, _objectSpread(_objectSpread({}, args), {}, {
    variant: "secondary",
    onClick: (0, _addonActions.action)('onClick'),
    size: "large",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Pen, {})
  }));
};
exports.IconButtonSecondary = IconButtonSecondary;
var IconButtonTertiary = function IconButtonTertiary(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.IconButton, _objectSpread(_objectSpread({}, args), {}, {
    variant: "tertiary",
    onClick: (0, _addonActions.action)('onClick'),
    size: "large",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Pen, {})
  }));
};
exports.IconButtonTertiary = IconButtonTertiary;