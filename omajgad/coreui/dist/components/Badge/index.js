"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _index = require("./index.styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SuccessIcon = function SuccessIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 13.94l4.72-4.72a.75.75 0 0 1 1.06 1.06l-5.78 5.78-2.78-2.78a.75.75 0 1 1 1.06-1.06l1.72 1.72zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
      fill: "currentColor"
    })
  }));
};
SuccessIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.291 13.774l-.088-3.802a1.91 1.91 0 0 0-.002-.091 1.655 1.655 0 0 1-.003-.074c0-.505.313-.807.807-.807.49 0 .797.302.797.807 0 .044 0 .11-.005.165l-.083 3.802c-.016.467-.258.741-.714.741-.456 0-.698-.274-.709-.741zm-.186 2.548c0-.483.395-.862.895-.862s.895.379.895.862c0 .484-.395.863-.895.863s-.895-.38-.895-.863zM22.237 21H1.763L12 1.379 22.237 21zm-2.474-1.5L12 4.621 4.237 19.5h15.526z",
      fill: "currentColor"
    })
  }));
};
WarningIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ErrorIcon = function ErrorIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.72 7.72a.75.75 0 0 1 1.06 0L12 10.94l3.22-3.22a.75.75 0 0 1 1.06 1.06L13.06 12l3.22 3.22a.75.75 0 0 1-1.06 1.06L12 13.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L10.94 12 7.72 8.78a.75.75 0 0 1 0-1.06zM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
      fill: "currentColor"
    })
  }));
};
ErrorIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var InfoIcon = function InfoIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.851 15.892c.04-.163.099-.38.178-.648l1.038-3.64c.011-.042.02-.084.025-.126a.459.459 0 0 0 .017-.119c0-.216-.073-.35-.22-.403-.146-.053-.413-.087-.801-.103v-.427c.326-.021.799-.064 1.418-.127a21.298 21.298 0 0 0 1.326-.174l.743-.134-1.343 4.612c-.112.395-.188.67-.228.823-.101.39-.152.643-.152.76 0 .115.028.192.085.229a.373.373 0 0 0 .185.047c.175 0 .392-.14.65-.42.26-.279.487-.572.684-.877l.38.23c-.563.774-.993 1.296-1.291 1.566-.49.443-1.014.664-1.57.664-.316 0-.6-.09-.854-.269-.247-.185-.371-.464-.371-.839 0-.131.034-.34.101-.625zm4.061-9.2c.225.21.338.466.338.767 0 .3-.113.559-.338.775a1.154 1.154 0 0 1-.819.317c-.32 0-.596-.106-.827-.317a1.038 1.038 0 0 1-.338-.775c0-.3.113-.557.338-.768.23-.21.507-.316.827-.316.321 0 .594.105.82.316zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
      fill: "currentColor"
    })
  }));
};
InfoIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var getIcon = function getIcon(status) {
  switch (status) {
    case 'success':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(SuccessIcon, {});
    case 'warning':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(WarningIcon, {});
    case 'error':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorIcon, {});
    case 'muted':
    case 'info':
    case 'primary':
    default:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(InfoIcon, {});
  }
};
var Badge = function Badge(_ref) {
  var children = _ref.children,
    icon = _ref.icon,
    color = _ref.color,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? 'warning' : _ref$status,
    className = _ref.className,
    contentClassName = _ref.contentClassName;
  var _useStyles = (0, _index.useStyles)(),
    classes = _useStyles.classes;
  var selectedColor = color ? color : status;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames2.default)(classes.badge, className, classes[selectedColor], _defineProperty({}, classes.withIcon, !!icon)),
    "data-testid": "badge",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames2.default)(classes.wrapper),
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "data-testid": "icon",
        className: classes.icon,
        children: typeof icon === 'boolean' ? getIcon(selectedColor) : icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames2.default)(classes.label, contentClassName),
        children: children
      })]
    })
  });
};
exports.Badge = Badge;