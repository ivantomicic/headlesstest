"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _material = require("@mui/material");
var _designTokens = require("@crowdhouse/design-tokens");
var _Loader = require("./../Loader");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["variant", "loading", "disabled", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useStyles = (0, _mui.makeStyles)()(function (theme, _ref) {
  var variant = _ref.variant;
  return {
    root: {
      boxShadow: variant !== 'tertiary' ? theme.shadows[1] : 'none',
      backgroundColor: variant !== 'tertiary' ? _designTokens.colors.base.white : 'transparent',
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: _designTokens.colors.brand.primaryLight
      },
      '&:disabled': {
        boxShadow: 'none',
        backgroundColor: variant === 'tertiary' ? 'transparent' : _designTokens.colors.base.grey300,
        color: _designTokens.colors.base.grey600
      },
      transition: 'all 0.5s ease-out'
    }
  };
});
var IconButton = function IconButton(_ref2) {
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? 'secondary' : _ref2$variant,
    _ref2$loading = _ref2.loading,
    loading = _ref2$loading === void 0 ? false : _ref2$loading,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useStyles = useStyles({
      variant: variant
    }),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, _objectSpread(_objectSpread({}, props), {}, {
    className: classes.root,
    disabled: disabled || loading,
    children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader.Loader, {}) : children
  }));
};
exports.IconButton = IconButton;