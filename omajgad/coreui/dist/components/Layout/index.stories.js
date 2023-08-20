"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutWithoutHeader = exports.LayoutWithShortContent = exports.LayoutWithHeader = exports.LayoutWithAppHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ = require("./");
var _index = _interopRequireDefault(require("./PrimaryNavigation/index.stories"));
var _index2 = _interopRequireWildcard(require("./Header/index.stories"));
var _index3 = require("./SecondaryNavigation/index.stories");
var _index4 = require("./Footer/index.stories");
var _index5 = require("./Content/index.stories");
var _PrimaryNavigation = require("./PrimaryNavigation");
var _Footer = require("./Footer");
var _SecondaryNavigation = require("./SecondaryNavigation");
var _SecondaryNavigationItem = require("./SecondaryNavigation/SecondaryNavigationItem");
var _material = require("@mui/material");
var _MaxWidthContainer = require("./MaxWidthContainer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var UserIcon = function UserIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M7.5 21.75a.75.75 0 0 1-1.5 0v-7.5a3.75 3.75 0 0 1 3.75-3.75h4.5A3.75 3.75 0 0 1 18 14.25v7.5a.75.75 0 0 1-1.5 0v-7.5A2.25 2.25 0 0 0 14.25 12h-4.5a2.25 2.25 0 0 0-2.25 2.25v7.5zM12 9a3.75 3.75 0 1 1 0-7.5A3.75 3.75 0 0 1 12 9zm0-1.5A2.25 2.25 0 1 0 12 3a2.25 2.25 0 0 0 0 4.5z",
      fill: "currentColor"
    })
  }));
};
UserIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var AddressIcon = function AddressIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.531 21.53c4.632-4.648 6.969-8.283 6.969-11.03a7.5 7.5 0 0 0-15 0c0 2.748 2.336 6.382 6.969 11.03l.531.532.531-.533zM6 10.5a6 6 0 1 1 12 0c0 2.131-1.988 5.312-6 9.431-4.012-4.12-6-7.3-6-9.431z",
      fill: "currentColor"
    })
  }));
};
AddressIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var BankIcon = function BankIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.143 7.611a.75.75 0 0 1-.786 1.278L12 3.13 2.643 8.889a.75.75 0 0 1-.786-1.278L12 1.37l10.143 6.242zM20.25 19.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h16.5zM6 11.25a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-6zm3 0a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-6zm4.5 0a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-6zm3 0a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-6zM12 10.5A2.25 2.25 0 1 1 12 6a2.25 2.25 0 0 1 0 4.5zM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z",
      fill: "currentColor"
    })
  }));
};
BankIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Document = function Document(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 21V9.75a.75.75 0 0 1 1.5 0V22.5h-15v-21h6.75a.75.75 0 0 1 0 1.5H6v18h12zm1.28-14.78a.75.75 0 0 1-.53 1.28H13.5V2.25a.75.75 0 0 1 1.28-.53l4.5 4.5zM15 4.06V6h1.94L15 4.06z",
      fill: "currentColor"
    })
  }));
};
Document.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/Layout',
  component: _.Layout,
  args: {
    primaryNavigation: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PrimaryNavigation.PrimaryNavigation, _objectSpread({}, _index.default.args)),
    secondaryNavigation: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SecondaryNavigation.SecondaryNavigation, _objectSpread({}, _index3.SecondaryNavigationGeneralCase.args)),
    title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      variant: "body1",
      className: "strong",
      children: "Property"
    }),
    footer: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.Footer, _objectSpread({}, _index4.FooterWithLinks.args)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthContainer.MaxWidthContainer, {
      children: _index5.LONG_TEXT
    }),
    fillBackgroundColor: true,
    'data-testid': 'some test id'
  }
};
exports.default = _default;
var Template = function Template(args) {
  var secondaryNavigationRef = (0, _react.useRef)(null);
  var secondaryNavigation = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SecondaryNavigation.SecondaryNavigation, {
    ref: secondaryNavigationRef,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
        parentRef: secondaryNavigationRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(UserIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "Personal Data"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
        parentRef: secondaryNavigationRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AddressIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "Address"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
        parentRef: secondaryNavigationRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(BankIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "Bank Details"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
        parentRef: secondaryNavigationRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Document, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "Documents"
        })]
      })]
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Layout, _objectSpread({}, _objectSpread(_objectSpread({}, args), {}, {
    secondaryNavigation: secondaryNavigation
  })));
};
var LayoutWithoutHeader = Template.bind({});
exports.LayoutWithoutHeader = LayoutWithoutHeader;
var LayoutWithHeader = Template.bind({});
exports.LayoutWithHeader = LayoutWithHeader;
LayoutWithHeader.args = {
  header: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.HeaderWithUserMenuAndBanner, _objectSpread({}, _objectSpread(_objectSpread({}, _index2.default.args), _index2.HeaderWithUserMenuAndBanner.args)))
};
var LayoutWithShortContent = Template.bind({});
exports.LayoutWithShortContent = LayoutWithShortContent;
LayoutWithShortContent.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthContainer.MaxWidthContainer, {
    children: _index5.SHORT_TEXT
  }),
  header: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.HeaderWithBackAndChildren, _objectSpread({}, _objectSpread(_objectSpread({}, _index2.default.args), _index2.HeaderWithBackAndChildren.args))),
  fillBackgroundColor: true
};
var LayoutWithAppHeader = Template.bind({});
exports.LayoutWithAppHeader = LayoutWithAppHeader;
LayoutWithAppHeader.args = {
  appHeader: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      backgroundColor: 'grey',
      textAlign: 'center',
      color: 'white'
    },
    children: "banner"
  }),
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaxWidthContainer.MaxWidthContainer, {
    children: _index5.LONG_TEXT
  }),
  header: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.HeaderWithUserMenuAndBanner, _objectSpread({}, _objectSpread(_objectSpread({}, _index2.default.args), _index2.HeaderWithUserMenuAndBanner.args))),
  fillBackgroundColor: true
};