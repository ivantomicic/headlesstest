"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserMenuVerified = exports.UserMenuUnverified = exports.UserMenuNoListItemPadding = exports.UserMenuIsOpen = void 0;
var _ = require("./");
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Logout = function Logout(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.22 14.47L20.69 12l-2.47-2.47a.75.75 0 0 1 1.06-1.06L22.81 12l-3.53 3.53a.75.75 0 1 1-1.06-1.06zm-6.97-1.72a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5h-7.5zm5.614-7.114a.75.75 0 1 1-1.06 1.06 7.5 7.5 0 1 0 0 10.607.75.75 0 0 1 1.06 1.061 9 9 0 1 1 0-12.728z",
      fill: "currentColor"
    })
  }));
};
Logout.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Info = function Info(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.851 15.892c.04-.163.099-.38.178-.648l1.038-3.64c.011-.042.02-.084.025-.126a.459.459 0 0 0 .017-.119c0-.216-.073-.35-.22-.403-.146-.053-.413-.087-.801-.103v-.427c.326-.021.799-.064 1.418-.127a21.298 21.298 0 0 0 1.326-.174l.743-.134-1.343 4.612c-.112.395-.188.67-.228.823-.101.39-.152.643-.152.76 0 .115.028.192.085.229a.373.373 0 0 0 .185.047c.175 0 .392-.14.65-.42.26-.279.487-.572.684-.877l.38.23c-.563.774-.993 1.296-1.291 1.566-.49.443-1.014.664-1.57.664-.316 0-.6-.09-.854-.269-.247-.185-.371-.464-.371-.839 0-.131.034-.34.101-.625zm4.061-9.2c.225.21.338.466.338.767 0 .3-.113.559-.338.775a1.154 1.154 0 0 1-.819.317c-.32 0-.596-.106-.827-.317a1.038 1.038 0 0 1-.338-.775c0-.3.113-.557.338-.768.23-.21.507-.316.827-.316.321 0 .594.105.82.316zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
      fill: "currentColor"
    })
  }));
};
Info.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/Layout/UserMenu',
  component: _.UserMenu,
  args: {
    user: {
      firstName: 'Martynas',
      lastName: 'Subonis',
      email: 'test@crowdhouse.ch',
      verified: true
    },
    userNameContent: 'Account',
    dropDownItems: ['Settings', /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: ["Help", /*#__PURE__*/(0, _jsxRuntime.jsx)(Info, {})]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: ["Logout", /*#__PURE__*/(0, _jsxRuntime.jsx)(Logout, {})]
    })],
    padDropdownItems: true,
    isOpen: false,
    onClick: (0, _addonActions.action)('onClick')
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.UserMenu, _objectSpread({}, args));
};
var UserMenuVerified = Template.bind({});
exports.UserMenuVerified = UserMenuVerified;
var UserMenuUnverified = Template.bind({});
exports.UserMenuUnverified = UserMenuUnverified;
UserMenuUnverified.args = {
  user: {
    firstName: 'Martynas',
    lastName: 'Subonis',
    email: 'test@crowdhouse.ch',
    verified: false
  }
};
var UserMenuIsOpen = Template.bind({});
exports.UserMenuIsOpen = UserMenuIsOpen;
UserMenuIsOpen.args = {
  isOpen: true
};
var UserMenuNoListItemPadding = Template.bind({});
exports.UserMenuNoListItemPadding = UserMenuNoListItemPadding;
UserMenuNoListItemPadding.args = {
  isOpen: true,
  padDropdownItems: false
};