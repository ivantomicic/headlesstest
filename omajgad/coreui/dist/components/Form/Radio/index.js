"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _material = require("@mui/material");
var _FormHelperText = require("./../FormHelperText");
var _classnames = _interopRequireDefault(require("classnames"));
var _useControlStyles2 = require("./../useControlStyles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Radio = function Radio(_ref) {
  var children = _ref.children,
    name = _ref.name,
    onChange = _ref.onChange,
    error = _ref.error,
    disabled = _ref.disabled,
    helperText = _ref.helperText,
    formControlProps = _ref.formControlProps,
    formControlLabelProps = _ref.formControlLabelProps,
    formHelperProps = _ref.formHelperProps,
    radioProps = _ref.radioProps,
    checked = _ref.checked,
    value = _ref.value,
    id = _ref.id;
  var _useControlStyles = (0, _useControlStyles2.useControlStyles)(),
    classes = _useControlStyles.classes;
  var helperString = error || helperText;
  var labelId = [id || "id_".concat(name), value, 'label'].join('-');
  var hasError = !!error;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, _objectSpread(_objectSpread({
    error: hasError,
    disabled: disabled
  }, formControlProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, _objectSpread({
      label: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        id: labelId,
        children: children
      }),
      name: name,
      classes: {
        root: classes.labelControl
      },
      className: (0, _classnames.default)(formControlLabelProps === null || formControlLabelProps === void 0 ? void 0 : formControlLabelProps.className, {
        error: hasError
      }),
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Radio, _objectSpread(_objectSpread({
        name: name,
        value: value,
        checked: checked,
        onChange: onChange,
        className: (0, _classnames.default)({
          error: hasError
        })
      }, radioProps), {}, {
        inputProps: _objectSpread(_objectSpread({}, radioProps === null || radioProps === void 0 ? void 0 : radioProps.inputProps), {}, {
          'aria-labelledby': labelId
        })
      }))
    }, formControlLabelProps)), !!helperString && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, _objectSpread(_objectSpread({
      className: "control-helper-text"
    }, formHelperProps), {}, {
      error: hasError,
      children: helperString
    }))]
  }));
};
exports.Radio = Radio;