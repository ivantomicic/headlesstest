"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentContainer = void 0;
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Simply using Container without maxWidth and gutters includes padding.
 */
var ContentContainer = function ContentContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Container, {
    maxWidth: false,
    children: children
  });
};
exports.ContentContainer = ContentContainer;