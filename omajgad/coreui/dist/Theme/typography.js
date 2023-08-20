"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCoreTypography = exports.fontWeightBoldExtra = void 0;
var _designTokens = require("@crowdhouse/design-tokens");
var _getTypographyByTheme = require("./getTypographyByTheme");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var fontWeightLight = 300;
var fontWeightRegular = 400;
var fontWeightMedium = 600;
var fontWeightBold = 700;

// fontWeightBoldExtra is not an expected key in the theme, so we need to export it manually
var fontWeightBoldExtra = 900;
exports.fontWeightBoldExtra = fontWeightBoldExtra;
var fontFamily = '"source-sans-pro", "Source Sans Pro", Arial, sans-serif';
var customTypography = {
  h1: {
    default: _designTokens.typography.mobile.h1,
    desktop: _designTokens.typography.desktop.h1
  },
  h2: {
    default: _designTokens.typography.mobile.h2,
    desktop: _designTokens.typography.desktop.h2
  },
  h3: {
    default: _designTokens.typography.mobile.h3,
    desktop: _designTokens.typography.desktop.h3
  },
  h4: {
    default: _designTokens.typography.mobile.h4,
    desktop: _designTokens.typography.desktop.h4
  },
  h5: {
    default: _designTokens.typography.mobile.h5,
    desktop: _designTokens.typography.desktop.h5
  },
  h6: {
    default: _designTokens.typography.mobile.h6,
    desktop: _designTokens.typography.desktop.h6
  },
  subtitle1: {
    default: _designTokens.typography.mobile.subtitle1,
    desktop: _designTokens.typography.desktop.subtitle1
  },
  subtitle2: {
    default: _designTokens.typography.default.subtitle2
  },
  body1: {
    default: _objectSpread(_objectSpread({}, _designTokens.typography.default.body1.normal), {}, {
      '&.strong, & strong, & .strong': _designTokens.typography.default.body1.strong,
      '&.muted, & muted, & .muted': {
        color: _designTokens.colors.text.secondary
      }
    })
  },
  body2: {
    default: _objectSpread(_objectSpread({}, _designTokens.typography.default.body2.normal), {}, {
      '&.strong, & strong, & .strong': _designTokens.typography.default.body2.strong,
      '&.muted, & muted, & .muted': {
        color: _designTokens.colors.text.secondary
      }
    })
  },
  button: {
    default: _objectSpread(_objectSpread({}, _designTokens.typography.default.button), {}, {
      textTransform: 'none'
    })
  },
  caption: {
    default: _designTokens.typography.default.caption
  },
  overline: {
    default: _designTokens.typography.default.overline
  }
};
var makeCoreTypography = function makeCoreTypography(theme) {
  return _objectSpread(_objectSpread(_objectSpread({}, theme.typography), (0, _getTypographyByTheme.getTypographyByTheme)(theme, customTypography)), {}, {
    fontFamily: fontFamily,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightLight: fontWeightLight,
    fontWeightBold: fontWeightBold
  });
};
exports.makeCoreTypography = makeCoreTypography;