"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonFooterExample = void 0;
var _material = require("@mui/material");
var _ = require("./");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'Components/ButtonFooter',
  component: _.ButtonFooter,
  argTypes: {
    buttonLabel: {
      defaultValue: 'Next'
    }
  }
};
exports.default = _default;
var ButtonFooterExample = function ButtonFooterExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Container, {
    maxWidth: "md",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 400,
      bgcolor: "lightgray",
      children: "Content"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.ButtonFooter, _objectSpread({
      buttonProps: {
        'data-testid': 'next-button'
      }
    }, args))]
  });
};
exports.ButtonFooterExample = ButtonFooterExample;