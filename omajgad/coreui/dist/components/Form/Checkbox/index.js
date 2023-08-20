"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _material = require("@mui/material");
var _FormHelperText = require("./../FormHelperText");
var _classnames = _interopRequireDefault(require("classnames"));
var _useControlStyles2 = require("./../useControlStyles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Checkbox = function Checkbox(_ref) {
  var error = _ref.error,
    helperText = _ref.helperText,
    onChange = _ref.onChange,
    formControlProps = _ref.formControlProps,
    formControlLabelProps = _ref.formControlLabelProps,
    formHelperProps = _ref.formHelperProps,
    checkboxProps = _ref.checkboxProps,
    disabled = _ref.disabled,
    checked = _ref.checked,
    children = _ref.children,
    name = _ref.name;
  var _useControlStyles = (0, _useControlStyles2.useControlStyles)(),
    classes = _useControlStyles.classes;
  var helperString = error || helperText;
  var hasError = !!error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, _objectSpread(_objectSpread({
    error: !!error,
    disabled: disabled
  }, formControlProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, _objectSpread({
      className: (0, _classnames.default)({
        error: !!error
      }),
      classes: {
        root: classes.labelControl
      },
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, _objectSpread({
        name: name,
        className: (0, _classnames.default)({
          error: hasError
        }),
        checked: checked,
        onChange: onChange
      }, checkboxProps)),
      label: children
    }, formControlLabelProps)), !!helperString && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, _objectSpread(_objectSpread({
      className: "control-helper-text"
    }, formHelperProps), {}, {
      error: hasError,
      children: helperString
    }))]
  }));
};
exports.Checkbox = Checkbox;