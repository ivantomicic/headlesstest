"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikTextField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lodash = require("lodash");
var _material = require("@mui/material");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _Form = require("./../../Form");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "field", "helperText", "form", "inputProps", "FormHelperTextProps", "id"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormikTextField = function FormikTextField(_ref) {
  var label = _ref.label,
    field = _ref.field,
    helperText = _ref.helperText,
    form = _ref.form,
    inputProps = _ref.inputProps,
    FormHelperTextProps = _ref.FormHelperTextProps,
    id = _ref.id,
    rest = _objectWithoutProperties(_ref, _excluded);
  var value = field.value,
    onChange = field.onChange,
    onBlur = field.onBlur,
    name = field.name;
  var errors = form.errors,
    touched = form.touched;
  var refInput = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var preventDefault = function preventDefault(e) {
      return e.preventDefault();
    };
    var inputElement = refInput === null || refInput === void 0 ? void 0 : refInput.current;
    if (inputElement) {
      inputElement.addEventListener('wheel', preventDefault);
    }
    return function () {
      if (inputElement) {
        inputElement.removeEventListener('wheel', preventDefault);
      }
    };
  });
  var isTouched = (0, _lodash.get)(touched, name);
  var error = isTouched && (0, _lodash.get)(errors, name);
  var hasError = !!error;
  var elementId = id || "id_".concat(name);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, _objectSpread({
      className: _indexModule.default.TextField,
      label: label,
      name: name,
      value: value,
      onChange: onChange,
      onBlur: onBlur,
      error: !!error,
      inputRef: refInput,
      inputProps: inputProps,
      id: elementId
    }, rest)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.FormHelperText, _objectSpread(_objectSpread({
      error: hasError
    }, FormHelperTextProps), {}, {
      children: error ? error : helperText
    }))]
  });
};
exports.FormikTextField = FormikTextField;