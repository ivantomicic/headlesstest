"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hamburger = void 0;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Menu = function Menu(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.25 11.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h16.5zm0-6.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h16.5zm0 13.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h16.5z",
      fill: "currentColor"
    })
  }));
};
Menu.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      cursor: 'pointer',
      minWidth: theme.spacing(3),
      minHeight: theme.spacing(3),
      margin: "".concat(theme.spacing(3), " ").concat(theme.spacing(2))
    }
  };
});
var Hamburger = function Hamburger(_ref) {
  var onClick = _ref.onClick;
  var _useStyles = useStyles(),
    root = _useStyles.classes.root;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Menu, {
    className: root,
    onClick: onClick
  });
};
exports.Hamburger = Hamburger;