"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUploader = void 0;
var _react = require("@xstate/react");
var _react2 = require("react");
var _xstate = require("xstate");
var _helpers = require("./helpers");
var _types = require("./types");
var _uploader = require("./uploader.machine");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var useUploader = function useUploader(_ref) {
  var _services;
  var uploaderService = _ref.uploaderService,
    deleteService = _ref.deleteService,
    fetchService = _ref.fetchService,
    reorderService = _ref.reorderService,
    allowedFileTypes = _ref.allowedFileTypes,
    fileSizeLimit = _ref.fileSizeLimit,
    errorMessage = _ref.errorMessage,
    _ref$devTools = _ref.devTools,
    devTools = _ref$devTools === void 0 ? false : _ref$devTools,
    mainImage = _ref.mainImage,
    mainImageTitle = _ref.mainImageTitle,
    transformSrc = _ref.transformSrc;
  var ref = (0, _react2.useRef)((0, _xstate.createMachine)((0, _uploader.uploaderMachine)({
    allowedFileTypes: allowedFileTypes,
    fileSizeLimit: (0, _helpers.getFileSizeInByte)(fileSizeLimit),
    errorMessage: errorMessage,
    mainImage: mainImage,
    mainImageTitle: mainImageTitle,
    transformSrc: transformSrc
  }), {
    services: (_services = {}, _defineProperty(_services, _types.SERVICE.FETCH, fetchService), _defineProperty(_services, _types.SERVICE.UPLOAD, uploaderService), _defineProperty(_services, _types.SERVICE.DELETE, deleteService), _defineProperty(_services, _types.SERVICE.REORDER, reorderService), _services)
  }));
  var _useMachine = (0, _react.useMachine)(ref.current, {
      devTools: devTools
    }),
    _useMachine2 = _slicedToArray(_useMachine, 2),
    state = _useMachine2[0],
    send = _useMachine2[1];
  var deleteHandler = function deleteHandler(uuid) {
    send({
      type: _types.TRANSITION.DELETE,
      uuid: uuid
    });
  };
  var sort = function sort() {
    send({
      type: _types.TRANSITION.SORT
    });
  };
  var setDndPositions = function setDndPositions(draggedUuid, droppedUuid) {
    send({
      type: _types.TRANSITION.SET_SORTABLE,
      draggedUuid: draggedUuid,
      droppedUuid: droppedUuid
    });
  };
  var uploadHandler = function uploadHandler(files) {
    send({
      type: _types.TRANSITION.UPLOAD,
      files: files
    });
  };
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
  var fetch = function fetch() {
    send({
      type: _types.TRANSITION.FETCH
    });
  };
  return {
    state: state,
    deleteHandler: deleteHandler,
    sort: sort,
    setDndPositions: setDndPositions,
    uploadHandler: uploadHandler,
    enable: enable,
    disable: disable,
    fetch: fetch
  };
};
exports.useUploader = useUploader;