"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _UserDropDown = require("./UserDropDown");
var _mui = require("tss-react/mui");
var _UserName = require("./UserName");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      height: theme.spacing(6)
    },
    userDropDownContainer: {
      marginTop: theme.spacing(2)
    }
  };
});
var UserMenu = function UserMenu(_ref) {
  var user = _ref.user,
    userNameContent = _ref.userNameContent,
    dropDownItems = _ref.dropDownItems,
    isOpen = _ref.isOpen,
    onClick = _ref.onClick,
    dropDownContainerStyles = _ref.dropDownContainerStyles,
    _ref$padDropdownItems = _ref.padDropdownItems,
    padDropdownItems = _ref$padDropdownItems === void 0 ? true : _ref$padDropdownItems;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    userDropDownContainer = _useStyles$classes.userDropDownContainer;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_UserName.UserName, {
      user: user,
      isOpen: isOpen,
      onClick: onClick,
      children: userNameContent
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: userDropDownContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserDropDown.UserDropDown, {
        open: isOpen,
        dropDownItems: dropDownItems,
        dropDownContainerStyles: dropDownContainerStyles,
        padDropdownItems: padDropdownItems
      })
    })]
  });
};
exports.UserMenu = UserMenu;