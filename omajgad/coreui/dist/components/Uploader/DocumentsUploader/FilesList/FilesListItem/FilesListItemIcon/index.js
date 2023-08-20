"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilesListItemIcon = void 0;
var _mui = require("tss-react/mui");
var _ListItemIcon = require("./ListItemIcon");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    iconContainer: {
      height: theme.spacing(4),
      width: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});
var FilesListItemIcon = function FilesListItemIcon(props) {
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.iconContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon.ListItemIcon, _objectSpread({}, props))
  });
};
exports.FilesListItemIcon = FilesListItemIcon;