"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HamburgerDefault = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("./");
var _addonActions = require("@storybook/addon-actions");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'Components/Layout/PrimaryNavigation/Hamburger',
  component: _.Hamburger,
  args: {
    onClick: (0, _addonActions.action)('onClick')
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Hamburger, _objectSpread({}, args));
};
var HamburgerDefault = Template.bind({});
exports.HamburgerDefault = HamburgerDefault;