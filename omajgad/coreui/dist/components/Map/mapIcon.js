"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DefaultPin = function DefaultPin(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      filter: "url(#a)",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M41 24c0 8.837-8 16.5-16 24-7.5-8-16-14.163-16-24 0-8.837 7.163-16 16-16s16 7.163 16 16z",
        fill: "#008799"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "25",
        cy: "24",
        r: "8",
        fill: "#fff"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
        id: "a",
        x: ".4",
        y: ".4",
        width: "49.2",
        height: "57.2",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feMorphology", {
          radius: "3.3",
          in: "SourceAlpha",
          result: "effect1_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feOffset", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("feGaussianBlur", {
          stdDeviation: "2"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feMorphology", {
          radius: "1.4",
          in: "SourceAlpha",
          result: "effect2_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feOffset", {
          dy: "1"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feGaussianBlur", {
          stdDeviation: "5"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
          in2: "effect1_dropShadow_4095_65193",
          result: "effect2_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feMorphology", {
          radius: ".5",
          in: "SourceAlpha",
          result: "effect3_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feOffset", {
          dy: "4"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feGaussianBlur", {
          stdDeviation: "2.5"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
          in2: "effect2_dropShadow_4095_65193",
          result: "effect3_dropShadow_4095_65193"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect3_dropShadow_4095_65193",
          result: "shape"
        })]
      })
    })]
  }));
};
DefaultPin.defaultProps = {
  width: "50",
  height: "58",
  viewBox: "0 0 50 58",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function () {
  return {
    root: {
      marginLeft: '-25px',
      marginTop: '-50px'
    }
  };
});
var MapIcon = function MapIcon(props) {
  var customIcon = props.customIcon,
    disableTooltip = props.disableTooltip,
    label = props.label;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var title = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: label
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: disableTooltip ? '' : title,
      children: !customIcon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultPin, {
        className: classes.root,
        "data-testid": "default-pin"
      }) : customIcon
    })
  }));
};
exports.MapIcon = MapIcon;