"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _styles = require("./../../../helpers/styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      boxSizing: 'border-box'
    },
    backgroundColor: {
      backgroundColor: theme.colors.background.app
    }
  };
});
var Content = function Content(_ref) {
  var _classnames;
  var className = _ref.className,
    children = _ref.children,
    _ref$addTopPadding = _ref.addTopPadding,
    addTopPadding = _ref$addTopPadding === void 0 ? true : _ref$addTopPadding,
    _ref$addBottomPadding = _ref.addBottomPadding,
    addBottomPadding = _ref$addBottomPadding === void 0 ? true : _ref$addBottomPadding,
    _ref$fillBackgroundCo = _ref.fillBackgroundColor,
    fillBackgroundColor = _ref$fillBackgroundCo === void 0 ? false : _ref$fillBackgroundCo;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    root = _useStyles$classes.root,
    backgroundColor = _useStyles$classes.backgroundColor;
  var _usePaddingTopStyles = (0, _styles.usePaddingTopStyles)(),
    topPaddingStyle = _usePaddingTopStyles.classes.topPaddingStyle;
  var _usePaddingBottomStyl = (0, _styles.usePaddingBottomStyles)(),
    bottomPaddingStyle = _usePaddingBottomStyl.classes.bottomPaddingStyle;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: (0, _classnames2.default)(root, className, (_classnames = {}, _defineProperty(_classnames, topPaddingStyle, addTopPadding), _defineProperty(_classnames, bottomPaddingStyle, addBottomPadding), _defineProperty(_classnames, backgroundColor, fillBackgroundColor), _classnames)),
    children: children
  });
};
exports.Content = Content;