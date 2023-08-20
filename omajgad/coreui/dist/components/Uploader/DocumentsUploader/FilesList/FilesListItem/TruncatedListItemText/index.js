"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncatedListItemText = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _reactMiddleEllipsis = _interopRequireDefault(require("react-middle-ellipsis"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TruncatedListItemText = function TruncatedListItemText(_ref) {
  var name = _ref.name,
    labelId = _ref.labelId;
  var fileExtensionIndex = name.lastIndexOf('.') + 1;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMiddleEllipsis.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
      variant: "body2",
      component: "span",
      id: labelId,
      title: name,
      "data-testid": "files-list-item-name",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: name.slice(0, 3)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "ellipseMe",
        children: name.slice(3, fileExtensionIndex)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: name.slice(fileExtensionIndex)
      })]
    })
  });
};
exports.TruncatedListItemText = TruncatedListItemText;