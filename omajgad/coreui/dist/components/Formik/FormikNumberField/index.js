"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikNumberField = void 0;
var _lodash = require("lodash");
var _react = require("react");
var _NumberField = require("./../../Form/NumberField");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["field", "form", "units", "type", "decimalsAllowed", "noThousandSeparators", "helperText", "numberProps", "id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormikNumberField = function FormikNumberField(_ref) {
  var _ref$field = _ref.field,
    name = _ref$field.name,
    value = _ref$field.value,
    _ref$form = _ref.form,
    setFieldValue = _ref$form.setFieldValue,
    handleBlur = _ref$form.handleBlur,
    errors = _ref$form.errors,
    touched = _ref$form.touched,
    units = _ref.units,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'tel' : _ref$type,
    _ref$decimalsAllowed = _ref.decimalsAllowed,
    decimalsAllowed = _ref$decimalsAllowed === void 0 ? false : _ref$decimalsAllowed,
    _ref$noThousandSepara = _ref.noThousandSeparators,
    noThousandSeparators = _ref$noThousandSepara === void 0 ? false : _ref$noThousandSepara,
    helperText = _ref.helperText,
    numberProps = _ref.numberProps,
    id = _ref.id,
    props = _objectWithoutProperties(_ref, _excluded);
  var setValue = function setValue(values) {
    setFieldValue(name, props.valueIsNumericString ? values.value : values.floatValue);
  };
  var onChange = (0, _react.useCallback)(setValue, [setFieldValue, name]);
  var isTouched = (0, _lodash.get)(touched, name);
  var elementId = id || "id_".concat(name);
  var error = isTouched && (0, _lodash.get)(errors, name);
  var errorMessage = isTouched ? (0, _lodash.get)(errors, name) : '';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberField.NumberField, _objectSpread(_objectSpread({
    type: type,
    value: value,
    error: !(0, _lodash.isEmpty)(errorMessage),
    name: name,
    id: elementId,
    helperText: error ? error : helperText,
    onValueChange: onChange,
    onBlur: handleBlur,
    allowNegative: false,
    units: units,
    decimalsAllowed: decimalsAllowed,
    noThousandSeparators: noThousandSeparators
  }, props), numberProps));
};
exports.FormikNumberField = FormikNumberField;