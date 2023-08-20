"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testIds = exports.FormikPasswordField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _FormikTextField = require("./../FormikTextField");
var _designTokens = require("@crowdhouse/design-tokens");
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
var VisibilityOff = function VisibilityOff(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.558 10.869l-1.23-1.231a.76.76 0 0 1-.072.039c-.887.423-1.758 1.026-2.594 1.761A16.65 16.65 0 0 0 4.693 13.5a17.019 17.019 0 0 0 1.969 2.062C8.404 17.093 10.222 18 12 18c1.373 0 2.78-.544 4.172-1.518l-1.54-1.54A3 3 0 0 1 9 13.5a3 3 0 0 1 1.558-2.631zm1.158 1.158a1.5 1.5 0 1 0 1.757 1.757l-1.757-1.757zm5.53 5.53C15.558 18.79 13.797 19.5 12 19.5c-2.209 0-4.339-1.062-6.329-2.812-.682-.6-1.3-1.241-1.845-1.883a13.2 13.2 0 0 1-.69-.873l-.303-.432.304-.432c.127-.181.36-.486.69-.873a18.121 18.121 0 0 1 1.844-1.883c.812-.714 1.661-1.321 2.542-1.789L4.72 5.03a.75.75 0 0 1 1.06-1.06l15 15a.75.75 0 1 1-1.06 1.06l-2.473-2.473zm1.784-4.392a16.649 16.649 0 0 0-1.692-1.727c-1.648-1.449-3.37-2.342-5.063-2.43a.75.75 0 1 1 .079-1.499c2.088.11 4.096 1.151 5.975 2.803.683.6 1.3 1.24 1.845 1.883.328.387.562.692.69.873l.303.432-.304.431c-.065.094-.185.255-.356.469-.28.352-.604.728-.966 1.114a.75.75 0 1 1-1.093-1.028c.322-.342.609-.675.859-.987-.081-.1-.174-.212-.277-.334zM5.78 7.72a.75.75 0 1 1-1.06 1.06l-.75-.75a.75.75 0 0 1 1.06-1.06l.75.75zm13.5 1.06a.75.75 0 1 1-1.06-1.06l.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75zM11.25 4.5a.75.75 0 0 1 1.5 0V6a.75.75 0 0 1-1.5 0V4.5zm4.58.415a.75.75 0 1 1 1.34.67l-.75 1.5a.75.75 0 1 1-1.34-.67l.75-1.5z",
      fill: "currentColor"
    })
  }));
};
VisibilityOff.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Visibility = function Visibility(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 16.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8.863-1.932l.304.432-.304.432c-.127.181-.36.486-.69.873a18.127 18.127 0 0 1-1.844 1.883c-1.99 1.75-4.12 2.812-6.329 2.812-2.209 0-4.339-1.062-6.329-2.812a18.13 18.13 0 0 1-1.845-1.882 13.22 13.22 0 0 1-.69-.874l-.303-.432.304-.432c.127-.181.36-.486.69-.873a18.13 18.13 0 0 1 1.844-1.883C7.661 8.562 9.791 7.5 12 7.5c2.209 0 4.339 1.062 6.329 2.812.683.6 1.3 1.241 1.845 1.883.328.387.562.692.69.873zm-1.833.097a16.638 16.638 0 0 0-1.692-1.727C15.596 9.907 13.778 9 12 9s-3.596.907-5.338 2.438A16.638 16.638 0 0 0 4.693 13.5a16.638 16.638 0 0 0 1.968 2.062C8.405 17.093 10.223 18 12 18c1.778 0 3.596-.907 5.338-2.438a16.638 16.638 0 0 0 1.969-2.062c-.081-.1-.174-.213-.277-.335zM5.78 7.72a.75.75 0 1 1-1.06 1.06l-.75-.75a.75.75 0 0 1 1.06-1.06l.75.75zm13.5 1.06a.75.75 0 1 1-1.06-1.06l.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75zM11.25 4.5a.75.75 0 0 1 1.5 0V6a.75.75 0 0 1-1.5 0V4.5zm4.58.415a.75.75 0 1 1 1.34.67l-.75 1.5a.75.75 0 1 1-1.34-.67l.75-1.5zm-9 .67a.75.75 0 0 1 1.34-.67l.75 1.5a.75.75 0 1 1-1.34.67l-.75-1.5z",
      fill: "currentColor"
    })
  }));
};
Visibility.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var testIds = {
  buttonToggleVisibility: 'toggle-vibility',
  visibilityOff: 'icon-visibility-off',
  visibility: 'icon-visibility'
};
exports.testIds = testIds;
var useStyles = (0, _mui.makeStyles)()({
  iconButton: {
    color: _designTokens.colors.base.black
  }
});
var FormikPasswordField = function FormikPasswordField(textFieldProps) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var accessibilityLabels = textFieldProps.a11ylabels;
  var ariaLabel = accessibilityLabels && (showPassword ? accessibilityLabels.hide : accessibilityLabels.show);
  var handleClickShowPassword = (0, _react.useCallback)(function () {
    return setShowPassword(!showPassword);
  }, [showPassword]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormikTextField.FormikTextField, _objectSpread(_objectSpread({}, textFieldProps), {}, {
    InputProps: _objectSpread(_objectSpread({}, textFieldProps.InputProps), {}, {
      endAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
        position: "end",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          className: classes.iconButton,
          "data-testid": testIds.buttonToggleVisibility,
          onClick: handleClickShowPassword,
          edge: "end",
          size: "large",
          "aria-label": ariaLabel,
          children: showPassword ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VisibilityOff, {
            "data-testid": testIds.visibilityOff
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Visibility, {
            "data-testid": testIds.visibility
          })
        })
      })
    }),
    inputProps: _objectSpread(_objectSpread({}, textFieldProps.inputProps), {}, {
      type: showPassword ? 'text' : 'password'
    })
  }));
};
exports.FormikPasswordField = FormikPasswordField;