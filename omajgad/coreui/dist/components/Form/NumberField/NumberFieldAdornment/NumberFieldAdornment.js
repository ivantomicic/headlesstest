"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberFieldAdornment = void 0;
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _designTokens = require("@crowdhouse/design-tokens");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useNumberFieldAdornmentStyles = (0, _mui.makeStyles)()({
  root: {
    '& .MuiTypography-body1': {
      color: _designTokens.colors.text.secondary,
      fontSize: '1em',
      marginTop: '0.1em'
    }
  },
  filled: {
    '& .MuiTypography-body1': {
      color: _designTokens.colors.text.primary
    }
  },
  disabled: {
    '& .MuiTypography-body1': {
      color: _designTokens.colors.text.secondary
    }
  },
  focused: {
    '& .MuiTypography-body1': {
      color: _designTokens.colors.text.primary
    }
  },
  error: {
    '& .MuiTypography-body1': {
      color: _designTokens.colors.text.primary
    }
  }
});
var NumberFieldAdornment = function NumberFieldAdornment(_ref) {
  var _cx;
  var label = _ref.label;
  var muiFormControl = (0, _material.useFormControl)();
  var _useNumberFieldAdornm = useNumberFieldAdornmentStyles(),
    classes = _useNumberFieldAdornm.classes,
    cx = _useNumberFieldAdornm.cx;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
    position: "start",
    className: cx(classes.root, (_cx = {}, _defineProperty(_cx, classes.focused, muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.focused), _defineProperty(_cx, classes.filled, muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.filled), _defineProperty(_cx, classes.error, (muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.error) && !(muiFormControl !== null && muiFormControl !== void 0 && muiFormControl.disabled)), _defineProperty(_cx, classes.disabled, muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.disabled), _cx)),
    children: label
  });
};
exports.NumberFieldAdornment = NumberFieldAdornment;