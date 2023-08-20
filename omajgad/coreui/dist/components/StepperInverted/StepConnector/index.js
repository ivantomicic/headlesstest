"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepConnector = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _designTokens = require("@crowdhouse/design-tokens");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["gap"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    // The border' color is fixed by default, so we change the border color to currentColor and apply the correct
    // colors from the parent component
    root: {
      '&.small': {
        minHeight: theme.spacing(3)
      },
      '&.large': {
        minHeight: theme.spacing(5)
      }
    },
    line: {
      borderColor: 'currentColor'
    },
    horizontal: {
      marginTop: '13px'
    },
    vertical: {
      // fix issue causing the line between dots to be slightly misaligned with their center
      marginLeft: "calc(".concat(theme.spacing(1), " - 1px)"),
      paddingBottom: 0
    },
    lineVertical: {
      borderLeftWidth: 2,
      minHeight: 'inherit'
    },
    active: {
      // color of the border in between completed dots
      color: _designTokens.colors.base.white
    },
    completed: {
      // color of the border in between completed dots
      color: _designTokens.colors.base.white
    }
  };
});
var StepConnector = function StepConnector(_ref) {
  var _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 'large' : _ref$gap,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.StepConnector, _objectSpread({
    classes: _objectSpread(_objectSpread({}, classes), {}, {
      root: (0, _classnames.default)(classes.root, {
        large: gap === 'large'
      }, {
        small: gap === 'small'
      })
    }),
    "data-testid": gap === 'large' ? 'StepConnectorLarge' : 'StepConnectorSmall'
  }, otherProps));
};
exports.StepConnector = StepConnector;