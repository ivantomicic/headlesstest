"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVerticalPaddingStyles = exports.usePaddingTopStyles = exports.usePaddingBottomStyles = exports.useHorizontalPaddingStyles = void 0;
var _mui = require("tss-react/mui");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var usePaddingTopStyles = (0, _mui.makeStyles)()(function (theme) {
  var _topPaddingStyle;
  return {
    topPaddingStyle: (_topPaddingStyle = {
      paddingTop: theme.spacing(2)
    }, _defineProperty(_topPaddingStyle, theme.breakpoints.up('sm'), {
      paddingTop: theme.spacing(3)
    }), _defineProperty(_topPaddingStyle, theme.breakpoints.up('md'), {
      paddingTop: theme.spacing(4)
    }), _topPaddingStyle)
  };
});
exports.usePaddingTopStyles = usePaddingTopStyles;
var usePaddingBottomStyles = (0, _mui.makeStyles)()(function (theme) {
  var _bottomPaddingStyle;
  return {
    bottomPaddingStyle: (_bottomPaddingStyle = {
      paddingBottom: theme.spacing(2)
    }, _defineProperty(_bottomPaddingStyle, theme.breakpoints.up('sm'), {
      paddingBottom: theme.spacing(3)
    }), _defineProperty(_bottomPaddingStyle, theme.breakpoints.up('md'), {
      paddingBottom: theme.spacing(4)
    }), _bottomPaddingStyle)
  };
});
exports.usePaddingBottomStyles = usePaddingBottomStyles;
var useVerticalPaddingStyles = (0, _mui.makeStyles)()(function (theme) {
  var _verticalPaddingStyle;
  return {
    verticalPaddingStyle: (_verticalPaddingStyle = {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }, _defineProperty(_verticalPaddingStyle, theme.breakpoints.up('sm'), {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }), _defineProperty(_verticalPaddingStyle, theme.breakpoints.up('md'), {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }), _verticalPaddingStyle)
  };
});
exports.useVerticalPaddingStyles = useVerticalPaddingStyles;
var useHorizontalPaddingStyles = (0, _mui.makeStyles)()(function (theme) {
  var _horizontalPaddingSty;
  return {
    horizontalPaddingStyle: (_horizontalPaddingSty = {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, _defineProperty(_horizontalPaddingSty, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }), _defineProperty(_horizontalPaddingSty, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }), _horizontalPaddingSty)
  };
});
exports.useHorizontalPaddingStyles = useHorizontalPaddingStyles;