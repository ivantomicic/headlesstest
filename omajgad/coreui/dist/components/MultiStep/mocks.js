"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRouteSuccess = exports.multiStepMachineSuccessWithContext = exports.MockSteps = void 0;
var _xstate = require("xstate");
var _machine = require("./machine");
var _types = require("./types");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var component1 = function component1() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      "data-testid": "multi-step-injected-component",
      children: "Step 1"
    })
  });
};
var component2 = function component2() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Step 2"
    })
  });
};
var MockSteps = [{
  uuid: 'step1',
  component: component1
}, {
  uuid: 'step2',
  component: component2
}];
exports.MockSteps = MockSteps;
var machine = (0, _xstate.createMachine)((0, _machine.MultiStepMachine)({
  steps: MockSteps
}));
var updateRouteSuccess = machine.withConfig({
  services: _defineProperty({}, _types.SERVICE.CHANGE_ROUTE, function () {
    return Promise.resolve({});
  })
}).withContext(_types.DefaultContext);
exports.updateRouteSuccess = updateRouteSuccess;
var multiStepMachineSuccessWithContext = function multiStepMachineSuccessWithContext(ctx) {
  return machine.withConfig({
    services: _defineProperty({}, _types.SERVICE.CHANGE_ROUTE, function () {
      return Promise.resolve({});
    })
  }).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
    steps: MockSteps
  }, ctx));
};
exports.multiStepMachineSuccessWithContext = multiStepMachineSuccessWithContext;