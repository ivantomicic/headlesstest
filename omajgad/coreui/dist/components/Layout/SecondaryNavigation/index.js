"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryNavigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _MaxWidthContainer = require("./../MaxWidthContainer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  var _root;
  return {
    root: (_root = {
      boxSizing: 'border-box',
      width: '100%',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }, _defineProperty(_root, theme.breakpoints.up('xl'), {
      marginLeft: 0
    }), _defineProperty(_root, "backgroundColor", theme.colors.base.white), _defineProperty(_root, "borderBottom", "1px solid ".concat(theme.colors.base.grey300)), _defineProperty(_root, "overflowY", 'hidden'), _defineProperty(_root, "overflowX", 'scroll'), _defineProperty(_root, '::-webkit-scrollbar', {
      width: 0,
      height: 0
    }), _root),
    wrapper: {
      width: '100%'
    },
    itemWrapper: {
      display: 'flex',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }
  };
});
var SecondaryNavigation = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    wrapperClassName = _ref.wrapperClassName;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    wrapper = _useStyles$classes.wrapper,
    itemWrapper = _useStyles$classes.itemWrapper;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(root, className),
    ref: ref,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthContainer.MaxWidthContainer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)(wrapper, wrapperClassName),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: itemWrapper,
          children: children
        })
      })
    })
  });
});
exports.SecondaryNavigation = SecondaryNavigation;