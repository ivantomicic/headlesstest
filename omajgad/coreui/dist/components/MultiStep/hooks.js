"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMultiStep = void 0;
var _react = require("@xstate/react");
var _react2 = require("react");
var _xstate = require("xstate");
var _machine = require("./machine");
var _types = require("./types");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useMultiStep = function useMultiStep(_ref) {
  var routeUpdateService = _ref.routeUpdateService,
    steps = _ref.steps,
    _ref$devTools = _ref.devTools,
    devTools = _ref$devTools === void 0 ? false : _ref$devTools;
  var ref = (0, _react2.useRef)((0, _xstate.createMachine)((0, _machine.MultiStepMachine)({
    steps: steps
  }), {
    services: _defineProperty({}, _types.SERVICE.CHANGE_ROUTE, routeUpdateService)
  }));
  var _useMachine = (0, _react.useMachine)(ref.current, {
      devTools: devTools
    }),
    _useMachine2 = _slicedToArray(_useMachine, 2),
    state = _useMachine2[0],
    send = _useMachine2[1];
  var enable = function enable() {
    send({
      type: _types.TRANSITION.ENABLE
    });
  };
  var disable = function disable() {
    send({
      type: _types.TRANSITION.DISABLE
    });
  };
  var goToNext = function goToNext() {
    send({
      type: _types.TRANSITION.GOTO_NEXT
    });
  };
  var goToPrevious = function goToPrevious() {
    send({
      type: _types.TRANSITION.GOTO_PREVIOUS
    });
  };
  var goToStep = function goToStep(stepId) {
    send({
      type: _types.TRANSITION.GOTO_STEP,
      stepId: stepId
    });
  };
  return {
    state: state,
    enable: enable,
    disable: disable,
    goToNext: goToNext,
    goToPrevious: goToPrevious,
    goToStep: goToStep
  };
};
exports.useMultiStep = useMultiStep;