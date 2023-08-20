"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _IconButton = require("./../../../IconButton");
var _index = require("./index.styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var LockLocked = function LockLocked(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.75 16.3V18a.75.75 0 0 1-1.5 0v-1.7a1.5 1.5 0 1 1 1.5 0zM4.5 11.25A2.25 2.25 0 0 1 6.75 9h10.5a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-9zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75H6.75zm.75-5.25a3.75 3.75 0 0 1 3.75-3.75h1.5a3.75 3.75 0 0 1 3.75 3.75V7.5a.75.75 0 0 1-1.5 0V5.25A2.25 2.25 0 0 0 12.75 3h-1.5A2.25 2.25 0 0 0 9 5.25V7.5a.75.75 0 0 1-1.5 0V5.25z",
      fill: "currentColor"
    })
  }));
};
LockLocked.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ArrowLeft = function ArrowLeft(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.81 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L2.69 12l5.78-5.78a.75.75 0 0 1 1.06 1.06L4.81 12zm15.44-.75a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5h12z",
      fill: "currentColor"
    })
  }));
};
ArrowLeft.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Header = function Header(_ref) {
  var step = _ref.step,
    totalSteps = _ref.totalSteps,
    goBack = _ref.goBack,
    labels = _ref.labels;
  var _useStyles = (0, _index.useStyles)(),
    classes = _useStyles.classes;
  var theme = (0, _material.useTheme)();
  var isMobileScreen = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  var secure = labels.secure,
    pagination = labels.pagination;
  var paginationLabel = pagination(step, totalSteps);
  var clickBackHandler = function clickBackHandler() {
    goBack(step);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    "data-testid": "multi-step-header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      className: classes.progressBar,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: classes.progressBarFilled,
        style: {
          maxWidth: "".concat(step / totalSteps * 100, "%")
        },
        "data-testid": "progress-bar"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      className: classes.headerContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          className: classes.back,
          onClick: clickBackHandler,
          "data-testid": "back-button",
          size: "large",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowLeft, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        className: classes.step,
        children: paginationLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        className: classes.lock,
        children: [!isMobileScreen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          className: classes.lockLabel,
          children: secure
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LockLocked, {
          "data-testid": "lock-icon"
        })]
      })]
    })]
  });
};
exports.Header = Header;