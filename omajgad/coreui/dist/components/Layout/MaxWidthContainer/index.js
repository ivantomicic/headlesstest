"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxWidthContainer = void 0;
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Simply using Container with maxWidth and gutters includes padding within the maxWidth.
 * This component properly sets maxWidth for children, but keeps the desired padding outside.
 */

var useFullHeightStyles = (0, _mui.makeStyles)()(function () {
  return {
    root: {
      height: '100%'
    }
  };
});
var MaxWidthContainer = function MaxWidthContainer(_ref) {
  var children = _ref.children,
    fullHeight = _ref.fullHeight,
    dataTestId = _ref['data-testid'];
  var _useFullHeightStyles = useFullHeightStyles(),
    fullHeightClasses = _useFullHeightStyles.classes;
  var containerClass = fullHeight ? fullHeightClasses : undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Container, {
    maxWidth: false,
    classes: containerClass,
    "data-testid": dataTestId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Container, {
      maxWidth: "lg",
      disableGutters: true,
      classes: containerClass,
      children: children
    })
  });
};
exports.MaxWidthContainer = MaxWidthContainer;