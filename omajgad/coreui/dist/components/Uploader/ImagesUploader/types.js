"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ALLOWED_FILE_TYPE", {
  enumerable: true,
  get: function get() {
    return _types.ALLOWED_FILE_TYPE;
  }
});
exports.TRANSITION = exports.STATE = exports.SERVICE = exports.DefaultContext = exports.DRAG_TYPE = void 0;
var _types = require("./../types");
var DRAG_TYPE;
exports.DRAG_TYPE = DRAG_TYPE;
(function (DRAG_TYPE) {
  DRAG_TYPE["IMAGE"] = "IMAGE";
})(DRAG_TYPE || (exports.DRAG_TYPE = DRAG_TYPE = {}));
var DefaultContext = {
  files: [],
  images: [],
  error: '',
  mainImage: false,
  mainImageTitle: ''
};
exports.DefaultContext = DefaultContext;
var SERVICE;
exports.SERVICE = SERVICE;
(function (SERVICE) {
  SERVICE["UPLOAD"] = "UPLOAD";
  SERVICE["DELETE"] = "DELETE";
  SERVICE["REORDER"] = "REORDER";
  SERVICE["FETCH"] = "FETCH";
})(SERVICE || (exports.SERVICE = SERVICE = {}));
var STATE;
exports.STATE = STATE;
(function (STATE) {
  STATE["ACTIVE"] = "ACTIVE";
  STATE["DISABLED"] = "DISABLED";
  STATE["FETCHING"] = "FETCHING";
  STATE["DELETING"] = "DELETING";
  STATE["UPLOADING"] = "UPLOADING";
  STATE["SORTING"] = "SORTING";
})(STATE || (exports.STATE = STATE = {}));
var TRANSITION;
exports.TRANSITION = TRANSITION;
(function (TRANSITION) {
  TRANSITION["DELETE"] = "DELETE";
  TRANSITION["DISABLE"] = "DISABLE";
  TRANSITION["ENABLE"] = "ENABLE";
  TRANSITION["SORT"] = "SORT";
  TRANSITION["FETCH"] = "FETCH";
  TRANSITION["UPLOAD"] = "UPLOAD";
  TRANSITION["SET_SORTABLE"] = "SET_SORTABLE";
})(TRANSITION || (exports.TRANSITION = TRANSITION = {}));