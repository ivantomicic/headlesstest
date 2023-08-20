"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateTimePickerExample = exports.DatePickerExample = void 0;
var _react = require("react");
var _ = require(".");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = {
  title: 'Components/Date Pickers',
  component: _.DateTimePicker,
  argTypes: {
    locale: {
      defaultValue: 'en',
      control: {
        type: 'select',
        options: ['en', 'de-CH', 'de-DE']
      }
    },
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text'
      }
    },
    helperText: {
      defaultValue: 'Helper Text',
      control: {
        type: 'text'
      }
    },
    okText: {
      defaultValue: 'OK',
      control: {
        type: 'text'
      }
    },
    cancelText: {
      defaultValue: 'Cancel',
      control: {
        type: 'text'
      }
    },
    todayText: {
      defaultValue: 'Today',
      control: {
        type: 'text'
      }
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
var DatePickerExample = function DatePickerExample(args) {
  var _useState = (0, _react.useState)(new Date('2021-08-31')),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.DatePicker, _objectSpread(_objectSpread({}, args), {}, {
    value: value,
    onChange: function onChange(date) {
      setValue(date);
    },
    renderInput: function renderInput(props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread(_objectSpread({}, props), {}, {
        helperText: args.helperText
      }));
    }
  }));
};
exports.DatePickerExample = DatePickerExample;
var DateTimePickerExample = function DateTimePickerExample(args) {
  var _useState3 = (0, _react.useState)(new Date('2021-08-31')),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.DateTimePicker, _objectSpread(_objectSpread({}, args), {}, {
    value: value,
    onChange: function onChange(date) {
      setValue(date);
    },
    renderInput: function renderInput(props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread(_objectSpread({}, props), {}, {
        helperText: args.helperText
      }));
    }
  }));
};
exports.DateTimePickerExample = DateTimePickerExample;