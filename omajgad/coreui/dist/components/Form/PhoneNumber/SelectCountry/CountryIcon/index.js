"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testId = exports.CountryIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined' ? isoCode.replace(/./g, function (char) {
    return String.fromCodePoint(char.charCodeAt(0) + 127397);
  }) : isoCode;
}
var testId = 'country-icon';
exports.testId = testId;
var useStyles = (0, _mui.makeStyles)()({
  root: {
    fontSize: '24px'
  }
});
var CountryIcon = function CountryIcon(_ref) {
  var code = _ref.code;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: classes.root,
    "data-testid": testId,
    "data-testvalue": code,
    children: countryToFlag(code)
  });
};
exports.CountryIcon = CountryIcon;