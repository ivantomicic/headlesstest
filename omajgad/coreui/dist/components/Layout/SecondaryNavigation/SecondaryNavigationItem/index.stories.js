"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SecondaryNavigationSVG = exports.SecondaryNavigationItemInactive = exports.SecondaryNavigationItemActive = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("./");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sell = function Sell(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 13.515v4.695l7.708 2.58 6.931-3.451a.931.931 0 1 0-.837-1.663l-1.462.743a.75.75 0 1 1-.68-1.338l1.463-.743a2.431 2.431 0 1 1 2.185 4.344L13.82 22.41 6 19.792V21H1.5V10.5H6v1.514c1.956.072 3.323.42 4.24.79.515.208.885.42 1.136.592.054.037.103.072.146.104h2.728a2.25 2.25 0 0 1 0 4.5H10.5a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 0 0-1.5h-3.32l-.213-.223a1.954 1.954 0 0 0-.185-.142 4.501 4.501 0 0 0-.852-.44c-.731-.294-1.908-.61-3.68-.68zm-1.5 5.219V12H3v7.5h1.5v-.733-.033zM15 10.5v-3a.75.75 0 0 1 1.5 0V12h-6V7.5a.75.75 0 0 1 1.5 0v3h3zm-1.5-6.625l-3.364 2.018a.75.75 0 1 1-.772-1.286L13.5 2.125l4.136 2.482a.75.75 0 0 1-.772 1.286L13.5 3.875z",
      fill: "currentColor"
    })
  }));
};
Sell.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var NavigationComponent = function NavigationComponent(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};
var _default = {
  title: 'Components/Layout/SecondaryNavigation/SecondaryNavigationItem',
  component: _.SecondaryNavigationItem,
  args: {
    active: false,
    children: 'Navigation Text',
    navigationComponent: {
      component: NavigationComponent,
      componentsProps: {}
    }
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.SecondaryNavigationItem, _objectSpread({}, args));
};
var SecondaryNavigationItemInactive = Template.bind({});
exports.SecondaryNavigationItemInactive = SecondaryNavigationItemInactive;
var SecondaryNavigationItemActive = Template.bind({});
exports.SecondaryNavigationItemActive = SecondaryNavigationItemActive;
SecondaryNavigationItemActive.args = {
  active: true
};
var SecondaryNavigationSVG = Template.bind({});
exports.SecondaryNavigationSVG = SecondaryNavigationSVG;
SecondaryNavigationSVG.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Sell, {})
};