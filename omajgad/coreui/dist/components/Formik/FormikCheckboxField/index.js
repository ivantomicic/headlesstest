"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikCheckboxField = void 0;
var _lodash = require("lodash");
var _Checkbox = require("./../../Form/Checkbox");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "value", "field", "form", "checkboxProps"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormikCheckboxField = function FormikCheckboxField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _ref$field = _ref.field,
    name = _ref$field.name,
    fieldValue = _ref$field.value,
    onChange = _ref$field.onChange,
    onBlur = _ref$field.onBlur,
    _ref$form = _ref.form,
    errors = _ref$form.errors,
    touched = _ref$form.touched,
    checkboxProps = _ref.checkboxProps,
    inputProps = _objectWithoutProperties(_ref, _excluded);
  var isTouched = (0, _lodash.get)(touched, name);
  var error = isTouched ? (0, _lodash.get)(errors, name) : '';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.Checkbox, _objectSpread(_objectSpread({
    name: name,
    error: error,
    checkboxProps: _objectSpread(_objectSpread({
      value: value
    }, checkboxProps), {}, {
      onChange: onChange,
      onBlur: onBlur
    }),
    checked: fieldValue
  }, inputProps), {}, {
    children: label
  }));
};
exports.FormikCheckboxField = FormikCheckboxField;