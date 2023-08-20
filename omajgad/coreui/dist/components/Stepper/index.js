"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _StepLabel = require("./StepLabel");
var _StepContent = require("./StepContent");
var _Step = require("./Step");
var _StepIcon = require("./StepIcon");
var _StepConnector = require("./StepConnector");
var _designTokens = require("@crowdhouse/design-tokens");
var _StepIconNoAnimation = require("./StepIconNoAnimation");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()({
  // The border' color is fixed by default, so we change the border color to currentColor and apply the correct
  // colors from the parent component
  root: {
    padding: 0,
    color: _designTokens.colors.base.grey400,
    backgroundColor: 'transparent'
  }
});
var Stepper = function Stepper(_ref) {
  var steps = _ref.steps,
    activeStep = _ref.activeStep,
    gap = _ref.gap,
    classesStepper = _ref.classesStepper,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? true : _ref$animation;
  var theme = (0, _material.useTheme)();
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var useBoxStyles = {
    marginTop: theme.spacing(0.5)
  };
  var useComponentBoxStyles = {
    marginTop: theme.spacing(2)
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Stepper, {
    orientation: "vertical",
    classes: _objectSpread(_objectSpread({}, classes), classesStepper),
    connector: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StepConnector.StepConnector, {
      gap: gap
    }),
    children: steps.map(function (step, i) {
      var _step$id;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Step.Step, _objectSpread(_objectSpread({
        expanded: true,
        completed: i < activeStep,
        active: i === activeStep,
        "data-testid": "StepperStep"
      }, step.stepProps), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StepLabel.StepLabel, {
          StepIconComponent: animation ? _StepIcon.StepIcon : _StepIconNoAnimation.StepIconNoAnimation,
          "data-testid": "StepperLabel",
          children: step.title
        }), ((step === null || step === void 0 ? void 0 : step.subtitle) || (step === null || step === void 0 ? void 0 : step.description) || (step === null || step === void 0 ? void 0 : step.component)) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_StepContent.StepContent, {
          "data-testid": "StepperContent",
          children: [(step === null || step === void 0 ? void 0 : step.subtitle) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useBoxStyles,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body1",
              component: "div",
              color: "textPrimary",
              "data-testid": "StepperSubtitle",
              children: step === null || step === void 0 ? void 0 : step.subtitle
            })
          }), (step === null || step === void 0 ? void 0 : step.description) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useBoxStyles,
            "data-testid": "StepperDescription",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body2",
              component: "div",
              className: "muted",
              children: step.description
            })
          }), (step === null || step === void 0 ? void 0 : step.component) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: useComponentBoxStyles,
            "data-testid": "StepperComponent",
            children: step === null || step === void 0 ? void 0 : step.component
          })]
        })]
      }), (_step$id = step.id) !== null && _step$id !== void 0 ? _step$id : step.title.toString());
    })
  });
};
exports.Stepper = Stepper;