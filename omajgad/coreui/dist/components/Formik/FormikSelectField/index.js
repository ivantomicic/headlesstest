"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikSelectField = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _material = require("@mui/material");
var _FormHelperText = require("./../../Form/FormHelperText");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var FormikSelectField = function FormikSelectField(_ref) {
  var label = _ref.label,
    helperText = _ref.helperText,
    field = _ref.field,
    form = _ref.form,
    options = _ref.options,
    formControlProps = _ref.formControlProps,
    selectProps = _ref.selectProps,
    formHelperProps = _ref.formHelperProps,
    id = _ref.id;
  var name = field.name,
    value = field.value,
    onChange = field.onChange,
    onBlur = field.onBlur;
  var errors = form.errors;
  var elementLabelId = (id || "id_".concat(name)) + '-label';
  var error = (0, _lodash.get)(errors, name);
  var helperString = error || helperText;
  var hasError = !!error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, _objectSpread(_objectSpread({}, formControlProps), {}, {
    error: !!error,
    fullWidth: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
      id: elementLabelId,
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Select, _objectSpread(_objectSpread({
      value: value,
      labelId: elementLabelId,
      name: name,
      onBlur: onBlur,
      onChange: onChange
    }, selectProps), {}, {
      children: options.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
          value: option.value,
          "data-testid": "".concat(field.name, "-").concat(option.value),
          selected: value === option.value,
          children: option.option
        }, option.value);
      })
    })), !!helperString && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, _objectSpread(_objectSpread({}, formHelperProps), {}, {
      error: hasError,
      children: helperString
    }))]
  }));
};
exports.FormikSelectField = FormikSelectField;