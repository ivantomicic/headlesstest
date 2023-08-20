"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoShort = void 0;
var _mui = require("tss-react/mui");
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _logoVariants = require("./../logoVariants");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["variant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useStyles = (0, _mui.makeStyles)()(function (_, _ref) {
  var variant = _ref.variant;
  return {
    root: {
      color: _logoVariants.logoVariantColors[variant || 'blue']
    }
  };
});
var LogoShort = function LogoShort(_ref2) {
  var variant = _ref2.variant,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useStyles = useStyles({
      variant: variant
    }),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.default, _objectSpread(_objectSpread({
    classes: classes
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      d: "M-1.84741111e-13,10.0795738 L-1.84741111e-13,0 L7.67969444,0 L7.67969444,10.0795738 L-1.84741111e-13,10.0795738 Z M9.1198633,24 L9.1198633,16.3199035 L14.8797346,16.3199035 L14.8797346,24 L9.1198633,24 Z M16.3199035,24 L16.3199035,16.3199035 L24,16.3199035 L24,24 L16.3199035,24 Z M-1.84741111e-13,24 L-1.84741111e-13,11.5201447 L7.67969444,11.5201447 L7.67969444,24 L-1.84741111e-13,24 Z M9.1198633,14.8797346 L9.1198633,0 L23.9995979,0 L23.9995979,14.8797346 L9.1198633,14.8797346 Z"
    })
  }));
};
exports.LogoShort = LogoShort;