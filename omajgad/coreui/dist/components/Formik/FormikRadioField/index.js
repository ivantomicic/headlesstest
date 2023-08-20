"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikRadioField = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _Radio = require("./../../Form/Radio");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "value", "field", "form", "radioProps"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormikRadioField = function FormikRadioField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    field = _ref.field,
    form = _ref.form,
    radioProps = _ref.radioProps,
    inputProps = _objectWithoutProperties(_ref, _excluded);
  var onChange = field.onChange,
    name = field.name,
    onBlur = field.onBlur;
  var errors = form.errors,
    touched = form.touched;
  var isTouched = (0, _lodash.get)(touched, name);
  var error = isTouched ? (0, _lodash.get)(errors, name) : '';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.Radio, _objectSpread(_objectSpread({
    name: name,
    error: error,
    radioProps: _objectSpread({
      value: value,
      onBlur: onBlur,
      onChange: onChange
    }, radioProps),
    checked: value === field.value,
    value: value
  }, inputProps), {}, {
    children: label
  }));
};
exports.FormikRadioField = FormikRadioField;