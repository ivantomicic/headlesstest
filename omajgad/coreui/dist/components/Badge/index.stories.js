"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BadgeExample = void 0;
var _ = require(".");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'Components/Badge',
  component: _.Badge,
  argTypes: {
    status: {
      name: 'status (*Deprecated, use color instead)',
      defaultValue: 'success',
      description: '* Deprecated. Use color instead',
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'info', 'muted']
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'info', 'muted', 'secondary', 'primary']
      }
    },
    icon: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
var BadgeExample = function BadgeExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Badge, _objectSpread(_objectSpread({}, args), {}, {
    children: "Label"
  }));
};
exports.BadgeExample = BadgeExample;