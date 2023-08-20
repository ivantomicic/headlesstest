"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Document = function Document(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 21V9.75a.75.75 0 0 1 1.5 0V22.5h-15v-21h6.75a.75.75 0 0 1 0 1.5H6v18h12zm1.28-14.78a.75.75 0 0 1-.53 1.28H13.5V2.25a.75.75 0 0 1 1.28-.53l4.5 4.5zM15 4.06V6h1.94L15 4.06z",
      fill: "currentColor"
    })
  }));
};
Document.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ImagePreview = (0, _material.styled)('img')(function (_ref) {
  var theme = _ref.theme;
  return {
    width: 'inherit',
    height: 'inherit',
    borderRadius: theme.spacing(0.5),
    objectFit: 'cover'
  };
});
var ListItemIcon = function ListItemIcon(_ref2) {
  var file = _ref2.file,
    showImagePreviews = _ref2.showImagePreviews;
  if (showImagePreviews && file.url && file.type.startsWith('image')) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagePreview, {
      src: file.url,
      alt: file.name,
      "data-testid": "list-item-image-preview"
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Document, {
    "data-testid": "list-item-document-icon"
  });
};
exports.ListItemIcon = ListItemIcon;