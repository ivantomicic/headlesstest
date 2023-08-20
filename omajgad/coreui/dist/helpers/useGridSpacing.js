"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGridSpacing = useGridSpacing;
var _material = require("@mui/material");
/**
 * Returns responsive spacing according to Grid gutter section https://zeroheight.com/6tcgsmy4n/p/32c727-layout/t/18b68c
 */

function useGridSpacing() {
  var theme = (0, _material.useTheme)();
  var isXS = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  var isSM = (0, _material.useMediaQuery)(theme.breakpoints.between('sm', 'lg'));
  return isXS && 2 || isSM && 3 || 4;
}