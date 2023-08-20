"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testId = exports.CountryOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _CountryIcon = require("./../CountryIcon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var testId = 'country-option';
exports.testId = testId;
var CountryOption = function CountryOption(_ref) {
  var country = _ref.country;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
    container: true,
    spacing: 1,
    wrap: "nowrap",
    "data-testid": testId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
      item: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryIcon.CountryIcon, {
        code: country.isoCode
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
      item: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
        variant: "body2",
        children: [country.title, ' ', /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "body2",
          component: "span",
          color: "textSecondary",
          children: ["+", country.phoneCode]
        })]
      })
    })]
  });
};
exports.CountryOption = CountryOption;