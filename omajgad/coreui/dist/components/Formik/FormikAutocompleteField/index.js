"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikAutocompleteField = FormikAutocompleteField;
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _Autocomplete = require("./../../Form/Autocomplete");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function FormikAutocompleteField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    field = _ref.field,
    form = _ref.form,
    disabled = _ref.disabled,
    autocompleteProps = _ref.autocompleteProps;
  var onChange = field.onChange,
    name = field.name;
  var errors = form.errors,
    touched = form.touched,
    handleBlur = form.handleBlur;
  var isTouched = (0, _lodash.get)(touched, name);
  var error = isTouched ? (0, _lodash.get)(errors, name) : '';
  var handleSelect = function handleSelect(event) {
    onChange(event);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.Autocomplete, _objectSpread({
    name: name,
    label: label,
    error: error,
    value: value,
    onSelect: handleSelect,
    onBlur: handleBlur,
    disabled: disabled
  }, autocompleteProps));
}