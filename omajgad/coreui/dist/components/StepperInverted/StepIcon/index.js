"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _tssReact = require("tss-react");
var _jsxRuntime = require("react/jsx-runtime");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      fill: 'currentColor'
    },
    active: {
      animation: "".concat((0, _tssReact.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            0% {\n              box-shadow: 0 0 0 0 rgba(0, 135, 153, 0.8);\n            }\n            70% {\n              box-shadow: 0 0 0 ", " rgba(0, 135, 153, 0);\n            }\n            100% {\n              box-shadow: 0 0 0 rgba(0, 135, 153, 0);\n            }\n            "])), theme.spacing(2)), " 2s infinite"),
      borderRadius: '50%'
    }
  };
});
var StepIcon = function StepIcon(_ref) {
  var active = _ref.active,
    dataTestId = _ref['data-testid'];
  var _useStyles = useStyles(),
    classes = _useStyles.classes,
    cx = _useStyles.cx;
  // We use custom StepIcon because the default component renders different icons in the dots for each states
  // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/StepIcon/StepIcon.js

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SvgIcon, {
    className: cx(classes.root, _defineProperty({}, classes.active, active)),
    "data-testid": dataTestId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    })
  });
};
exports.StepIcon = StepIcon;