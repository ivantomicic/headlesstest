"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepperInverted = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _StepLabel = require("./StepLabel");
var _StepContent = require("./StepContent");
var _Step = require("./Step");
var _StepIcon = require("./StepIcon");
var _StepConnector = require("./StepConnector");
var _designTokens = require("@crowdhouse/design-tokens");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    // The border' color is fixed by default, so we change the border color to currentColor and apply the correct
    // colors from the parent component
    subtitle: {
      color: _designTokens.colors.base.white
    },
    description: {
      color: _designTokens.colors.base.white
    },
    placeholder: {
      color: _designTokens.colors.base.white,
      padding: theme.spacing(1),
      borderColor: _designTokens.colors.base.white,
      border: "1px dashed ".concat(_designTokens.colors.base.white)
    }
  };
});
var useStylesStepper = (0, _mui.makeStyles)()({
  // The border' color is fixed by default, so we change the border color to currentColor and apply the correct
  // colors from the parent component
  root: {
    padding: 0,
    color: _designTokens.colors.base.grey200,
    backgroundColor: _designTokens.colors.base.blueLagoon800
  },
  horizontal: {
    alignItems: 'flex-start'
  }
});
var StepperInverted = function StepperInverted(_ref) {
  var steps = _ref.steps,
    activeStep = _ref.activeStep,
    gap = _ref.gap,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation;
  var theme = (0, _material.useTheme)();
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var _useStylesStepper = useStylesStepper(),
    stepperClasses = _useStylesStepper.classes;
  var useBoxStyles = {
    marginTop: theme.spacing(0.5)
  };
  var useComponentBoxStyles = {
    marginTop: theme.spacing(2)
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Stepper, {
    classes: stepperClasses,
    connector: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StepConnector.StepConnector, {
      gap: gap
    }),
    orientation: orientation,
    children: steps.map(function (step, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Step.Step, {
        expanded: true,
        completed: i < activeStep,
        active: i === activeStep,
        "data-testid": "StepperStep",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StepLabel.StepLabel, {
          StepIconComponent: _StepIcon.StepIcon,
          "data-testid": "StepperLabel",
          children: step.title
        }), ((step === null || step === void 0 ? void 0 : step.subtitle) || (step === null || step === void 0 ? void 0 : step.description) || (step === null || step === void 0 ? void 0 : step.component)) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_StepContent.StepContent, {
          "data-testid": "StepperContent",
          orientation: orientation,
          children: [(step === null || step === void 0 ? void 0 : step.subtitle) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useBoxStyles,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body1",
              classes: {
                root: classes.subtitle
              },
              "data-testid": "StepperSubtitle",
              children: step === null || step === void 0 ? void 0 : step.subtitle
            })
          }), (step === null || step === void 0 ? void 0 : step.description) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useBoxStyles,
            "data-testid": "StepperDescription",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body2",
              className: classes.description,
              children: step.description
            })
          }), (step === null || step === void 0 ? void 0 : step.component) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useComponentBoxStyles,
            "data-testid": "StepperComponent",
            className: classes.placeholder,
            children: step === null || step === void 0 ? void 0 : step.component
          })]
        })]
      }, "".concat(step.title));
    })
  });
};
exports.StepperInverted = StepperInverted;