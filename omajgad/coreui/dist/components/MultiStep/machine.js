"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiStepMachine = void 0;
var _xstate = require("xstate");
var _helpers = require("./helpers");
var _types = require("./types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var MultiStepMachine = function MultiStepMachine(_ref) {
  var _on, _states;
  var steps = _ref.steps;
  return {
    initial: _types.STATE.ACTIVE,
    context: _objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      steps: steps,
      currentStep: steps[0]
    }),
    states: (_states = {}, _defineProperty(_states, _types.STATE.ACTIVE, {
      on: (_on = {}, _defineProperty(_on, _types.TRANSITION.DISABLE, {
        target: _types.STATE.DISABLED
      }), _defineProperty(_on, _types.TRANSITION.GOTO_NEXT, {
        cond: function cond(ctx) {
          return !!(0, _helpers.getNextStep)(ctx);
        },
        actions: (0, _xstate.assign)(function (ctx) {
          return {
            currentStep: (0, _helpers.getNextStep)(ctx)
          };
        }),
        target: _types.STATE.UPDATING_ROUTE
      }), _defineProperty(_on, _types.TRANSITION.GOTO_PREVIOUS, {
        cond: function cond(ctx) {
          return !!(0, _helpers.getPreviousStep)(ctx);
        },
        actions: (0, _xstate.assign)(function (ctx) {
          return {
            currentStep: (0, _helpers.getPreviousStep)(ctx)
          };
        }),
        target: _types.STATE.UPDATING_ROUTE
      }), _defineProperty(_on, _types.TRANSITION.GOTO_STEP, {
        cond: function cond(ctx, _ref2) {
          var stepId = _ref2.stepId;
          return (0, _helpers.checkStepId)(ctx, stepId);
        },
        actions: (0, _xstate.assign)(function (ctx, _ref3) {
          var stepId = _ref3.stepId;
          return {
            currentStep: (0, _helpers.getStepById)(ctx, stepId)
          };
        }),
        target: _types.STATE.UPDATING_ROUTE
      }), _on)
    }), _defineProperty(_states, _types.STATE.DISABLED, {
      on: _defineProperty({}, _types.TRANSITION.ENABLE, {
        target: _types.STATE.ACTIVE
      })
    }), _defineProperty(_states, _types.STATE.UPDATING_ROUTE, {
      invoke: {
        src: _types.SERVICE.CHANGE_ROUTE,
        onDone: {
          target: _types.STATE.ACTIVE
        },
        onError: {
          target: _types.STATE.ACTIVE
        }
      }
    }), _defineProperty(_states, _types.STATE.FINAL, {
      type: 'final'
    }), _states)
  };
};
exports.MultiStepMachine = MultiStepMachine;