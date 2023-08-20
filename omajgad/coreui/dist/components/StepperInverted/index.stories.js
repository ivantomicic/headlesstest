"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StepperInvertedExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var steps = [{
  title: 'First step',
  subtitle: 'First step subtitle',
  description: 'First step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: "First Custom component"
  })
}, {
  title: 'Second step',
  subtitle: 'Second step subtitle',
  description: 'Second step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: "Second Custom component"
  })
}, {
  title: 'Third step',
  subtitle: 'Third step subtitle',
  description: 'Third step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: "Third step component"
  })
}];
var gapLabels = {
  small: 'small',
  large: 'large'
};
var _default = {
  title: 'Components/Stepper',
  component: _index.StepperInverted,
  argTypes: {
    activeStep: {
      control: {
        type: 'number',
        min: 0,
        max: 2,
        step: 1
      }
    },
    gap: {
      options: Object.keys(gapLabels),
      control: {
        type: 'radio',
        labels: gapLabels
      }
    },
    steps: {
      control: {
        disable: true
      }
    },
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    }
  }
};
exports.default = _default;
var StepperInvertedExample = function StepperInvertedExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StepperInverted, _objectSpread({}, args));
};
exports.StepperInvertedExample = StepperInvertedExample;
StepperInvertedExample.args = {
  steps: steps,
  gap: 'large'
};