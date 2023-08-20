"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioExample = exports.RadioErrorExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"],
  _excluded2 = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _default = {
  title: 'Components/Form/Radio',
  component: _.Radio,
  argTypes: {
    error: {
      control: {
        type: 'text'
      }
    },
    helperText: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: {
        type: 'text'
      }
    },
    name: {
      control: {
        type: 'text'
      }
    }
  }
};
exports.default = _default;
var RadioExample = function RadioExample(_ref) {
  var children = _ref.children,
    args = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Radio, _objectSpread(_objectSpread({}, args), {}, {
    children: children
  }));
};
exports.RadioExample = RadioExample;
RadioExample.args = {
  name: 'test',
  children: 'Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Et malesuada fames ac turpis egestas. Eleifend mi in nulla posuere sollicitudin aliquam. ',
  helperText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam. Vel quam elementum pulvinar etiam non quam. Commodo viverra maecenas accumsan lacus vel. Nisi est sit amet facilisis magna etiam.'
};
var RadioErrorExample = function RadioErrorExample(_ref2) {
  var children = _ref2.children,
    args = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Radio, _objectSpread(_objectSpread({}, args), {}, {
    children: children
  }));
};
exports.RadioErrorExample = RadioErrorExample;
RadioErrorExample.args = {
  name: 'test',
  error: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
  children: 'Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Et malesuada fames ac turpis egestas. Eleifend mi in nulla posuere sollicitudin aliquam. ',
  helperText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam. Vel quam elementum pulvinar etiam non quam. Commodo viverra maecenas accumsan lacus vel. Nisi est sit amet facilisis magna etiam.'
};