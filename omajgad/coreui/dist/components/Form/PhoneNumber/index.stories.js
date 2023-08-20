"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PhoneNumberExampleEN = exports.PhoneNumberExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _addonActions = require("@storybook/addon-actions");
var _countries = require("./constants/countries");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'Components/Form/PhoneNumber',
  component: _.PhoneNumber,
  argTypes: {
    error: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    helperText: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        type: 'text'
      }
    }
  }
};
exports.default = _default;
var PhoneNumberExample = function PhoneNumberExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PhoneNumber, _objectSpread({
    name: "phone",
    onChange: (0, _addonActions.action)('onChange'),
    phoneNumberTextFieldProps: {
      placeholder: 'Telefonummer'
    }
  }, args));
};
exports.PhoneNumberExample = PhoneNumberExample;
PhoneNumberExample.args = {
  value: '0787388282',
  helperText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam. Vel quam elementum pulvinar etiam non quam. Commodo viverra maecenas accumsan lacus vel. Nisi est sit amet facilisis magna etiam.'
};
var PhoneNumberExampleEN = function PhoneNumberExampleEN(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PhoneNumber, _objectSpread({
    name: "phone",
    onChange: (0, _addonActions.action)('onChange'),
    countriesMap: _countries.countriesMapEN,
    phoneNumberTextFieldProps: {
      placeholder: 'Phone number'
    }
  }, args));
};
exports.PhoneNumberExampleEN = PhoneNumberExampleEN;