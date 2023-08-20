"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validFiles = exports.uploadMachineSuccessWithContext = exports.uploadMachineSuccess = exports.uploadMachineError = exports.sortMachineSuccess = exports.sortMachineError = exports.mockedReorderedImages = exports.mockedFetchResponse = exports.mockedFetchReorderedResponse = exports.mockedDeleteResponse = exports.invalidFiles = exports.fetchMachineSuccess = exports.fetchMachineError = exports.fetchCustomMachineSuccess = exports.deleteMachineSuccess = exports.deleteMachineError = void 0;
var _xstate = require("xstate");
var _types = require("./types");
var _uploader = require("./uploader.machine");
var _services2, _services4, _services6, _services7, _services8, _services9, _services10;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var allowedFileTypes = [_types.ALLOWED_FILE_TYPE.JPEG, _types.ALLOWED_FILE_TYPE.PNG];
var mockedFetchResponse = {
  images: [{
    uuid: '1',
    url: 'http://1.jpeg'
  }, {
    uuid: '2',
    url: 'http://2.jpeg'
  }, {
    uuid: '3',
    url: 'http://3.jpeg'
  }, {
    uuid: '4',
    url: 'http://4.jpeg'
  }]
};
exports.mockedFetchResponse = mockedFetchResponse;
var mockedReorderedImages = {
  images: [{
    uuid: '4',
    url: 'http://4.jpeg'
  }, {
    uuid: '2',
    url: 'http://2.jpeg'
  }, {
    uuid: '3',
    url: 'http://3.jpeg'
  }, {
    uuid: '1',
    url: 'http://1.jpeg'
  }]
};
exports.mockedReorderedImages = mockedReorderedImages;
var mockedFetchReorderedResponse = {
  images: [{
    uuid: '2',
    url: 'http://2.jpeg'
  }, {
    uuid: '1',
    url: 'http://1.jpeg'
  }]
};
exports.mockedFetchReorderedResponse = mockedFetchReorderedResponse;
var mockedDeleteResponse = {
  images: [{
    uuid: '2',
    url: 'http://2.jpeg'
  }]
};
exports.mockedDeleteResponse = mockedDeleteResponse;
var invalidFiles = [{
  size: 100,
  type: 'invalid/type',
  lastModified: 0,
  name: 'fakeFile.invalid',
  text: function text() {
    return Promise.resolve('');
  }
}];
exports.invalidFiles = invalidFiles;
var validFiles = [{
  size: 100,
  type: 'image/jpeg',
  lastModified: 0,
  name: 'fakeFile.invalid',
  text: function text() {
    return Promise.resolve('');
  }
}];
exports.validFiles = validFiles;
var createCustomMachine = function createCustomMachine() {
  var transformSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (images) {
    return images;
  };
  return (0, _xstate.createMachine)((0, _uploader.uploaderMachine)({
    allowedFileTypes: allowedFileTypes,
    fileSizeLimit: 1000,
    errorMessage: 'Filetype error',
    mainImage: false,
    mainImageTitle: 'main image',
    transformSrc: transformSrc
  }));
};
var fetchCustomMachineSuccess = function fetchCustomMachineSuccess(transformSrc) {
  var _services;
  return createCustomMachine(transformSrc).withConfig({
    services: (_services = {}, _defineProperty(_services, _types.SERVICE.FETCH, function () {
      return Promise.resolve(mockedFetchResponse);
    }), _defineProperty(_services, _types.SERVICE.REORDER, function () {
      return Promise.resolve(mockedFetchReorderedResponse);
    }), _services)
  }).withContext(_types.DefaultContext);
};
exports.fetchCustomMachineSuccess = fetchCustomMachineSuccess;
var fetchMachineSuccess = createCustomMachine().withConfig({
  services: (_services2 = {}, _defineProperty(_services2, _types.SERVICE.FETCH, function () {
    return Promise.resolve(mockedFetchResponse);
  }), _defineProperty(_services2, _types.SERVICE.REORDER, function () {
    return Promise.resolve(mockedFetchReorderedResponse);
  }), _services2)
}).withContext(_types.DefaultContext);
exports.fetchMachineSuccess = fetchMachineSuccess;
var fetchMachineError = createCustomMachine().withConfig({
  services: _defineProperty({}, _types.SERVICE.FETCH, function () {
    return Promise.reject('Fetching error');
  })
}).withContext(_types.DefaultContext);
exports.fetchMachineError = fetchMachineError;
var uploadMachineSuccess = createCustomMachine().withConfig({
  services: (_services4 = {}, _defineProperty(_services4, _types.SERVICE.FETCH, function () {
    return Promise.resolve(mockedFetchResponse);
  }), _defineProperty(_services4, _types.SERVICE.UPLOAD, function () {
    return Promise.resolve(mockedFetchResponse);
  }), _services4)
}).withContext(_types.DefaultContext);
exports.uploadMachineSuccess = uploadMachineSuccess;
var uploadMachineSuccessWithContext = function uploadMachineSuccessWithContext(ctx) {
  var _services5;
  return createCustomMachine().withConfig({
    services: (_services5 = {}, _defineProperty(_services5, _types.SERVICE.FETCH, function () {
      return Promise.resolve({});
    }), _defineProperty(_services5, _types.SERVICE.UPLOAD, function () {
      return Promise.resolve(mockedFetchResponse);
    }), _services5)
  }).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), ctx));
};
exports.uploadMachineSuccessWithContext = uploadMachineSuccessWithContext;
var uploadMachineError = createCustomMachine().withConfig({
  services: (_services6 = {}, _defineProperty(_services6, _types.SERVICE.FETCH, function () {
    return Promise.resolve({});
  }), _defineProperty(_services6, _types.SERVICE.UPLOAD, function () {
    return Promise.reject(new Error('Error uploading'));
  }), _services6)
}).withContext(_types.DefaultContext);
exports.uploadMachineError = uploadMachineError;
var sortMachineError = createCustomMachine().withConfig({
  services: (_services7 = {}, _defineProperty(_services7, _types.SERVICE.FETCH, function () {
    return Promise.resolve({});
  }), _defineProperty(_services7, _types.SERVICE.REORDER, function () {
    return Promise.reject(new Error('Error ordering'));
  }), _services7)
}).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), mockedFetchResponse));
exports.sortMachineError = sortMachineError;
var sortMachineSuccess = createCustomMachine().withConfig({
  services: (_services8 = {}, _defineProperty(_services8, _types.SERVICE.FETCH, function () {
    return Promise.resolve({});
  }), _defineProperty(_services8, _types.SERVICE.REORDER, function () {
    return Promise.resolve(mockedFetchReorderedResponse.images);
  }), _services8)
}).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), mockedFetchResponse));
exports.sortMachineSuccess = sortMachineSuccess;
var deleteMachineError = createCustomMachine().withConfig({
  services: (_services9 = {}, _defineProperty(_services9, _types.SERVICE.FETCH, function () {
    return Promise.resolve({});
  }), _defineProperty(_services9, _types.SERVICE.DELETE, function () {
    return Promise.reject(new Error('Error deleting'));
  }), _services9)
}).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), mockedFetchResponse));
exports.deleteMachineError = deleteMachineError;
var deleteMachineSuccess = createCustomMachine().withConfig({
  services: (_services10 = {}, _defineProperty(_services10, _types.SERVICE.FETCH, function () {
    return Promise.resolve({});
  }), _defineProperty(_services10, _types.SERVICE.DELETE, function () {
    return Promise.resolve(mockedDeleteResponse);
  }), _services10)
}).withContext(_objectSpread(_objectSpread({}, _types.DefaultContext), mockedFetchResponse));
exports.deleteMachineSuccess = deleteMachineSuccess;