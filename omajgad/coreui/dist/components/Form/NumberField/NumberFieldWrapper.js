"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberFieldWrapper = void 0;
var _material = require("@mui/material");
var _NumberFieldAdornment = require("./NumberFieldAdornment");
var _FormHelperText = require("./../FormHelperText");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["units", "label", "inputLabelProps", "helperText", "helperTextProps", "id", "disabled", "error", "decimalsAllowed"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var NumberFieldWrapper = function NumberFieldWrapper(_ref) {
  var units = _ref.units,
    label = _ref.label,
    inputLabelProps = _ref.inputLabelProps,
    helperText = _ref.helperText,
    helperTextProps = _ref.helperTextProps,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? 'number-input' : _ref$id,
    disabled = _ref.disabled,
    error = _ref.error,
    decimalsAllowed = _ref.decimalsAllowed,
    props = _objectWithoutProperties(_ref, _excluded);
  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var hasError = !!error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
    variant: "filled",
    disabled: disabled,
    error: error,
    size: "small",
    fullWidth: true,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, _objectSpread(_objectSpread({
      htmlFor: id
    }, inputLabelProps), {}, {
      children: label
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FilledInput, _objectSpread(_objectSpread({
      id: id,
      "aria-describedby": helperTextId,
      startAdornment: units && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberFieldAdornment.NumberFieldAdornment, {
        label: units
      }),
      role: "textbox"
    }, props), {}, {
      inputProps: _objectSpread({
        inputMode: decimalsAllowed ? 'decimal' : 'numeric'
      }, props.inputProps)
    })), helperText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, _objectSpread(_objectSpread({
      error: hasError,
      id: helperTextId
    }, helperTextProps), {}, {
      children: helperText
    }))]
  });
};
exports.NumberFieldWrapper = NumberFieldWrapper;