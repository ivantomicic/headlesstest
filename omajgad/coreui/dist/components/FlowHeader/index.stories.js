"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButtonExample = exports.FlowWithButtonFooterExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _ButtonFooter = require("./../ButtonFooter");
var _ = require(".");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Lock = function Lock(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.75 16.3V18a.75.75 0 0 1-1.5 0v-1.7a1.5 1.5 0 1 1 1.5 0zM4.5 11.25A2.25 2.25 0 0 1 6.75 9h10.5a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-9zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75H6.75zm.75-5.25a3.75 3.75 0 0 1 3.75-3.75h1.5a3.75 3.75 0 0 1 3.75 3.75V7.5a.75.75 0 0 1-1.5 0V5.25A2.25 2.25 0 0 0 12.75 3h-1.5A2.25 2.25 0 0 0 9 5.25V7.5a.75.75 0 0 1-1.5 0V5.25z",
      fill: "currentColor"
    })
  }));
};
Lock.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/FlowHeader',
  component: _.FlowHeader
};
exports.default = _default;
var IconButtonExample = function IconButtonExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.FlowHeader, _objectSpread(_objectSpread({
    onPrevious: (0, _addonActions.action)('onPrevious'),
    label: {
      text: 'Sichere Verbindung',
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(Lock, {})
    } // TODO
    ,
    onNext: (0, _addonActions.action)('onNext')
  }, args), {}, {
    children: "Example of title"
  }));
};
exports.IconButtonExample = IconButtonExample;
var FlowWithButtonFooterExample = function FlowWithButtonFooterExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.FlowHeader, _objectSpread(_objectSpread({
      onPrevious: (0, _addonActions.action)('onPrevious'),
      label: {
        text: 'Sichere Verbindung',
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(Lock, {})
      } //TODO
      ,
      onNext: (0, _addonActions.action)('onNext')
    }, args), {}, {
      children: "Example of title"
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Container, {
      maxWidth: "md",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 400,
        bgcolor: "lightgray",
        children: "Flow Content"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonFooter.ButtonFooter, {
        buttonProps: {
          'data-testid': 'next-button'
        },
        onButtonClick: (0, _addonActions.action)('buttonFooterAction'),
        buttonLabel: "Next"
      })]
    })]
  });
};
exports.FlowWithButtonFooterExample = FlowWithButtonFooterExample;