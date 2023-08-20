"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIllustration = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["foregroundColor", "backgroundColor", "fontSize"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useStyles = (0, _mui.makeStyles)()(function (theme, props) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(128),
      '.foreground': {
        fill: props.foregroundColor
      },
      '.background': {
        fill: props.backgroundColor
      }
    },
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(64)
    },
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(128)
    },
    fontSizeInherit: {
      fontSize: 'inherit'
    }
  };
});
var SvgIllustration = function SvgIllustration(_ref) {
  var _cx;
  var foregroundColor = _ref.foregroundColor,
    backgroundColor = _ref.backgroundColor,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 'large' : _ref$fontSize,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles({
      foregroundColor: foregroundColor,
      backgroundColor: backgroundColor
    }),
    classes = _useStyles.classes,
    cx = _useStyles.cx;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SvgIcon, _objectSpread({
    className: cx(classes.root, (_cx = {}, _defineProperty(_cx, classes['fontSizeLarge'], fontSize === 'inherit' || fontSize === 'large'), _defineProperty(_cx, classes['fontSizeSmall'], fontSize === 'small'), _defineProperty(_cx, classes['fontSizeInherit'], fontSize === 'inherit'), _cx)),
    viewBox: "0 0 128 128"
  }, props));
};
exports.SvgIllustration = SvgIllustration;