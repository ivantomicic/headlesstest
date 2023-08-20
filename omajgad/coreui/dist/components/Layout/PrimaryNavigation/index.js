"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryNavigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Hamburger = require("./Hamburger");
var _PrimaryNavigationItem = require("./PrimaryNavigationItem");
var _mui = require("tss-react/mui");
var _material = require("@mui/material");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  var _root;
  return {
    root: (_root = {
      backgroundColor: theme.colors.base.white,
      borderTop: "1px solid ".concat(theme.colors.base.grey300)
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      position: 'fixed',
      height: 'inherit',
      borderTop: 'none',
      borderRight: "1px solid ".concat(theme.colors.base.grey300),
      width: theme.spacing(7),
      minWidth: theme.spacing(7),
      overflow: 'hidden',
      transition: 'cubic-bezier(0, 0, 0.2, 1) min-width 0.5s'
    }), _defineProperty(_root, theme.breakpoints.up('lg'), {
      position: 'unset',
      minWidth: theme.spacing(31)
    }), _root),
    hamburgerMenuOpen: {
      minWidth: theme.spacing(31),
      transition: 'cubic-bezier(0, 0, 0.2, 1) min-width 0.5s'
    },
    linkItemList: _defineProperty({
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row'
    }, theme.breakpoints.up('md'), {
      height: 'auto',
      flexDirection: 'column'
    })
  };
});
var PrimaryNavigation = function PrimaryNavigation(_ref) {
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? 0 : _ref$active,
    items = _ref.items;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    hamburgerMenuOpen = _useStyles$classes.hamburgerMenuOpen,
    linkItemList = _useStyles$classes.linkItemList;
  var _usePrimaryNavigation = (0, _PrimaryNavigationItem.usePrimaryNavigationStyles)(),
    primaryNavigationItemLayout = _usePrimaryNavigation.classes.rootLayout;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHamburgerMenuOpen = _useState2[0],
    setIsHamburgerMenuOpen = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames2.default)(root, _defineProperty({}, hamburgerMenuOpen, isHamburgerMenuOpen)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("nav", {
      className: linkItemList,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        className: primaryNavigationItemLayout,
        sx: {
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hamburger.Hamburger, {
          onClick: function onClick() {
            return setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
          }
        })
      }), items.map(function (_ref2, index) {
        var href = _ref2.href,
          content = _ref2.content;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PrimaryNavigationItem.PrimaryNavigationItem, {
          href: href,
          active: active === index,
          children: content
        }, "primary-navigation-item-".concat(index));
      })]
    })
  });
};
exports.PrimaryNavigation = PrimaryNavigation;