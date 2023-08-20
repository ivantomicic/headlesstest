"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserName = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ChevronDown = function ChevronDown(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 13.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L12 16.06 5.47 9.53a.75.75 0 0 1 1.06-1.06L12 13.94z",
      fill: "currentColor"
    })
  }));
};
ChevronDown.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ChevronUp = function ChevronUp(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 10.06l5.47 5.47a.75.75 0 0 0 1.06-1.06L12 7.94l-6.53 6.53a.75.75 0 0 0 1.06 1.06L12 10.06z",
      fill: "currentColor"
    })
  }));
};
ChevronUp.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Verified = function Verified(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.03 10.28l-5.25 5.25a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.36-2.36 2.36-2.36a.75.75 0 0 1 1.06 1.06zm-5.495-8.619L12 1.295l.464.366.006.004.018.015.075.058c.066.05.163.125.285.216.244.183.587.434.983.709.805.557 1.786 1.177 2.59 1.523.704.303 1.683.572 2.514.77a32.433 32.433 0 0 0 1.34.286l.082.015.02.004h.006l.617.112V13.5c0 1.357-.62 2.596-1.45 3.65-.832 1.06-1.923 1.997-2.984 2.77a27.134 27.134 0 0 1-2.918 1.832 26.755 26.755 0 0 1-1.235.633l-.074.035-.02.009-.006.002-.003.002-.31-.683c-.31.683-.311.682-.311.682h-.002l-.006-.003-.02-.01-.074-.034-.273-.132a26.84 26.84 0 0 1-.962-.5 27.143 27.143 0 0 1-2.918-1.834c-1.061-.772-2.152-1.709-2.985-2.768C3.62 16.096 3 14.857 3 13.5V5.373l.618-.111.005-.001.02-.004.082-.015.305-.06c.261-.053.625-.13 1.035-.227.831-.197 1.81-.466 2.514-.769.804-.346 1.785-.966 2.59-1.523a32.519 32.519 0 0 0 1.268-.925l.075-.058.018-.015.006-.004zm7.055 4.754c-.847-.2-1.931-.494-2.761-.851-.95-.409-2.032-1.1-2.851-1.668A33.93 33.93 0 0 1 12 3.193c-.251.187-.59.435-.978.703-.82.567-1.901 1.26-2.85 1.668-.83.357-1.915.65-2.762.85a33.8 33.8 0 0 1-.91.203V13.5c0 .893.411 1.81 1.129 2.724.714.91 1.686 1.753 2.687 2.482.997.725 2 1.317 2.754 1.73.377.205.69.364.907.471l.023.012.023-.012c.217-.107.53-.266.907-.472a25.62 25.62 0 0 0 2.754-1.73c1.001-.727 1.973-1.572 2.687-2.48.718-.915 1.129-1.832 1.129-2.725V6.617a33.87 33.87 0 0 1-.91-.202zM12 21.75l.31.683-.31.14-.311-.14.311-.683z",
      fill: "currentColor"
    })
  }));
};
Verified.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var NonVerified = function NonVerified(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.53 1.66l.47-.37.684.536.294.22.304.223.356.254.194.135c.804.557 1.785 1.177 2.59 1.523.703.303 1.681.572 2.513.77l.676.152.772.154.617.11v8.128c0 1.357-.62 2.596-1.45 3.651-.832 1.06-1.923 1.997-2.984 2.768a26.825 26.825 0 0 1-2.672 1.698l-.439.24-.504.263-.538.265-.413.19-.486-.225-.465-.23-.504-.263-.193-.105a27.143 27.143 0 0 1-2.918-1.833c-1.061-.771-2.152-1.709-2.985-2.768C3.62 16.091 3 14.852 3 13.496V5.367l1.03-.19.795-.172.24-.056c.831-.197 1.81-.466 2.514-.769.704-.303 1.542-.815 2.28-1.312l.503-.346.356-.254.434-.32.378-.288zm.811 1.78L12 3.187l-.341.251-.41.294-.227.158c-.82.567-1.901 1.26-2.85 1.668-.83.357-1.915.65-2.762.851l-.397.091-.513.111v6.883c0 .893.411 1.81 1.129 2.724.714.91 1.686 1.754 2.687 2.482a25.263 25.263 0 0 0 2.494 1.586l.443.242.476.25.271.135.417-.21.33-.175.183-.099a25.62 25.62 0 0 0 2.754-1.729c1.001-.728 1.973-1.572 2.687-2.482.718-.913 1.129-1.831 1.129-2.724V6.612l-.513-.11-.397-.092c-.847-.2-1.931-.494-2.761-.85-.844-.364-1.793-.951-2.569-1.475l-.509-.352-.41-.294zM8.47 8.26a.75.75 0 0 1 .976-.073l.084.073L12 10.73l2.47-2.47a.75.75 0 0 1 1.133.976l-.073.084-2.47 2.47 2.47 2.47a.75.75 0 0 1-.976 1.133l-.084-.073L12 12.85l-2.47 2.47a.75.75 0 0 1-1.133-.976l.073-.084 2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06z",
      fill: "currentColor"
    })
  }));
};
NonVerified.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      height: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    },
    name: _defineProperty({
      cursor: 'pointer',
      userSelect: 'none',
      outline: 'none',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      color: theme.colors.base.grey600,
      maxWidth: '240px'
    }, theme.breakpoints.down('sm'), {
      maxWidth: '100px'
    }),
    switcher: {
      cursor: 'pointer',
      userSelect: 'none',
      display: 'inline-block',
      outline: 'none'
    },
    switcherIcon: {
      display: 'inline-block',
      marginLeft: theme.spacing(1),
      verticalAlign: '-4px',
      '& svg': {
        width: theme.spacing(2),
        height: theme.spacing(2),
        minWidth: theme.spacing(2),
        minHeight: theme.spacing(2),
        '& path': {
          fill: theme.colors.base.black
        }
      }
    },
    verification: {
      paddingLeft: theme.spacing(1)
    },
    verificationIcon: {
      position: 'relative',
      bottom: '-3px',
      width: theme.spacing(2),
      height: theme.spacing(2),
      '& svg path': {
        fill: 'currentcolor'
      }
    },
    verifiedColor: {
      color: theme.colors.functional.success
    },
    nonVerifiedColor: {
      color: theme.colors.functional.error
    }
  };
});
var UserName = function UserName(_ref) {
  var _ref$user = _ref.user,
    firstName = _ref$user.firstName,
    lastName = _ref$user.lastName,
    email = _ref$user.email,
    _ref$user$verified = _ref$user.verified,
    verified = _ref$user$verified === void 0 ? false : _ref$user$verified,
    onClick = _ref.onClick,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    children = _ref.children;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    name = _useStyles$classes.name,
    switcher = _useStyles$classes.switcher,
    switcherIcon = _useStyles$classes.switcherIcon,
    verifiedColor = _useStyles$classes.verifiedColor,
    nonVerifiedColor = _useStyles$classes.nonVerifiedColor,
    verification = _useStyles$classes.verification,
    verificationIcon = _useStyles$classes.verificationIcon;
  var getDisplayName = function getDisplayName(firstName, lastName, email) {
    return firstName && lastName ? "".concat(firstName[0].toUpperCase(), ". ").concat(lastName[0].toUpperCase() + lastName.slice(1)) : email;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: switcher,
      onClick: onClick,
      onKeyDown: onClick,
      role: "button",
      tabIndex: 0,
      "data-testid": "switcher",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        component: "span",
        className: "strong",
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: switcherIcon,
        children: [!isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronDown, {
          "data-testid": "chevron-down"
        }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronUp, {
          "data-testid": "chevron-up"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: name,
      onClick: onClick,
      onKeyDown: onClick,
      role: "button",
      tabIndex: 0,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "caption",
        component: "span",
        "data-testid": "display-name",
        children: getDisplayName(firstName, lastName, email)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: verification,
        children: verified ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Verified, {
          className: (0, _classnames.default)(verificationIcon, verifiedColor),
          "data-testid": "verified"
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(NonVerified, {
          className: (0, _classnames.default)(verificationIcon, nonVerifiedColor),
          "data-testid": "non-verified"
        })
      })]
    })]
  });
};
exports.UserName = UserName;