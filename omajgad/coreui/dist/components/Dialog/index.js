"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;
var _react = require("react");
var _classnames3 = _interopRequireDefault(require("classnames"));
var _Button = require("./../Button");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["title", "describer", "children", "isOpen", "onCancel", "onAction", "divider"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Dialog = function Dialog(_ref) {
  var title = _ref.title,
    describer = _ref.describer,
    children = _ref.children,
    isOpen = _ref.isOpen,
    onCancel = _ref.onCancel,
    onAction = _ref.onAction,
    divider = _ref.divider,
    rest = _objectWithoutProperties(_ref, _excluded);
  var dialogRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [dialogRef, isOpen]);
  var onKeyDown = function onKeyDown(event) {
    var key = event.key;
    if (key === 'Escape' && onCancel) {
      onCancel.cb();
    }
  };
  var onClickCancel = (0, _react.useCallback)(function (event) {
    if (onCancel) {
      onCancel.cb();
    }
    event.stopPropagation();
  }, [onCancel]);
  var onClickAction = (0, _react.useCallback)(function (event) {
    if (onAction) {
      onAction.cb();
    }
    event.stopPropagation();
  }, [onAction]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    className: (0, _classnames3.default)(_indexModule.default.dialog, _defineProperty({}, _indexModule.default.dialogOpen, isOpen)),
    role: "presentation",
    "aria-labelledby": title,
    "aria-describedby": describer,
    onKeyDown: onKeyDown,
    onClick: onClickCancel
  }, rest), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _indexModule.default.dialogContainer,
      ref: dialogRef,
      "data-testid": "dialog-container",
      tabIndex: 1,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _indexModule.default.dialogSurface,
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: _indexModule.default.dialogTitle,
          id: title,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _indexModule.default.dialogContent,
          id: describer,
          children: children
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
          className: (0, _classnames3.default)(_indexModule.default.dialogActions, _defineProperty({}, _indexModule.default.dialogDivider, divider)),
          children: [onCancel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            onClick: onClickCancel,
            variant: "tertiary",
            "data-testid": "dialog-button-cancel",
            children: onCancel.label
          }), onAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            onClick: onClickAction,
            variant: "tertiary",
            disabled: onAction.disabled || onAction.loading,
            loading: onAction.loading,
            "data-testid": "dialog-button-action",
            children: onAction.label
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _indexModule.default.dialogScrim
    })]
  }));
};
exports.Dialog = Dialog;