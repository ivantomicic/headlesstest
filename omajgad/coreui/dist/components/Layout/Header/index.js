"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconButton = require("./../../IconButton");
var _Logo = require("./../../Logo");
var _mui = require("tss-react/mui");
var _styles = require("./../../../helpers/styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.78 17.78a.75.75 0 0 1-1.06 0L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 1 1 1.06-1.06L12 10.94l4.72-4.72a.75.75 0 0 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 0 1 0 1.06z",
      fill: "currentColor"
    })
  }));
};
CrossIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ArrowLeft = function ArrowLeft(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.81 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L2.69 12l5.78-5.78a.75.75 0 0 1 1.06 1.06L4.81 12zm15.44-.75a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5h12z",
      fill: "currentColor"
    })
  }));
};
ArrowLeft.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: theme.spacing(9),
      '& > *': {
        flex: '1 0 33%'
      }
    },
    logo: {
      textAlign: 'center'
    }
  };
});
var Header = function Header(_ref) {
  var _ref$showBackOnSmallV = _ref.showBackOnSmallViewport,
    showBackOnSmallViewport = _ref$showBackOnSmallV === void 0 ? true : _ref$showBackOnSmallV,
    onBackClick = _ref.onBackClick,
    showClose = _ref.showClose,
    onCloseClick = _ref.onCloseClick,
    banner = _ref.banner,
    _ref$logoUrl = _ref.logoUrl,
    href = _ref$logoUrl.href,
    title = _ref$logoUrl.title,
    children = _ref.children;
  var _useHorizontalPadding = (0, _styles.useHorizontalPaddingStyles)(),
    horizontalPaddingStyle = _useHorizontalPadding.classes.horizontalPaddingStyle;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    content = _useStyles$classes.content,
    logo = _useStyles$classes.logo;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: horizontalPaddingStyle,
    children: [banner && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: banner.bannerClassName,
      "data-testid": "header-banner",
      children: banner.items.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: item
        }, "banner-item-".concat(index));
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: content,
      "data-testid": "header-content",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [onBackClick && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          onClick: onBackClick,
          "data-testid": "header-button-back",
          sx: showBackOnSmallViewport ? {
            display: {
              xs: 'flex',
              sm: 'none'
            }
          } : {
            display: {
              xs: 'none',
              sm: 'flex'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowLeft, {})
        }), showClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          onClick: onCloseClick,
          "data-testid": "header-button-close",
          sx: {
            display: {
              sm: 'none',
              xs: 'flex'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CrossIcon, {})
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: href,
        title: title,
        className: logo,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.Logo, {})
      }), children]
    })]
  });
};
exports.Header = Header;