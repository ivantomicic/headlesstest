"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuExample = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ = require(".");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 4.5v-3h6v3h4.5a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5H9zm1.5 0h3V3h-3v1.5zm6 16.5V8.25a.75.75 0 0 1 1.5 0V22.5H6V8.25a.75.75 0 0 1 1.5 0V21h9zm-3-12.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.25zm-4.5 0a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.25z",
      fill: "currentColor"
    })
  }));
};
DeleteIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var More = function More(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM12 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
      fill: "currentColor"
    })
  }));
};
More.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.81 14.25l1.94 1.94L21.22 4.72a.75.75 0 1 1 1.06 1.06L9.75 18.31l-4.06-4.06L18.22 1.72a.75.75 0 1 1 1.06 1.06L7.81 14.25zm-2.598 2.487l-1.026 3.077 3.077-1.026a.75.75 0 0 1 .474 1.424l-5.923 1.974 1.974-5.923a.75.75 0 0 1 1.424.474z",
      fill: "currentColor"
    })
  }));
};
EditIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/Menu',
  component: _.Menu,
  argTypes: {}
};
exports.default = _default;
var MenuExample = function MenuExample() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
    container: true,
    justifyContent: "flex-end",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      "aria-haspopup": "true",
      onClick: handleClick,
      size: "large",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(More, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Menu, {
      anchorEl: anchorEl,
      open: Boolean(anchorEl),
      onClose: handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
        onClick: handleClose,
        selected: true,
        children: ["Default 1", /*#__PURE__*/(0, _jsxRuntime.jsx)(EditIcon, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
        onClick: handleClose,
        children: ["Default 2", /*#__PURE__*/(0, _jsxRuntime.jsx)(EditIcon, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
        disabled: true,
        onClick: handleClose,
        children: ["Disabled", /*#__PURE__*/(0, _jsxRuntime.jsx)(EditIcon, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
        className: "destructive",
        onClick: handleClose,
        children: ["Destructive", /*#__PURE__*/(0, _jsxRuntime.jsx)(DeleteIcon, {})]
      })]
    })]
  });
};
exports.MenuExample = MenuExample;