"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepIconNoAnimation = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      fill: 'currentColor',
      overflow: 'visible'
    }
  };
});
var StepIconNoAnimation = function StepIconNoAnimation(_ref) {
  var completed = _ref.completed,
    active = _ref.active,
    dataTestId = _ref['data-testid'];
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.SvgIcon, {
    className: active ? 'active' : '',
    classes: classes,
    color: completed || active ? 'primary' : 'inherit',
    "data-testid": dataTestId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    }), active && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        opacity: 0.2,
        cx: "12",
        cy: "12",
        r: "20"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        opacity: 0.2,
        cx: "12",
        cy: "12",
        r: "28"
      })]
    })]
  });
};
exports.StepIconNoAnimation = StepIconNoAnimation;