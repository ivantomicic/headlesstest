"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    // The border' color is fixed by default, so we change the border color to currentColor and apply the correct
    // colors from the parent component
    root: {
      marginTop: 0,
      // fix issue causing the line between dots to be slightly misaligned with their center
      marginLeft: "calc(".concat(theme.spacing(1), " - 1px)"),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(1),
      borderLeftColor: 'currentColor',
      borderWidth: 2
    },
    transition: {
      color: 'initial'
    }
  };
});
var StepContent = function StepContent(props) {
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.StepContent, _objectSpread({
    classes: classes
  }, props));
};
exports.StepContent = StepContent;