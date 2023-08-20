"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _IconButton = require("./../IconButton");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "onPrevious", "onNext", "label", "className", "previousButtonProps", "nextButtonProps", "progress"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var ArrowRight = function ArrowRight(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.19 12l-4.72-4.72a.75.75 0 0 1 1.06-1.06L21.31 12l-5.78 5.78a.75.75 0 1 1-1.06-1.06L19.19 12zm-15.44.75a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5h-12z",
      fill: "currentColor"
    })
  }));
};
ArrowRight.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var FlowHeader = function FlowHeader(_ref) {
  var children = _ref.children,
    onPrevious = _ref.onPrevious,
    onNext = _ref.onNext,
    label = _ref.label,
    className = _ref.className,
    previousButtonProps = _ref.previousButtonProps,
    nextButtonProps = _ref.nextButtonProps,
    progress = _ref.progress,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _indexModule.default.headerWrapper,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
      className: (0, _classnames.default)(_indexModule.default.header, className)
    }, rest), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)(_indexModule.default.button, _indexModule.default.buttonLeft),
        children: onPrevious && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, _objectSpread(_objectSpread({
          onClick: onPrevious
        }, previousButtonProps), {}, {
          "data-testid": "button-previous",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowLeft, {
            "data-testid": "arrow-left"
          })
        }))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _indexModule.default.title,
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames.default)(_indexModule.default.button, _indexModule.default.buttonRight),
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: _indexModule.default.label,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: _indexModule.default.labelText,
            children: label.text
          }), label.icon]
        }), onNext && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, _objectSpread(_objectSpread({
          onClick: onNext
        }, nextButtonProps), {}, {
          "data-testid": "button-next",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowRight, {
            "data-testid": "arrow-right"
          })
        }))]
      })]
    })), progress && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      mt: 2,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.LinearProgress, {
        "data-testid": "flow-header-progress-bar",
        variant: "determinate",
        color: "primary",
        value: progress
      })
    })]
  });
};
exports.FlowHeader = FlowHeader;