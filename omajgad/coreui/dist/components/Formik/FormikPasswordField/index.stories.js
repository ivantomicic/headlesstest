"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormikPasswordFieldExample = void 0;
var _material = require("@mui/material");
var _addonActions = require("@storybook/addon-actions");
var _formik = require("formik");
var yup = _interopRequireWildcard(require("yup"));
var _ = require(".");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["initialValues"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _default = {
  title: 'Components/Formik',
  component: _formik.Formik
};
exports.default = _default;
var FormikPasswordFieldExample = function FormikPasswordFieldExample(_ref) {
  var _ref$initialValues = _ref.initialValues,
    initialValues = _ref$initialValues === void 0 ? {
      password: ''
    } : _ref$initialValues,
    args = _objectWithoutProperties(_ref, _excluded);
  var accessibilityLabels = {
    show: 'Show password',
    hide: 'Hide password'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, _objectSpread(_objectSpread({
    initialValues: initialValues,
    onSubmit: (0, _addonActions.action)('onSubmit'),
    validationSchema: yup.object().shape({
      password: yup.string().required('Required')
    })
  }, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Form, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Container, {
        maxWidth: "md",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          container: true,
          spacing: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
              component: _.FormikPasswordField,
              label: "Password",
              name: "password",
              a11ylabels: accessibilityLabels
            })
          })
        })
      })
    })
  }));
};
exports.FormikPasswordFieldExample = FormikPasswordFieldExample;