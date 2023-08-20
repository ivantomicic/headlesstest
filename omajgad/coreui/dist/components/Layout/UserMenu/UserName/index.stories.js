"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FullNameVerifiedOpen = exports.FullNameVerifiedClosed = exports.FullNameUnverifiedOpen = exports.FullNameUnverifiedClosed = exports.EmailVerifiedOpen = exports.EmailVerifiedClosed = exports.EmailUnverifiedOpen = exports.EmailUnverifiedClosed = void 0;
var _ = require("./");
var _addonActions = require("@storybook/addon-actions");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var defaultUser = {
  firstName: 'Martynas',
  lastName: 'Subonis',
  email: 'test@crowdhouse.ch',
  verified: false
};
var _default = {
  title: 'Components/Layout/UserMenu/UserName',
  component: _.UserName,
  args: {
    user: defaultUser,
    children: 'Account',
    onClick: (0, _addonActions.action)('onClick'),
    isOpen: false
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.UserName, _objectSpread({}, args));
};
var FullNameUnverifiedClosed = Template.bind({});
exports.FullNameUnverifiedClosed = FullNameUnverifiedClosed;
var FullNameVerifiedClosed = Template.bind({});
exports.FullNameVerifiedClosed = FullNameVerifiedClosed;
FullNameVerifiedClosed.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    verified: true
  })
};
var FullNameUnverifiedOpen = Template.bind({});
exports.FullNameUnverifiedOpen = FullNameUnverifiedOpen;
FullNameUnverifiedOpen.args = {
  isOpen: true
};
var FullNameVerifiedOpen = Template.bind({});
exports.FullNameVerifiedOpen = FullNameVerifiedOpen;
FullNameVerifiedOpen.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    verified: true
  }),
  isOpen: true
};
var EmailUnverifiedClosed = Template.bind({});
exports.EmailUnverifiedClosed = EmailUnverifiedClosed;
EmailUnverifiedClosed.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    lastName: undefined
  })
};
var EmailVerifiedClosed = Template.bind({});
exports.EmailVerifiedClosed = EmailVerifiedClosed;
EmailVerifiedClosed.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    lastName: undefined,
    verified: true
  })
};
var EmailUnverifiedOpen = Template.bind({});
exports.EmailUnverifiedOpen = EmailUnverifiedOpen;
EmailUnverifiedOpen.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    lastName: undefined
  }),
  isOpen: true
};
var EmailVerifiedOpen = Template.bind({});
exports.EmailVerifiedOpen = EmailVerifiedOpen;
EmailVerifiedOpen.args = {
  user: _objectSpread(_objectSpread({}, defaultUser), {}, {
    lastName: undefined,
    verified: true
  }),
  isOpen: true
};