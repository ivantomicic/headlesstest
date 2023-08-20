"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _material = require("@mui/material");
var _styles = require("./../../../helpers/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme, _, classes) {
  var _footerItem;
  return {
    root: {
      boxSizing: 'border-box',
      backgroundColor: theme.colors.base.white,
      borderTop: "solid 2px ".concat(theme.colors.brand.primary)
    },
    footerItemsContainer: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6)
    }, theme.breakpoints.up('md'), {
      flexDirection: 'row',
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4)
    }),
    footerItem: (_footerItem = {
      color: theme.colors.brand.primary,
      marginBottom: theme.spacing(2),
      textDecoration: 'none'
    }, _defineProperty(_footerItem, theme.breakpoints.up('md'), {
      marginRight: theme.spacing(4),
      marginBottom: 0
    }), _defineProperty(_footerItem, '&:last-child', {
      marginBottom: 0,
      marginRight: 0
    }), _defineProperty(_footerItem, "& .".concat(classes.Link, " a"), {
      textDecoration: 'none',
      '&:hover': {
        color: theme.colors.brand.primary,
        textDecoration: 'underline'
      }
    }), _footerItem),
    Link: {}
  };
});
var Footer = function Footer(_ref) {
  var items = _ref.items;
  var _useHorizontalPadding = (0, _styles.useHorizontalPaddingStyles)(),
    horizontalPaddingStyle = _useHorizontalPadding.classes.horizontalPaddingStyle;
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    footerItemsContainer = _useStyles$classes.footerItemsContainer,
    footerItem = _useStyles$classes.footerItem,
    Link = _useStyles$classes.Link;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: (0, _classnames.default)(root, horizontalPaddingStyle),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      className: footerItemsContainer,
      children: items.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: footerItem,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            className: cx('strong', Link),
            children: item
          })
        }, "footer-item-".concat(index));
      })
    })
  });
};
exports.Footer = Footer;