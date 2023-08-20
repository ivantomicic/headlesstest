"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackElement = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _lodash = require("lodash");
var _classnames3 = _interopRequireDefault(require("classnames"));
var _StackContext = require("./../StackContext");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["value", "children", "handleChange", "className", "disabled", "details"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowDown = function ArrowDown(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 13.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L12 16.06 5.47 9.53a.75.75 0 0 1 1.06-1.06L12 13.94z",
      fill: "currentColor"
    })
  }));
};
ArrowDown.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ArrowUp = function ArrowUp(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 10.06l5.47 5.47a.75.75 0 0 0 1.06-1.06L12 7.94l-6.53 6.53a.75.75 0 0 0 1.06 1.06L12 10.06z",
      fill: "currentColor"
    })
  }));
};
ArrowUp.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var StackElement = function StackElement(_ref) {
  var _classnames, _classnames2;
  var value = _ref.value,
    children = _ref.children,
    handleChange = _ref.handleChange,
    className = _ref.className,
    disabled = _ref.disabled,
    details = _ref.details,
    rootElementProps = _objectWithoutProperties(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_StackContext.StackContext),
    setSelected = _useContext.setSelected,
    selectedValue = _useContext.selectedValue,
    displayButtons = _useContext.displayButtons,
    error = _useContext.error,
    _useContext$groupName = _useContext.groupName,
    groupName = _useContext$groupName === void 0 ? 'singleSelection' : _useContext$groupName;
  var handleSpace = (0, _react.useCallback)(function (e) {
    if (!disabled && (e.code === 'Space' || e.code === 'Enter')) {
      setSelected(value);
    }
  }, [disabled, setSelected, value]);
  var handleMouseUp = (0, _react.useCallback)(function () {
    return !disabled && setSelected(value);
  }, [disabled, setSelected, value]);
  var handleOnChange = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    if (handleChange) {
      handleChange(e);
    }
  }, [handleChange]);
  var isChecked = selectedValue === value;
  var labelId = [(0, _lodash.kebabCase)(value.toLowerCase()), 'label'].join('-');
  var arrowDataTestId = "stack-element-arrow-".concat(groupName);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    className: (0, _classnames3.default)(_indexModule.default.Item, (_classnames = {}, _defineProperty(_classnames, _indexModule.default.selected, isChecked), _defineProperty(_classnames, _indexModule.default.error, error), _classnames), className)
  }, rootElementProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, {
      classes: {
        root: (0, _classnames3.default)(_indexModule.default.Label),
        label: _indexModule.default.Summary,
        disabled: _indexModule.default.disabled
      },
      control: displayButtons ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Radio, {
        name: groupName,
        inputProps: {
          'data-testid': 'stack-element-input',
          'aria-labelledby': labelId
        },
        className: (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, _indexModule.default.Radio, true), _defineProperty(_classnames2, "error", !!error), _classnames2))
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}),
      onKeyDown: handleSpace,
      onMouseUp: handleMouseUp,
      value: String(value),
      disabled: disabled,
      checked: isChecked,
      onChange: handleOnChange,
      label: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _indexModule.default.Text,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          className: "strong",
          component: "div",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            id: labelId,
            children: children
          })
        }), details && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _indexModule.default.Arrow,
          "data-testid": arrowDataTestId,
          children: isChecked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowUp, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowDown, {})
        })]
      })
    }), isChecked && details && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _indexModule.default.Details,
      "data-testid": "stack-element-details",
      children: details
    })]
  }));
};
exports.StackElement = StackElement;