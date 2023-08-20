"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOnBlurValueChange = exports.NumberField = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNumberFormat = require("react-number-format");
var _NumberFieldWrapper = require("./NumberFieldWrapper");
var _formatters = require("./../../../helpers/formatters");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["ref", "decimalsAllowed", "decimalScale", "onValueChange", "onBlur", "noThousandSeparators", "locale"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getOnBlurValueChange = function getOnBlurValueChange(value, locale) {
  var decimalSymbol = (0, _formatters.getDecimalSymbol)(locale);
  if (decimalSymbol && value.indexOf(decimalSymbol) >= 0) {
    return undefined;
  }
  var thousandSymbol = (0, _formatters.getThousandSeparatorSymbol)(locale);
  var replaceThousandSymbol = new RegExp("\\".concat(thousandSymbol), 'g');
  var sanitized = value.replace(replaceThousandSymbol, '');
  var floatValue = parseFloat(sanitized);
  return {
    value: "".concat(sanitized, ".00"),
    // non formatted value as numeric string 23234235.56
    floatValue: floatValue,
    // floating point representation. For big numbers it can have exponential syntax
    formattedValue: "".concat((0, _formatters.formatSimpleCurrency)(floatValue, locale)).concat(decimalSymbol, "00") // value after applying formatting
  };
};

/**
 * use onValueChange for onChange events.
 */
exports.getOnBlurValueChange = getOnBlurValueChange;
var NumberField = function NumberField(_ref) {
  var ref = _ref.ref,
    decimalsAllowed = _ref.decimalsAllowed,
    decimalScale = _ref.decimalScale,
    onValueChange = _ref.onValueChange,
    onBlurProp = _ref.onBlur,
    _ref$noThousandSepara = _ref.noThousandSeparators,
    noThousandSeparators = _ref$noThousandSepara === void 0 ? false : _ref$noThousandSepara,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? 'de-CH' : _ref$locale,
    props = _objectWithoutProperties(_ref, _excluded);
  var decimalPlaces = decimalScale == null ? decimalsAllowed ? 2 : 0 : decimalScale;
  var thousandSeparator = noThousandSeparators ? false : (0, _formatters.getThousandSeparatorSymbol)(locale);
  var decimalSeparator = (0, _formatters.getDecimalSymbol)(locale);
  var onBlur = function onBlur(event) {
    var value = event.target.value;
    if (decimalSeparator && decimalPlaces > 0 && value.length > 0 && !value.includes(decimalSeparator)) {
      var payload = getOnBlurValueChange(value, locale);

      // istanbul ignore else
      if (payload) {
        // TODO blur and value change are not compatible events. This should be reviewed
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(payload, {});
        event.target.value = payload.value;
      }
    }
    onBlurProp === null || onBlurProp === void 0 ? void 0 : onBlurProp(event);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNumberFormat.NumericFormat, _objectSpread(_objectSpread({
    getInputRef: ref
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ,
    customInput: _NumberFieldWrapper.NumberFieldWrapper,
    thousandSeparator: thousandSeparator,
    decimalsAllowed: decimalsAllowed,
    onValueChange: onValueChange,
    decimalSeparator: decimalSeparator
  }, props), {}, {
    onBlur: onBlur,
    decimalScale: decimalPlaces,
    maxLength: 23
  }));
};
exports.NumberField = NumberField;