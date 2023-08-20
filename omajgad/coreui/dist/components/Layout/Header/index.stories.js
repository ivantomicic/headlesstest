"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderWithUserMenuAndBanner = exports.HeaderWithBackAndChildren = void 0;
var _react = _interopRequireWildcard(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _ = require("./");
var _material = require("@mui/material");
var _Alert = require("./../../Alert");
var _UserMenu = require("./../UserMenu");
var _index = _interopRequireDefault(require("./../UserMenu/index.stories"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = {
  title: 'Components/Layout/Header',
  component: _.Header,
  args: {
    showBackOnSmallViewport: true,
    onBackClick: undefined,
    logoUrl: {
      href: undefined,
      title: 'Test Title'
    }
  }
};
exports.default = _default;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuIsOpen = _useState2[0],
    setMenuIsOpen = _useState2[1];
  var showBackOnSmallViewport = args.showBackOnSmallViewport,
    onBackClick = args.onBackClick,
    logoUrl = args.logoUrl,
    banner = args.banner,
    children = args.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Header, {
    showBackOnSmallViewport: showBackOnSmallViewport,
    onBackClick: onBackClick,
    onCloseClick: function onCloseClick() {
      return setMenuIsOpen(false);
    },
    showClose: menuIsOpen,
    logoUrl: logoUrl,
    banner: banner,
    children: children && /*#__PURE__*/(0, _react.cloneElement)(children, {
      isOpen: menuIsOpen,
      onClick: function onClick() {
        return setMenuIsOpen(!menuIsOpen);
      }
    })
  });
};
var HeaderWithBackAndChildren = Template.bind({});
exports.HeaderWithBackAndChildren = HeaderWithBackAndChildren;
HeaderWithBackAndChildren.args = {
  onBackClick: (0, _addonActions.action)('onClick'),
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
    variant: "body2",
    children: "Test Child"
  })
};
var useUserMenuInHeaderStyles = (0, _mui.makeStyles)()({
  root: {
    left: 'auto',
    right: 0
  }
});
var UserMenuInHeader = function UserMenuInHeader(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useUserMenuInHeaderS = useUserMenuInHeaderStyles(),
    root = _useUserMenuInHeaderS.classes.root;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserMenu.UserMenu, _objectSpread({}, _objectSpread(_objectSpread({}, _index.default.args), {}, {
    dropDownContainerStyles: root
  }, props)));
};
var HeaderWithUserMenuAndBanner = Template.bind({});
exports.HeaderWithUserMenuAndBanner = HeaderWithUserMenuAndBanner;
HeaderWithUserMenuAndBanner.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserMenuInHeader, {}),
  banner: {
    items: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.Alert, {
      severity: "error",
      style: {
        margin: '8px 0'
      },
      children: "Error Alert Banner Item"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.Alert, {
      severity: "warning",
      style: {
        margin: '8px 0'
      },
      children: "Warning Alert Banner Item"
    })]
  }
};