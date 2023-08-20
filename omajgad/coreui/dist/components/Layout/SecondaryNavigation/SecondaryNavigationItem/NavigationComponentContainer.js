"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationComponentContainer = void 0;
var _react = require("react");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      paddingRight: theme.spacing(1.5),
      '&:focus': {
        outline: 'none'
      }
    }
  };
});
var NavigationComponentContainer = function NavigationComponentContainer(_ref) {
  var parentRef = _ref.parentRef,
    children = _ref.children;
  var navItemRef = (0, _react.useRef)(null);
  var _useStyles = useStyles(),
    root = _useStyles.classes.root;
  var scrollItemIntoView = function scrollItemIntoView() {
    var _parentRef$current;
    if (!!(parentRef !== null && parentRef !== void 0 && (_parentRef$current = parentRef.current) !== null && _parentRef$current !== void 0 && _parentRef$current.scrollBy)) {
      var _navItemRef$current;
      var navRect = parentRef.current.getBoundingClientRect();
      var itemRect = navItemRef === null || navItemRef === void 0 ? void 0 : (_navItemRef$current = navItemRef.current) === null || _navItemRef$current === void 0 ? void 0 : _navItemRef$current.getBoundingClientRect();
      var navCenterX = navRect.x + navRect.width / 2;
      if (!itemRect) {
        return;
      }
      var itemCenterX = itemRect.x + itemRect.width / 2;
      parentRef.current.scrollBy({
        top: 0,
        left: itemCenterX - navCenterX,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: root,
    ref: navItemRef,
    onClick: scrollItemIntoView,
    onKeyDown: scrollItemIntoView,
    "data-testid": "navigation-component-container",
    children: children
  });
};
exports.NavigationComponentContainer = NavigationComponentContainer;