"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDropDown = void 0;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  var _listItem;
  return {
    dropdown: {
      position: 'relative',
      height: '100%',
      width: '100%',
      zIndex: 1004
    },
    listContainer: _defineProperty({
      position: 'fixed',
      left: 'auto',
      right: 0,
      width: '100%',
      backgroundColor: theme.colors.base.white,
      overflow: 'hidden',
      boxShadow: '0px 4px 8px -22px rgb(51, 51, 51, 0.08), 0px 12px 17px -1.6px rgb(51, 51, 51, 0.08), 0px 5px 22px -6.8px rgb(51, 51, 51, 0.08)'
    }, theme.breakpoints.up('sm'), {
      position: 'absolute',
      width: 'auto'
    }),
    list: _defineProperty({
      borderTop: "1px solid ".concat(theme.colors.base.grey300),
      listStyle: 'none',
      margin: 0,
      padding: 0
    }, theme.breakpoints.up('sm'), {
      borderTop: 0
    }),
    listItem: (_listItem = {
      alignItems: 'center',
      minWidth: theme.spacing(30),
      backgroundColor: theme.colors.base.white,
      borderBottom: "1px solid ".concat(theme.colors.base.grey300),
      boxSizing: 'border-box',
      color: theme.colors.base.black,
      display: 'flex',
      justifyContent: 'space-between',
      textDecoration: 'none',
      textTransform: 'initial',
      width: '100%'
    }, _defineProperty(_listItem, theme.breakpoints.up('sm'), {
      borderBottom: 0
    }), _defineProperty(_listItem, '&:hover', {
      backgroundColor: theme.colors.brand.primaryLight,
      color: theme.colors.brand.primary
    }), _defineProperty(_listItem, '& svg', {
      minWidth: theme.spacing(3),
      minHeight: theme.spacing(3),
      marginLeft: 'auto',
      '& path': {
        fill: 'currentcolor'
      }
    }), _listItem),
    listItemPadding: _defineProperty({
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2.5),
      paddingBottom: theme.spacing(2.5)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5)
    })
  };
});
var UserDropDown = function UserDropDown(_ref) {
  var open = _ref.open,
    dropDownItems = _ref.dropDownItems,
    dropDownContainerStyles = _ref.dropDownContainerStyles,
    _ref$padDropdownItems = _ref.padDropdownItems,
    padDropdownItems = _ref$padDropdownItems === void 0 ? true : _ref$padDropdownItems;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    dropdown = _useStyles$classes.dropdown,
    listContainer = _useStyles$classes.listContainer,
    list = _useStyles$classes.list,
    listItem = _useStyles$classes.listItem,
    listItemPadding = _useStyles$classes.listItemPadding;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: dropdown,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2.default)(listContainer, dropDownContainerStyles),
      children: open && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: (0, _classnames2.default)(list),
        "data-testid": "user-drop-down",
        children: dropDownItems.map(function (dropDownItem, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: (0, _classnames2.default)(listItem, _defineProperty({}, listItemPadding, padDropdownItems)),
            children: dropDownItem
          }, "user-drop-down-li-".concat(index));
        })
      })
    })
  });
};
exports.UserDropDown = UserDropDown;