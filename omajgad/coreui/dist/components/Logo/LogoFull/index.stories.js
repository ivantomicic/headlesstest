"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LogoFull = void 0;
var _ = require(".");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'Components/Logo',
  component: _.LogoFull,
  argTypes: {
    variant: {
      control: {
        defaultValue: 'blue',
        type: 'select',
        options: ['blue', 'white', 'black']
      }
    }
  }
};
exports.default = _default;
var LogoFull = function LogoFull(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LogoFull, _objectSpread({}, args));
};
exports.LogoFull = LogoFull;