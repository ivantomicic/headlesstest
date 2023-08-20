"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testIdPhoneNumber = exports.testId = exports.defaultCountryCode = exports.PhoneNumber = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _countries = require("./constants/countries");
var _FormHelperText = require("./../FormHelperText");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _SelectCountry = require("./SelectCountry");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["formHelperProps", "helperText", "error", "value", "name", "disabled", "ariaLabelNumber", "onChange", "onBlur", "selectCountryProps", "countriesMap", "phoneNumberTextFieldProps"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var testId = 'phone-number';
exports.testId = testId;
var testIdPhoneNumber = 'phone-number-formatted';
exports.testIdPhoneNumber = testIdPhoneNumber;
var defaultCountryCode = 'CH';
exports.defaultCountryCode = defaultCountryCode;
var useStyles = (0, _mui.makeStyles)()({
  textField: {
    '& input': {
      paddingTop: 12,
      paddingBottom: 11
    }
  }
});
var PhoneNumber = function PhoneNumber(_ref) {
  var _parsePhoneNumber, _parsePhoneNumber2;
  var formHelperProps = _ref.formHelperProps,
    helperText = _ref.helperText,
    error = _ref.error,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    name = _ref.name,
    disabled = _ref.disabled,
    _ref$ariaLabelNumber = _ref.ariaLabelNumber,
    ariaLabelNumber = _ref$ariaLabelNumber === void 0 ? 'phone national number' : _ref$ariaLabelNumber,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    selectCountryProps = _ref.selectCountryProps,
    _ref$countriesMap = _ref.countriesMap,
    countriesMap = _ref$countriesMap === void 0 ? _countries.countriesMapDE : _ref$countriesMap,
    phoneNumberTextFieldProps = _ref.phoneNumberTextFieldProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var containerRef = (0, _react.useRef)();
  var helperString = error || helperText;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;

  // try to detect country from the number
  var initialCountryCode = value && ((_parsePhoneNumber = (0, _libphonenumberJs.default)(value)) === null || _parsePhoneNumber === void 0 ? void 0 : _parsePhoneNumber.country);
  if (!initialCountryCode) {
    initialCountryCode = defaultCountryCode;
  }

  // try to extract phone number from current value
  var initialPhoneNumber = value && ((_parsePhoneNumber2 = (0, _libphonenumberJs.default)(value, initialCountryCode)) === null || _parsePhoneNumber2 === void 0 ? void 0 : _parsePhoneNumber2.nationalNumber);

  // handle unknown phoneNumber
  if (value && !initialPhoneNumber) {
    // if we have international format marker
    if (value.startsWith('+')) {
      var _countriesMap$get;
      initialPhoneNumber = value.replace("+".concat((_countriesMap$get = countriesMap.get(initialCountryCode)) === null || _countriesMap$get === void 0 ? void 0 : _countriesMap$get.phoneCode), '');
    } else {
      initialPhoneNumber = value;
    }
  }
  var initialCountry = countriesMap.get(initialCountryCode);
  if (!initialCountry) {
    throw new Error("No country details found for ".concat(initialCountryCode));
  }
  var _useState = (0, _react.useState)(initialCountry),
    _useState2 = _slicedToArray(_useState, 2),
    country = _useState2[0],
    setCountry = _useState2[1];
  var _useState3 = (0, _react.useState)(initialPhoneNumber),
    _useState4 = _slicedToArray(_useState3, 2),
    phoneNumber = _useState4[0],
    setPhoneNumber = _useState4[1];
  var hasError = !!error;
  var handleChangeNumber = (0, _react.useCallback)(function (e) {
    var phoneNumberUpdated = e.target.value;
    var fullNumber = "+".concat(country.phoneCode).concat(phoneNumberUpdated);

    // change only if entered numbers
    if (/^\d+$/.test(phoneNumberUpdated) || phoneNumberUpdated.length === 0) {
      setPhoneNumber(e.target.value);
      onChange(fullNumber);
    } else {
      setPhoneNumber(phoneNumber);
    }
  }, [country.phoneCode, onChange, phoneNumber]);
  var handleChangeCountry = (0, _react.useCallback)(function (countryCode) {
    var selectedCountry = countriesMap.get(countryCode);
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, [countriesMap]);
  var componentTestId = props['data-testid'] || testId;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: containerRef,
    "data-testid": componentTestId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectCountry.SelectCountry, _objectSpread({
          selectedCountry: country.isoCode,
          error: hasError,
          onChange: handleChangeCountry,
          disabled: disabled,
          countriesMap: countriesMap
        }, selectCountryProps))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, _objectSpread(_objectSpread({
          value: phoneNumber,
          name: name
        }, phoneNumberTextFieldProps), {}, {
          error: hasError,
          onChange: handleChangeNumber,
          onBlur: onBlur,
          className: classes.textField,
          disabled: disabled,
          inputProps: _objectSpread({
            role: 'textbox',
            inputMode: 'tel',
            'data-testid': testIdPhoneNumber,
            'aria-label': ariaLabelNumber
          }, phoneNumberTextFieldProps === null || phoneNumberTextFieldProps === void 0 ? void 0 : phoneNumberTextFieldProps.inputProps)
        }))
      })]
    }), !!helperString && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, _objectSpread(_objectSpread({
      "data-testid": "".concat(name, "-helper")
    }, formHelperProps), {}, {
      error: hasError,
      children: helperString
    }))]
  });
};
exports.PhoneNumber = PhoneNumber;