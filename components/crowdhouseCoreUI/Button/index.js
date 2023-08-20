"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _Loader = require("./../Loader");
var _window = require("./../../helpers/window");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Button = function Button(_ref) {
  var _classnames;
  var onClick = _ref.onClick,
    className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    children = _ref.children,
    loading = _ref.loading,
    icon = _ref.icon,
    disabled = _ref.disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$labelAlign = _ref.labelAlign,
    labelAlign = _ref$labelAlign === void 0 ? 'label-no-align' : _ref$labelAlign,
    buttonProps = _ref.buttonProps;
  var classList = (0, _classnames2.default)(_indexModule.default.core, _indexModule.default.chBtn, className, _indexModule.default[variant], _indexModule.default[size], (_classnames = {}, _defineProperty(_classnames, _indexModule.default.isIcon, !!icon), _defineProperty(_classnames, _indexModule.default.disabled, disabled || loading), _defineProperty(_classnames, _indexModule.default[labelAlign], labelAlign), _defineProperty(_classnames, _indexModule.default.growTargetSize, (0, _window.isMobileDevice)() && size === 'small'), _classnames));
  var onClickButton = (0, _react.useCallback)(function (e) {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }, [onClick, disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
    type: type,
    className: classList,
    disabled: loading || disabled,
    onClick: onClickButton
  }, buttonProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _indexModule.default.wrapper,
      children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _indexModule.default.loader,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader.Loader, {})
      }), icon || children]
    })
  }));
};
exports.Button = Button;