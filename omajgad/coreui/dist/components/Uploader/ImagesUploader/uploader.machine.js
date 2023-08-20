"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploaderMachine = void 0;
var _xstate = require("xstate");
var _helpers = require("./helpers");
var _types = require("./types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var uploaderMachine = function uploaderMachine(_ref) {
  var _on, _states;
  var allowedFileTypes = _ref.allowedFileTypes,
    fileSizeLimit = _ref.fileSizeLimit,
    errorMessage = _ref.errorMessage,
    mainImage = _ref.mainImage,
    mainImageTitle = _ref.mainImageTitle,
    transformSrc = _ref.transformSrc;
  return {
    initial: _types.STATE.FETCHING,
    context: _objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      mainImage: mainImage,
      mainImageTitle: mainImageTitle
    }),
    states: (_states = {}, _defineProperty(_states, _types.STATE.FETCHING, {
      invoke: {
        src: _types.SERVICE.FETCH,
        onDone: {
          target: _types.STATE.ACTIVE,
          actions: [(0, _xstate.assign)(function (ctx, _ref2) {
            var images = _ref2.data.images;
            return (0, _helpers.mergeTransformedImages)(transformSrc(images));
          }), (0, _xstate.assign)(function () {
            return (0, _helpers.clearError)();
          })]
        },
        onError: {
          target: _types.STATE.ACTIVE,
          actions: (0, _xstate.assign)(function (ctx, event) {
            return _objectSpread({}, (0, _helpers.setError)(event.data));
          })
        }
      }
    }), _defineProperty(_states, _types.STATE.ACTIVE, {
      on: (_on = {}, _defineProperty(_on, _types.TRANSITION.DISABLE, [{
        target: _types.STATE.DISABLED
      }]), _defineProperty(_on, _types.TRANSITION.UPLOAD, [{
        cond: function cond(ctx, event) {
          return (0, _helpers.validation)(event.files, fileSizeLimit, allowedFileTypes);
        },
        target: _types.STATE.UPLOADING,
        actions: [(0, _xstate.assign)(function () {
          return (0, _helpers.clearError)();
        }), (0, _xstate.assign)(function (ctx, _ref3) {
          var files = _ref3.files;
          return {
            files: files
          };
        }), (0, _xstate.assign)(function (ctx) {
          return (0, _helpers.appendPlaceholders)(ctx);
        })]
      }, {
        actions: (0, _xstate.assign)(function () {
          return (0, _helpers.setError)(errorMessage);
        })
      }]), _defineProperty(_on, _types.TRANSITION.SET_SORTABLE, [{
        actions: (0, _xstate.assign)(function (ctx, _ref4) {
          var draggedUuid = _ref4.draggedUuid,
            droppedUuid = _ref4.droppedUuid;
          return (0, _helpers.setDndPositions)(ctx, draggedUuid, droppedUuid);
        })
      }]), _defineProperty(_on, _types.TRANSITION.SORT, _types.STATE.SORTING), _defineProperty(_on, _types.TRANSITION.DELETE, {
        target: _types.STATE.DELETING,
        actions: (0, _xstate.assign)(function (ctx, event) {
          return (0, _helpers.deleteFile)(event.uuid);
        })
      }), _defineProperty(_on, _types.TRANSITION.FETCH, {
        target: _types.STATE.FETCHING
      }), _on)
    }), _defineProperty(_states, _types.STATE.UPLOADING, {
      invoke: {
        src: _types.SERVICE.UPLOAD,
        onDone: {
          target: _types.STATE.ACTIVE,
          actions: [(0, _xstate.assign)(function (ctx, _ref5) {
            var images = _ref5.data.images;
            return (0, _helpers.mergeTransformedImages)(transformSrc(images));
          }), (0, _xstate.assign)(function () {
            return (0, _helpers.clearError)();
          }), (0, _xstate.assign)(function (ctx) {
            return (0, _helpers.clearPlaceholders)(ctx);
          }), (0, _xstate.assign)(function () {
            return (0, _helpers.clearFiles)();
          })]
        },
        onError: {
          target: _types.STATE.ACTIVE,
          actions: [(0, _xstate.assign)(function (ctx, _ref6) {
            var message = _ref6.data.message;
            return (0, _helpers.setError)(message);
          }), (0, _xstate.assign)(function (ctx) {
            return (0, _helpers.clearPlaceholders)(ctx);
          })]
        }
      }
    }), _defineProperty(_states, _types.STATE.DISABLED, {
      on: _defineProperty({}, _types.TRANSITION.ENABLE, {
        target: _types.STATE.ACTIVE
      })
    }), _defineProperty(_states, _types.STATE.SORTING, {
      invoke: {
        src: _types.SERVICE.REORDER,
        onDone: {
          target: _types.STATE.ACTIVE,
          actions: (0, _xstate.assign)(function () {
            return (0, _helpers.clearError)();
          })
        },
        onError: {
          target: _types.STATE.ACTIVE,
          actions: (0, _xstate.assign)(function (ctx, _ref7) {
            var message = _ref7.data.message;
            return (0, _helpers.setError)(message);
          })
        }
      }
    }), _defineProperty(_states, _types.STATE.DELETING, {
      invoke: {
        src: _types.SERVICE.DELETE,
        onDone: {
          target: _types.STATE.ACTIVE,
          actions: [(0, _xstate.assign)(function (ctx, _ref8) {
            var images = _ref8.data.images;
            return {
              images: images
            };
          }), (0, _xstate.assign)(function () {
            return (0, _helpers.clearError)();
          })]
        },
        onError: {
          target: _types.STATE.ACTIVE,
          actions: (0, _xstate.assign)(function (ctx, _ref9) {
            var message = _ref9.data.message;
            return (0, _helpers.setError)(message);
          })
        }
      }
    }), _states)
  };
};
exports.uploaderMachine = uploaderMachine;