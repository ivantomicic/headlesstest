"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = void 0;
var _styles = require("@mui/material/styles");
var _overrides = require("./overrides");
var _designTokens = require("@crowdhouse/design-tokens");
var _typography = require("./typography");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var getTheme = function getTheme() {
  var themeOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _createTheme = (0, _styles.createTheme)(),
    shadows = _createTheme.shadows;
  shadows[1] = '0px 3px 4px -0.3px rgba(0, 0, 0, 0.08), 0px 3px 3px -2.8px rgba(0, 0, 0, 0.08), 0px 0px 8px -1.4px rgba(0, 0, 0, 0.08)';
  var theme = {
    // keep old breakpoints for migration https://mui.com/material-ui/guides/migration-v4/#theme
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    colors: _designTokens.colors,
    // todo extend theme
    palette: {
      common: {
        black: _designTokens.colors.base.black,
        white: _designTokens.colors.base.white
      },
      primary: {
        main: _designTokens.colors.brand.primaryAccessible,
        light: _designTokens.colors.brand.primaryLight,
        contrastText: _designTokens.colors.base.white
      },
      secondary: {
        main: _designTokens.colors.brand.secondary,
        light: _designTokens.colors.brand.secondaryLight,
        contrastText: _designTokens.colors.base.white
      },
      error: {
        main: _designTokens.colors.functional.error,
        light: _designTokens.colors.functional.errorLight,
        dark: _designTokens.colors.functional.errorDark
      },
      warning: {
        main: _designTokens.colors.functional.warning,
        light: _designTokens.colors.functional.warningLight,
        dark: _designTokens.colors.functional.warningDark
      },
      success: {
        main: _designTokens.colors.functional.success,
        light: _designTokens.colors.functional.successLight,
        dark: _designTokens.colors.functional.successDark
      },
      info: {
        main: _designTokens.colors.functional.info,
        light: _designTokens.colors.functional.infoLight,
        dark: _designTokens.colors.functional.infoDark
      },
      text: {
        primary: _designTokens.colors.base.black,
        secondary: _designTokens.colors.base.grey700,
        disabled: _designTokens.colors.text.secondary
        // hint: tokenColors.text.secondary,
      },

      background: {
        paper: _designTokens.colors.base.white,
        default: _designTokens.colors.base.white
      }
    },
    shadows: shadows
  };
  var baseTheme = (0, _styles.createTheme)(theme);
  var typographyTheme = (0, _styles.createTheme)(_objectSpread(_objectSpread({}, theme), {}, {
    typography: (0, _typography.makeCoreTypography)(baseTheme)
  }));
  var componentsTheme = (0, _styles.createTheme)(_objectSpread(_objectSpread({}, typographyTheme), {}, {
    components: (0, _overrides.makeCoreComponents)(typographyTheme)
  }));
  var overridenTheme;
  if (typeof themeOverrides === 'function') {
    overridenTheme = (0, _styles.createTheme)(componentsTheme, themeOverrides(componentsTheme));
  } else {
    overridenTheme = (0, _styles.createTheme)(componentsTheme, themeOverrides);
  }
  return overridenTheme;
};
exports.getTheme = getTheme;