"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _LogoShort = require("./LogoShort");
var _LogoFull = require("./LogoFull");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Logo = function Logo(_ref) {
  var className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'blue' : _ref$variant,
    accessibilityTitle = _ref.accessibilityTitle,
    titleAccess = _ref.titleAccess;
  var title = titleAccess || accessibilityTitle;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _classnames.default)(_indexModule.default.horizontal, className),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LogoFull.LogoFull, {
        variant: variant,
        titleAccess: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _classnames.default)(_indexModule.default.symbol, className),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LogoShort.LogoShort, {
        variant: variant,
        titleAccess: title
      })
    })]
  });
};
exports.Logo = Logo;