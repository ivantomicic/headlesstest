"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Loader = function Loader(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    "data-testid": "loader",
    className: (0, _classnames.default)(_indexModule.default.core, _indexModule.default.chLoader, className),
    width: "24px",
    height: "24px",
    viewBox: "0 0 66 66",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      className: _indexModule.default.path,
      fill: "none",
      strokeWidth: "9",
      strokeLinecap: "round",
      cx: "33",
      cy: "33",
      r: "22"
    })
  });
};
exports.Loader = Loader;