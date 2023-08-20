"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCommonProps = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _de = _interopRequireDefault(require("date-fns/locale/de"));
var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CalendarIcon = function CalendarIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 4.5V3a.75.75 0 0 1 1.5 0v1.5H21V21H3V4.5h1.5V3A.75.75 0 0 1 6 3v1.5h1.5V3A.75.75 0 0 1 9 3v1.5h6V3a.75.75 0 0 1 1.5 0v1.5H18zM4.5 9v10.5h15V9h-15zm0-1.5h15V6h-15v1.5zM6.75 18a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm4.5 6a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm4.5 6a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5zm0-3a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5h-1.5z",
      fill: "currentColor"
    })
  }));
};
CalendarIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var localeMap = {
  en: _enUS.default,
  'de-CH': _de.default,
  'de-DE': _de.default
};
var useCommonProps = function useCommonProps(locale) {
  var theme = (0, _material.useTheme)();
  return {
    locale: localeMap[locale],
    components: {
      OpenPickerIcon: function OpenPickerIcon() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(CalendarIcon, {
          style: {
            color: theme.colors.base.black
          },
          color: "inherit",
          "data-testid": "datepicker.calendarIcon"
        });
      }
    },
    desktopModeMediaQuery: theme.breakpoints.up('xs')
  };
};
exports.useCommonProps = useCommonProps;