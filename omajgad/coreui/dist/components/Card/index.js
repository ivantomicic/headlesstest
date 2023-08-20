"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames6 = _interopRequireDefault(require("classnames"));
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "media", "className", "onClick", "borderRadius", "bordered", "noVerticalPadding", "contentClassName"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Card = function Card(_ref) {
  var children = _ref.children,
    media = _ref.media,
    className = _ref.className,
    onClick = _ref.onClick,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? 'medium' : _ref$borderRadius,
    bordered = _ref.bordered,
    _ref$noVerticalPaddin = _ref.noVerticalPadding,
    noVerticalPadding = _ref$noVerticalPaddin === void 0 ? false : _ref$noVerticalPaddin,
    contentClassName = _ref.contentClassName,
    rest = _objectWithoutProperties(_ref, _excluded);
  var onClickHandler = (0, _react.useCallback)(function (e) {
    if (!bordered && onClick) {
      onClick(e);
    }
  }, [onClick, bordered]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    className: (0, _classnames6.default)(_indexModule.default.Card, _indexModule.default.elevation, _defineProperty({}, _indexModule.default.link, onClick && !bordered), _defineProperty({}, _indexModule.default.bordered, bordered), _defineProperty({}, _indexModule.default.verticalPadding, !noVerticalPadding), _defineProperty({}, _indexModule.default.borderRadiusSmall, borderRadius === 'small'), _defineProperty({}, _indexModule.default.borderRadiusMedium, borderRadius === 'medium'), className),
    onClick: onClickHandler,
    tabIndex: 0
  }, rest), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "presentation",
      className: _indexModule.default.presentation,
      children: [media, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames6.default)(_indexModule.default.content, contentClassName),
        children: children
      })]
    })
  }));
};
exports.Card = Card;