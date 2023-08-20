"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;
var _mui = require("tss-react/mui");
var _designTokens = require("@crowdhouse/design-tokens");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    badge: {
      boxSizing: 'border-box',
      borderRadius: '1rem',
      padding: theme.spacing(0.5, 1),
      display: 'inline-flex',
      alignItems: 'center'
    },
    withIcon: {
      paddingLeft: theme.spacing(0.5)
    },
    info: {
      backgroundColor: _designTokens.colors.functional.infoLight,
      color: _designTokens.colors.functional.infoDark
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%'
    },
    label: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }),
    warning: {
      backgroundColor: _designTokens.colors.functional.warningLight,
      color: _designTokens.colors.functional.warningDark
    },
    error: {
      backgroundColor: _designTokens.colors.functional.errorLight,
      color: _designTokens.colors.functional.errorDark
    },
    success: {
      backgroundColor: _designTokens.colors.functional.successLight,
      color: _designTokens.colors.functional.successDark
    },
    muted: {
      backgroundColor: _designTokens.colors.base.grey200,
      color: _designTokens.colors.text.primary
    },
    primary: {
      backgroundColor: _designTokens.colors.brand.primaryLight,
      color: _designTokens.colors.brand.primary
    },
    secondary: {
      backgroundColor: _designTokens.colors.brand.secondaryLight,
      color: _designTokens.colors.brand.secondary
    },
    svg: {
      minWidth: theme.spacing(3),
      minHeight: theme.spacing(3),
      path: {
        fill: 'currentColor'
      }
    },
    icon: {
      display: 'inline-flex',
      alignItems: 'center',
      marginRight: theme.spacing(1),
      '@media all and (-ms-high-contrast: none)': {
        display: 'inline-block'
      }
    }
  };
});
exports.useStyles = useStyles;