"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryNavigationItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _NavigationComponentContainer = require("./NavigationComponentContainer");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["parentRef", "active", "navigationComponent", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useSecondaryNavigationItemStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      display: 'flex',
      padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1.5)),
      alignItems: 'center',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: theme.colors.base.black,
      '& svg': {
        minWidth: theme.spacing(3),
        minHeight: theme.spacing(3),
        marginRight: theme.spacing(1),
        '& path': {
          fill: 'currentColor'
        }
      },
      '&:hover': {
        position: 'relative',
        color: theme.colors.brand.primary,
        backgroundColor: theme.colors.brand.primaryLight,
        borderRadius: '96px',
        '& path': {
          fill: 'currentcolor'
        }
      }
    },
    active: {
      position: 'relative',
      color: theme.colors.brand.primary,
      backgroundColor: theme.colors.brand.primaryLight,
      borderRadius: '96px',
      '& path': {
        fill: 'currentcolor'
      }
    }
  };
});
var SecondaryNavigationItem = function SecondaryNavigationItem(_ref) {
  var parentRef = _ref.parentRef,
    active = _ref.active,
    navigationComponent = _ref.navigationComponent,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useSecondaryNavigati = useSecondaryNavigationItemStyles(),
    _useSecondaryNavigati2 = _useSecondaryNavigati.classes,
    root = _useSecondaryNavigati2.root,
    activeStyle = _useSecondaryNavigati2.active;
  var navigationProps = _objectSpread({
    className: (0, _classnames2.default)(root, _defineProperty({}, activeStyle, active)),
    role: 'button'
  }, props);
  if (!navigationComponent) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavigationComponentContainer.NavigationComponentContainer, {
      parentRef: parentRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread(_objectSpread({}, navigationProps), {}, {
        "data-testid": "secondary-navigation-item-anchor",
        children: children
      }))
    });
  }
  var NavigationComponent = navigationComponent.component,
    componentProps = navigationComponent.componentProps;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavigationComponentContainer.NavigationComponentContainer, {
    parentRef: parentRef,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(NavigationComponent, _objectSpread(_objectSpread(_objectSpread({}, navigationProps), componentProps), {}, {
      children: children
    }))
  });
};
exports.SecondaryNavigationItem = SecondaryNavigationItem;