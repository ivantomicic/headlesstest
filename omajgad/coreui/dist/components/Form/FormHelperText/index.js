"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorIconTestId = exports.FormHelperText = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "error", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ErrorIcon = function ErrorIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.291 13.774l-.088-3.802a1.91 1.91 0 0 0-.002-.091 1.655 1.655 0 0 1-.003-.074c0-.505.313-.807.807-.807.49 0 .797.302.797.807 0 .044 0 .11-.005.165l-.083 3.802c-.016.467-.258.741-.714.741-.456 0-.698-.274-.709-.741zm-.186 2.548c0-.483.395-.862.895-.862s.895.379.895.862c0 .484-.395.863-.895.863s-.895-.38-.895-.863zM22.237 21H1.763L12 1.379 22.237 21zm-2.474-1.5L12 4.621 4.237 19.5h15.526z",
      fill: "currentColor"
    })
  }));
};
ErrorIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    icon: {
      marginTop: '2px',
      marginRight: theme.spacing(1)
    }
  };
});
var errorIconTestId = 'error-icon';
exports.errorIconTestId = errorIconTestId;
var FormHelperText = function FormHelperText(_ref) {
  var children = _ref.children,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    classes = _useStyles.classes;

  // TODO children (supposedly an error message) are assumed to be either a string or a jsx element
  // if we want to support receiving objects (which is possible from formik error message) we will need to update this check
  if (!children || !(typeof children === 'string' || /*#__PURE__*/(0, _react.isValidElement)(children))) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormHelperText, _objectSpread(_objectSpread({}, props), {}, {
    className: (0, _classnames.default)(className, {
      'Mui-error': error
    }),
    component: "div",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      direction: "row",
      children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SvgIcon, {
          component: ErrorIcon,
          "data-testid": errorIconTestId,
          fontSize: "small",
          className: classes.icon
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: true,
        children: children
      })]
    })
  }));
};
exports.FormHelperText = FormHelperText;