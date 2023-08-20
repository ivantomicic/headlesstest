"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SecondaryNavigationSingleInactive = exports.SecondaryNavigationSingleActive = exports.SecondaryNavigationGeneralCase = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require("./");
var _SecondaryNavigationItem = require("./SecondaryNavigationItem");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var SettingsIcon = function SettingsIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm6.403-10.5v3.438c.348.168.681.362.998.578l2.971-1.72 3.401 5.906-2.97 1.72a7.981 7.981 0 0 1 0 1.157l2.97 1.719-3.401 5.905-2.971-1.72a7.82 7.82 0 0 1-.998.58V22.5H8.597v-3.438a7.812 7.812 0 0 1-.998-.578l-2.971 1.72-3.401-5.906 2.97-1.72a7.953 7.953 0 0 1 0-1.157l-2.97-1.719 3.4-5.905L7.6 5.517c.317-.217.65-.41.998-.58V1.5h6.806zm-5.306 4.43l-.468.19c-.549.222-1.06.52-1.52.88l-.399.314-2.532-1.466-1.905 3.306 2.533 1.465-.07.5a6.421 6.421 0 0 0 0 1.762l.07.5-2.533 1.465 1.905 3.306 2.532-1.466.4.313c.46.361.97.659 1.52.881l.467.19V21h3.806v-2.93l.468-.19a6.31 6.31 0 0 0 1.52-.88l.399-.313 2.532 1.465 1.905-3.306-2.533-1.465.07-.5a6.415 6.415 0 0 0 0-1.763l-.07-.499 2.533-1.465-1.905-3.306-2.532 1.465-.4-.312a6.312 6.312 0 0 0-1.52-.882l-.467-.19V3h-3.806v2.93z",
      fill: "currentColor"
    })
  }));
};
SettingsIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var NavigationComponent = function NavigationComponent(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};
var _default = {
  title: 'Components/Layout/SecondaryNavigation',
  component: _.SecondaryNavigation
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.SecondaryNavigation, _objectSpread({}, args));
};
var SecondaryNavigationSingleInactive = Template.bind({});
exports.SecondaryNavigationSingleInactive = SecondaryNavigationSingleInactive;
SecondaryNavigationSingleInactive.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(UserIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Personal Data"
      })]
    })
  })
};
var SecondaryNavigationSingleActive = Template.bind({});
exports.SecondaryNavigationSingleActive = SecondaryNavigationSingleActive;
SecondaryNavigationSingleActive.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      active: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(UserIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Personal Data"
      })]
    })
  })
};
var SecondaryNavigationGeneralCase = Template.bind({});
exports.SecondaryNavigationGeneralCase = SecondaryNavigationGeneralCase;
SecondaryNavigationGeneralCase.args = {
  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(UserIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Personal Data"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AddressIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Address"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      active: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(BankIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Bank Details"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Document, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Documents"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SecondaryNavigationItem.SecondaryNavigationItem, {
      navigationComponent: {
        component: NavigationComponent,
        componentProps: {
          style: {
            color: 'blue'
          }
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SettingsIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        children: "Settings Custom Navig. Component"
      })]
    })]
  })
};