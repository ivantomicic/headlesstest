"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;
var _mui = require("tss-react/mui");
var _designTokens = require("@crowdhouse/design-tokens");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    progressBar: {
      backgroundColor: _designTokens.colors.brand.secondaryLight,
      height: '4px'
    },
    progressBarFilled: {
      backgroundColor: _designTokens.colors.brand.secondary,
      height: '100%',
      display: 'block'
    },
    headerContent: _defineProperty({
      padding: theme.spacing(2, 3),
      display: 'grid',
      gridTemplateColumns: '25% auto 25%',
      alignItems: 'center',
      height: '80px'
    }, theme.breakpoints.down('md'), {
      padding: theme.spacing(2, 2)
    }),
    back: {
      justifySelf: 'start'
    },
    lock: {
      display: 'grid',
      justifySelf: 'end',
      gridTemplateColumns: 'auto 1fr',
      justifyContent: 'end',
      columnGap: theme.spacing(1)
    },
    lockLabel: {
      color: _designTokens.colors.base.grey800
    },
    step: {
      justifySelf: 'center',
      color: _designTokens.colors.base.grey800
    }
  };
});
exports.useStyles = useStyles;