"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSITION = exports.STATE = exports.SERVICE = exports.DefaultContext = exports.ACTION = void 0;
var STATE;
exports.STATE = STATE;
(function (STATE) {
  STATE["ACTIVE"] = "ACTIVE";
  STATE["DISABLED"] = "DISABLED";
  STATE["UPDATING_ROUTE"] = "UPDATING_ROUTE";
  STATE["TRACKING"] = "TRACKING";
  STATE["FINAL"] = "FINAL";
})(STATE || (exports.STATE = STATE = {}));
var TRANSITION;
exports.TRANSITION = TRANSITION;
(function (TRANSITION) {
  TRANSITION["ENABLE"] = "ENABLE";
  TRANSITION["DISABLE"] = "DISABLE";
  TRANSITION["GOTO_STEP"] = "GOTO_STEP";
  TRANSITION["GOTO_NEXT"] = "GOTO_NEXT";
  TRANSITION["GOTO_PREVIOUS"] = "GOTO_PREVIOUS";
})(TRANSITION || (exports.TRANSITION = TRANSITION = {}));
var SERVICE;
exports.SERVICE = SERVICE;
(function (SERVICE) {
  SERVICE["CHANGE_ROUTE"] = "CHANGE_ROUTE";
})(SERVICE || (exports.SERVICE = SERVICE = {}));
var ACTION;
exports.ACTION = ACTION;
(function (ACTION) {
  ACTION["PERSIST_CONTEXT"] = "PERSIST_CONTEXT";
  ACTION["HYDRATE_CONTEXT"] = "HYDRATE_CONTEXT";
})(ACTION || (exports.ACTION = ACTION = {}));
var DefaultContext = {
  currentStep: null,
  steps: []
};
exports.DefaultContext = DefaultContext;