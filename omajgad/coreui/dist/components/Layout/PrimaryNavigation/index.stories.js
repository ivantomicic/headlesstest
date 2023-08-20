"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrimaryNavigationInactive = exports.PrimaryNavigationFirstActive = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("./");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var HouseInvest = function HouseInvest(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.37L22.143 7.61a.75.75 0 0 1-.786 1.278L12 3.13 2.643 8.889a.75.75 0 0 1-.786-1.278L12 1.37zm.037 6.13c.231 0 .435.117.483.388l.01.126v.507c.716.098 1.353.38 1.777.807.32.337.51.71.51 1.052 0 .355-.247.593-.568.593-.263 0-.458-.104-.71-.385-.499-.593-.946-.825-1.588-.825-.79 0-1.295.452-1.295 1.076 0 .468.288.802.876.989l.207.057 1.164.281c1.415.33 2.097 1.064 2.097 2.275 0 1.328-.859 2.264-2.253 2.513l-.251.037v.49c0 .366-.23.519-.487.519-.231 0-.435-.117-.483-.392l-.01-.128v-.483c-.797-.08-1.513-.355-1.971-.801-.35-.324-.545-.697-.545-1.058 0-.41.264-.648.613-.648.218 0 .379.067.67.379.517.593 1.084.868 1.766.868.911 0 1.421-.44 1.421-1.137 0-.49-.289-.797-.979-1.01l-.219-.06-1.163-.288c-1.307-.312-1.989-1.1-1.989-2.287 0-1.278.838-2.192 2.174-2.418l.256-.034v-.49c0-.366.23-.513.487-.513zm6.713 2.25a.75.75 0 0 1 .75.75V21h-15V10.5a.75.75 0 0 1 1.5 0v9h12v-9a.75.75 0 0 1 .75-.75z",
      fill: "currentColor"
    })
  }));
};
HouseInvest.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var PiggyBank = function PiggyBank(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.25 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm-.75 2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0zm9 1.657V7.94L20.56 9h1.94v6h-3.075a3.751 3.751 0 0 1-3.675 3h-6a5.252 5.252 0 0 1-5.049-3.806c-.26-.045-.6-.13-.965-.286-.81-.347-1.741-1.051-2.197-2.42a.75.75 0 1 1 1.423-.475c.293.88.862 1.3 1.365 1.516.06.026.118.049.175.069A5.25 5.25 0 0 1 9.75 7.5h3a.75.75 0 1 1 0 1.5h-3a3.75 3.75 0 0 0 0 7.5h6A2.25 2.25 0 0 0 18 14.25v-.75h3v-3h-1.06L18 8.56V5.822l-2.424 2.91a.75.75 0 1 1-1.152-.961l2.689-3.227c.808-.97 2.387-.398 2.387.864zM9.75 10.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zm8.25.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0zM8.25 18.75a.75.75 0 0 1 .75.75.75.75 0 0 0 1.5 0 .75.75 0 0 1 1.5 0 2.25 2.25 0 0 1-4.5 0 .75.75 0 0 1 .75-.75zm6.75.75a.75.75 0 0 0 1.5 0 .75.75 0 0 1 1.5 0 2.25 2.25 0 0 1-4.5 0 .75.75 0 0 1 1.5 0z",
      fill: "currentColor"
    })
  }));
};
PiggyBank.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
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
var DEFAULT_HREF = undefined;
var _default = {
  title: 'Components/Layout/PrimaryNavigation',
  component: _.PrimaryNavigation,
  args: {
    items: [{
      href: DEFAULT_HREF,
      content: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(HouseInvest, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          children: "Buy"
        })]
      })
    }, {
      href: DEFAULT_HREF,
      content: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(PiggyBank, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          children: "All the money you made"
        })]
      })
    }, {
      href: DEFAULT_HREF,
      content: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Sell, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          children: "Sell your stuff"
        })]
      })
    }],
    active: -1
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PrimaryNavigation, _objectSpread({}, args));
};
var PrimaryNavigationInactive = Template.bind({});
exports.PrimaryNavigationInactive = PrimaryNavigationInactive;
var PrimaryNavigationFirstActive = Template.bind({});
exports.PrimaryNavigationFirstActive = PrimaryNavigationFirstActive;
PrimaryNavigationFirstActive.args = {
  active: 0
};