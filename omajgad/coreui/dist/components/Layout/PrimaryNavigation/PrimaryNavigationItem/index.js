"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrimaryNavigationStyles = exports.PrimaryNavigationItem = void 0;
var _classnames2 = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var usePrimaryNavigationStyles = (0, _mui.makeStyles)()(function (theme) {
  var _svg, _root;
  return {
    root: (_root = {
      color: theme.colors.base.black,
      padding: theme.spacing(1),
      textDecoration: 'none',
      textTransform: 'initial',
      textAlign: 'center',
      whiteSpace: 'break-spaces'
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      whiteSpace: 'nowrap',
      padding: theme.spacing(2)
    }), _defineProperty(_root, '& svg', (_svg = {
      minWidth: theme.spacing(3),
      minHeight: theme.spacing(3),
      marginBottom: theme.spacing(1)
    }, _defineProperty(_svg, theme.breakpoints.up('md'), {
      marginRight: theme.spacing(2),
      marginBottom: 0
    }), _defineProperty(_svg, '& path', {
      fill: 'currentcolor'
    }), _svg)), _defineProperty(_root, '&:hover', {
      backgroundColor: theme.colors.brand.primaryLight,
      color: theme.colors.brand.primary
    }), _root),
    rootLayout: _defineProperty({
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center'
    }, theme.breakpoints.up('md'), {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flex: 'unset',
      flexWrap: 'nowrap'
    }),
    active: {
      backgroundColor: theme.colors.brand.primaryLight,
      color: theme.colors.brand.primary
    }
  };
});
exports.usePrimaryNavigationStyles = usePrimaryNavigationStyles;
var PrimaryNavigationItem = function PrimaryNavigationItem(_ref) {
  var active = _ref.active,
    children = _ref.children,
    href = _ref.href;
  var _usePrimaryNavigation = usePrimaryNavigationStyles(),
    _usePrimaryNavigation2 = _usePrimaryNavigation.classes,
    root = _usePrimaryNavigation2.root,
    rootLayout = _usePrimaryNavigation2.rootLayout,
    activeStyle = _usePrimaryNavigation2.active;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: href,
    className: (0, _classnames2.default)(root, rootLayout, _defineProperty({}, activeStyle, active)),
    "data-testid": "primary-navigation-item-anchor",
    children: children
  });
};
exports.PrimaryNavigationItem = PrimaryNavigationItem;