"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = exports.validateFileType = exports.validateFileSize = exports.setError = exports.setDndPositions = exports.moveImages = exports.mergeTransformedImages = exports.mergeImages = exports.getImagePositionByUuid = exports.getFileSizeInByte = exports.deleteFile = exports.clearPlaceholders = exports.clearFiles = exports.clearError = exports.appendPlaceholders = void 0;
var _lodash = require("lodash");
var _nanoid = require("nanoid");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var validateFileSize = function validateFileSize(files, fileSizeLimit) {
  return files.filter(function (file) {
    return file.size > fileSizeLimit;
  });
};
exports.validateFileSize = validateFileSize;
var validateFileType = function validateFileType(files, allowedFileTypes) {
  return files.filter(function (file) {
    return !allowedFileTypes.includes(file.type);
  });
};
exports.validateFileType = validateFileType;
var validation = function validation(files, fileSizeLimit, allowedFileTypes) {
  return (0, _lodash.isEmpty)(validateFileSize(files, fileSizeLimit)) && (0, _lodash.isEmpty)(validateFileType(files, allowedFileTypes));
};
exports.validation = validation;
var clearError = function clearError() {
  return {
    error: ''
  };
};
exports.clearError = clearError;
var appendPlaceholders = function appendPlaceholders(ctx) {
  var files = ctx.files,
    originalImages = ctx.images;
  var newImages = files.map(function () {
    return {
      url: '',
      uuid: (0, _nanoid.nanoid)(),
      placeholder: true
    };
  });
  return {
    images: [].concat(_toConsumableArray(originalImages), _toConsumableArray(newImages))
  };
};
exports.appendPlaceholders = appendPlaceholders;
var clearPlaceholders = function clearPlaceholders(ctx) {
  var originalImages = ctx.images;
  var images = originalImages.filter(function (image) {
    return !image.placeholder;
  });
  return {
    images: images
  };
};
exports.clearPlaceholders = clearPlaceholders;
var setError = function setError(errorMessage) {
  return {
    error: errorMessage
  };
};
exports.setError = setError;
var moveImages = function moveImages(images, from, to) {
  var imageList = _toConsumableArray(images);
  var tmp = images[to];
  imageList[to] = images[from];
  imageList[from] = tmp;
  return {
    images: imageList
  };
};
exports.moveImages = moveImages;
var setDndPositions = function setDndPositions(ctx, fromUuid, toUuid) {
  var fromIndex = getImagePositionByUuid(ctx.images, fromUuid);
  var toIndex = getImagePositionByUuid(ctx.images, toUuid);
  return moveImages(ctx.images, fromIndex, toIndex);
};
exports.setDndPositions = setDndPositions;
var getImagePositionByUuid = function getImagePositionByUuid(images, uuid) {
  return images.findIndex(function (image) {
    return image.uuid === uuid;
  });
};
exports.getImagePositionByUuid = getImagePositionByUuid;
var deleteFile = function deleteFile(deleteUuid) {
  return {
    deleteUuid: deleteUuid
  };
};
exports.deleteFile = deleteFile;
var mergeImages = function mergeImages(ctx, newImages) {
  return {
    images: _toConsumableArray(newImages)
  };
};

// Storing file size limit in byte since File api returns file size in byte too
exports.mergeImages = mergeImages;
var getFileSizeInByte = function getFileSizeInByte(fileSizeLimit) {
  return fileSizeLimit * Math.pow(1024, 2);
};
exports.getFileSizeInByte = getFileSizeInByte;
var clearFiles = function clearFiles() {
  return {
    files: []
  };
};
exports.clearFiles = clearFiles;
var mergeTransformedImages = function mergeTransformedImages(images) {
  return {
    images: images
  };
};
exports.mergeTransformedImages = mergeTransformedImages;