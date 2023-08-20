"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleChoiceStack = void 0;
var _classnames2 = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _StackContext = require("./StackContext");
var _FormHelperText = require("./../Form/FormHelperText");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SingleChoiceStack = function SingleChoiceStack(_ref) {
  var children = _ref.children,
    _ref$displayButtons = _ref.displayButtons,
    displayButtons = _ref$displayButtons === void 0 ? true : _ref$displayButtons,
    onChange = _ref.onChange,
    horizontal = _ref.horizontal,
    selected = _ref.selected,
    className = _ref.className,
    error = _ref.error,
    groupName = _ref.groupName,
    dataTestId = _ref['data-testid'];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.RadioGroup, {
      classes: {
        root: (0, _classnames2.default)(_indexModule.default.List, _defineProperty({}, _indexModule.default.horizontal, horizontal), className)
      },
      "data-testid": dataTestId,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackContext.StackProvider, {
        selectedValue: selected,
        displayButtons: displayButtons,
        onChange: onChange,
        error: error,
        groupName: groupName,
        children: children
      })
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      className: _indexModule.default.errorContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.FormHelperText, {
        "data-testid": "stack-error",
        error: true,
        children: error
      })
    })]
  });
};
exports.SingleChoiceStack = SingleChoiceStack;