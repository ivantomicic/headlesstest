"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StepperNoAnimationExample = exports.StepperExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var steps = [{
  title: 'First step',
  subtitle: 'First step subtitle',
  description: 'First step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      border: '1px dashed grey'
    },
    children: "First Custom component"
  })
}, {
  title: 'Second step',
  subtitle: 'Second step subtitle',
  description: 'Second step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      border: '1px dashed grey'
    },
    children: "Second Custom component"
  })
}, {
  title: 'Third step',
  subtitle: 'Third step subtitle',
  description: 'Third step description',
  component: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      border: '1px dashed grey'
    },
    children: "Third Custom component"
  })
}];
var gapLabels = {
  small: 'small',
  large: 'large'
};
var _default = {
  title: 'Components/Stepper',
  component: _index.Stepper,
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
      table: {
        disable: true
      }
    },
    classesStepper: {
      table: {
        disable: true
      }
    },
    animation: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
var StepperExample = function StepperExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Stepper, {
    steps: steps,
    activeStep: args.activeStep,
    gap: args.gap,
    animation: args.animation
  });
};
exports.StepperExample = StepperExample;
StepperExample.args = {
  steps: steps,
  gap: 'large',
  animation: true
};
var StepperNoAnimationExample = function StepperNoAnimationExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Stepper, {
    steps: steps,
    activeStep: args.activeStep,
    gap: args.gap,
    animation: args.animation
  });
};
exports.StepperNoAnimationExample = StepperNoAnimationExample;
StepperNoAnimationExample.args = {
  steps: steps,
  gap: 'large',
  activeStep: 1,
  animation: false
};