"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTitle = exports.withAction = exports.default = exports.Minimal = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("./");
var _material = require("@mui/material");
var _addonActions = require("@storybook/addon-actions");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onClose"],
  _excluded2 = ["onClose"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _default = {
  title: 'Components/Alert',
  component: _.Alert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info', 'muted']
      }
    }
  }
};
exports.default = _default;
var title = 'Sed ut perspiciatis unde omnis iste natus error';
var description = "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea\ncommodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae\nconsequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
var linkText = 'perspiciatis unde omnis';
var Minimal = function Minimal(_ref) {
  var _onclose = _ref.onClose,
    args = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Alert, _objectSpread(_objectSpread({}, args), {}, {
    children: [description, " with", ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: "http://crowdhouse.ch",
      color: "inherit",
      children: linkText
    })]
  }));
};
exports.Minimal = Minimal;
var withTitle = function withTitle(_ref2) {
  var _onclose = _ref2.onClose,
    args = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Alert, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AlertTitle, {
      children: title
    }), description, " with", ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: "http://crowdhouse.ch",
      color: "inherit",
      children: linkText
    })]
  }));
};
exports.withTitle = withTitle;
var withAction = function withAction(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Alert, _objectSpread(_objectSpread({}, args), {}, {
    onClose: (0, _addonActions.action)('onClick'),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AlertTitle, {
      children: title
    }), description, " with ", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: "http://crowdhouse.ch",
      children: linkText
    })]
  }));
};
exports.withAction = withAction;