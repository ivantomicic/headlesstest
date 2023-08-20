"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUrl = exports.getUrlStepId = exports.getStepById = exports.getPreviousStep = exports.getNextStep = exports.getCurrentStepIndex = exports.checkStepId = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var getCurrentStepIndex = function getCurrentStepIndex(ctx) {
  var steps = ctx.steps,
    currentStep = ctx.currentStep;
  return steps.findIndex(function (step) {
    return step.uuid === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.uuid);
  });
};
exports.getCurrentStepIndex = getCurrentStepIndex;
var getNextStep = function getNextStep(ctx) {
  var steps = ctx.steps;
  var currentStepIndex = getCurrentStepIndex(ctx);
  var nextStepIndex = currentStepIndex + 1;
  if (nextStepIndex >= steps.length) return undefined;
  return steps[nextStepIndex];
};
exports.getNextStep = getNextStep;
var getPreviousStep = function getPreviousStep(ctx) {
  var steps = ctx.steps;
  var currentStepIndex = getCurrentStepIndex(ctx);
  var nextStepIndex = currentStepIndex - 1;
  if (nextStepIndex < 0) return undefined;
  return steps[nextStepIndex];
};
exports.getPreviousStep = getPreviousStep;
var getStepById = function getStepById(_ref, stepId) {
  var steps = _ref.steps;
  var found = steps.findIndex(function (step) {
    return step.uuid === stepId;
  });
  return found >= 0 ? _objectSpread({}, steps[found]) : undefined;
};
exports.getStepById = getStepById;
var checkStepId = function checkStepId(ctx, stepId) {
  var currentStep = ctx.currentStep;
  return stepId !== (currentStep === null || currentStep === void 0 ? void 0 : currentStep.uuid) && !!getStepById(ctx, stepId);
};
exports.checkStepId = checkStepId;
var getUrlStepId = function getUrlStepId(history) {
  var searchParams = new URLSearchParams(history.location.search);
  return searchParams.get('step');
};
exports.getUrlStepId = getUrlStepId;
var updateUrl = function updateUrl(_ref2, history) {
  var currentStep = _ref2.currentStep;
  var urlParamName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'step';
  var searchParams = new URLSearchParams(window.location.search);
  if (currentStep !== null && currentStep !== void 0 && currentStep.uuid) {
    searchParams.set(urlParamName, currentStep.uuid);
  }
  history.push({
    pathname: window.location.pathname,
    search: '?' + searchParams
  });
};
exports.updateUrl = updateUrl;