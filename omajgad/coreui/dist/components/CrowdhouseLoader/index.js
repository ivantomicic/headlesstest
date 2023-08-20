"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdhouseLoader = void 0;
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      width: '4rem',
      height: '4rem',
      '& path': {
        fill: theme.colors.brand.primary
      }
    }
  };
});
var CrowdhouseLoader = function CrowdhouseLoader(_ref) {
  var className = _ref.className;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    className: (0, _classnames.default)(classes.root, className),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      "data-testid": "crowdhouse-loader",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64",
      fill: "none",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
        children: '@keyframes a0_t{0%,60%,85%,to{transform:translate(54.5px,54.5px) scale(1,1) translate(-54.5px,-54.5px)}10%{transform:translate(54.5px,54.5px) scale(1,1) translate(-54.5px,-54.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}35%{transform:translate(54.5px,54.5px) scale(0,0) translate(-54.5px,-54.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes a1_t{0%{transform:translate(32px,54.5px) scale(1,1) translate(-32px,-54.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}25%{transform:translate(32px,54.5px) scale(0,0) translate(-32px,-54.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%,85%,to{transform:translate(32px,54.5px) scale(1,1) translate(-32px,-54.5px)}}@keyframes a2_t{0%,75%,to{transform:translate(9.5px,47.9998px) scale(1,1) translate(-9.5px,-47.9998px)}25%{transform:translate(9.5px,47.9998px) scale(1,1) translate(-9.5px,-47.9998px);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(9.5px,47.9998px) scale(0,0) translate(-9.5px,-47.9998px);animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes a3_t{0%,75%,85%,to{transform:translate(44px,20px) scale(1,1) translate(-44px,-20px)}15%{transform:translate(44px,20px) scale(1,1) translate(-44px,-20px);animation-timing-function:cubic-bezier(.42,0,.58,1)}40%{transform:translate(44px,20px) scale(0,0) translate(-44px,-20px);animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes a4_t{0%,60%,85%,to{transform:translate(9.5px,13.5px) scale(1,1) translate(-9.5px,-13.5px)}10%{transform:translate(9.5px,13.5px) scale(1,1) translate(-9.5px,-13.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}35%{transform:translate(9.5px,13.5px) scale(0,0) translate(-9.5px,-13.5px);animation-timing-function:cubic-bezier(.42,0,.58,1)}}'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M64 64H45V45h19v19z",
        style: {
          animation: '2s linear infinite both a0_t'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M24 64h16V45H24v19z",
        style: {
          animation: '2s linear infinite both a1_t'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M0 64h19V32H0v32z",
        style: {
          animation: '2s linear infinite both a2_t'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M64 40H24V0h40v40z",
        style: {
          animation: '2s linear infinite both a3_t'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M0 27h19V0H0v27z",
        style: {
          animation: '2s linear infinite both a4_t'
        }
      })]
    })
  });
};
exports.CrowdhouseLoader = CrowdhouseLoader;