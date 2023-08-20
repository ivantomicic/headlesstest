"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _AdapterDateFns = require("@mui/x-date-pickers/AdapterDateFns");
var _useCommonProps2 = require("./../common/useCommonProps");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["locale"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DatePicker = function DatePicker(_ref) {
  var _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? 'de-CH' : _ref$locale,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useCommonProps = (0, _useCommonProps2.useCommonProps)(locale),
    localeFns = _useCommonProps.locale,
    components = _useCommonProps.components,
    desktopModeMediaQuery = _useCommonProps.desktopModeMediaQuery;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDateFns.AdapterDateFns,
    locale: localeFns,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.DatePicker, _objectSpread({
      mask: '__.__.____',
      components: components,
      desktopModeMediaQuery: desktopModeMediaQuery,
      inputFormat: "dd.MM.yyyy"
    }, rest))
  });
};
exports.DatePicker = DatePicker;