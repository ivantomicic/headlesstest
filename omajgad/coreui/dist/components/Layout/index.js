"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _Content = require("./Content");
var _MaxWidthContainer = require("./MaxWidthContainer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  var _container;
  return {
    layout: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: 'inherit'
    },
    layoutContainer: _defineProperty({
      flex: '1 1 100%',
      display: 'flex',
      flexDirection: 'column'
    }, theme.breakpoints.up('md'), {
      flex: 'unset',
      height: 'inherit',
      flexDirection: 'unset'
    }),
    container: (_container = {
      flex: 1,
      display: 'flex',
      flexWrap: 'wrap'
    }, _defineProperty(_container, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing(7)
    }), _defineProperty(_container, theme.breakpoints.up('lg'), {
      paddingLeft: theme.spacing(31)
    }), _container),
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    contentContainer: {
      flex: '1 1 100%'
    },
    footer: {
      zIndex: 1000,
      flex: 1,
      width: '100%',
      alignSelf: 'flex-end'
    },
    primaryNavigation: _defineProperty({
      zIndex: 1002,
      position: 'sticky',
      left: 0,
      right: 0,
      bottom: 0
    }, theme.breakpoints.up('md'), {
      position: 'fixed',
      order: -1,
      top: 0,
      right: 'unset',
      height: 'inherit'
    }),
    secondaryNavigation: {
      zIndex: 1001,
      position: 'sticky',
      top: 0
    }
  };
});
var Container = function Container(_ref) {
  var contentClassname = _ref.contentClassname,
    header = _ref.header,
    title = _ref.title,
    secondaryNavigation = _ref.secondaryNavigation,
    fillBackgroundColor = _ref.fillBackgroundColor,
    addContentTopPadding = _ref.addContentTopPadding,
    addContentBottomPadding = _ref.addContentBottomPadding,
    children = _ref.children,
    footer = _ref.footer;
  var _useStyles = useStyles(),
    _useStyles$classes = _useStyles.classes,
    container = _useStyles$classes.container,
    content = _useStyles$classes.content,
    contentContainer = _useStyles$classes.contentContainer,
    secondaryNavigationClassName = _useStyles$classes.secondaryNavigation,
    footerClassName = _useStyles$classes.footer;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)(content, contentClassname),
      children: [header, /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthContainer.MaxWidthContainer, {
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: secondaryNavigationClassName,
        children: secondaryNavigation
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.Content, {
        className: contentContainer,
        fillBackgroundColor: fillBackgroundColor,
        addTopPadding: addContentTopPadding,
        addBottomPadding: addContentBottomPadding,
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: footerClassName,
        children: footer
      })]
    })
  });
};
var Layout = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var primaryNavigation = _ref2.primaryNavigation,
    appHeader = _ref2.appHeader,
    header = _ref2.header,
    secondaryNavigation = _ref2.secondaryNavigation,
    children = _ref2.children,
    footer = _ref2.footer,
    title = _ref2.title,
    fillBackgroundColor = _ref2.fillBackgroundColor,
    addContentTopPadding = _ref2.addContentTopPadding,
    addContentBottomPadding = _ref2.addContentBottomPadding,
    contentClassname = _ref2.contentClassname,
    dataTestId = _ref2['data-testid'];
  var _useStyles2 = useStyles(),
    _useStyles2$classes = _useStyles2.classes,
    layoutContainer = _useStyles2$classes.layoutContainer,
    layout = _useStyles2$classes.layout,
    primaryNavigationClassName = _useStyles2$classes.primaryNavigation;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: layout,
    "data-testid": dataTestId,
    children: [appHeader, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: layoutContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Container, {
        header: header,
        secondaryNavigation: secondaryNavigation,
        footer: footer,
        title: title,
        fillBackgroundColor: fillBackgroundColor,
        addContentTopPadding: addContentTopPadding,
        addContentBottomPadding: addContentBottomPadding,
        contentClassname: contentClassname,
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: primaryNavigationClassName,
        children: primaryNavigation
      })]
    })]
  });
});
exports.Layout = Layout;