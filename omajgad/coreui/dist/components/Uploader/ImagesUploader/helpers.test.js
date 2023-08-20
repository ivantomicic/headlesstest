"use strict";

var _helpers = require("./helpers");
var _types = require("./types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
describe('action', function () {
  var parts = [new Blob([''], {
    type: 'text/plain'
  }), new Uint16Array([33])];
  var files = [new File(parts, 'filename1.txt', {
    type: 'text/plain'
  }), new File(parts, 'filename2.jpg', {
    type: 'image/jpg'
  }), new File(parts, 'filename3.txt', {
    type: 'text/plain'
  })];
  var images = [{
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
  }];
  var reorderedImages = [{
    uuid: '1',
    url: 'http://1.jpeg'
  }, {
    uuid: '4',
    url: 'http://4.jpeg'
  }, {
    uuid: '3',
    url: 'http://3.jpeg'
  }, {
    uuid: '2',
    url: 'http://2.jpeg'
  }];
  it('should get image index by uuid', function () {
    expect((0, _helpers.getImagePositionByUuid)(images, '2')).toEqual(1);
  });
  it('should validate file size', function () {
    // file size limit is in byte
    var invalidFiles = (0, _helpers.validateFileSize)(files, 10000);
    expect(invalidFiles.length).toBe(0);
  });
  it('should fail validate file size => 3 invalid files', function () {
    var invalidFiles = (0, _helpers.validateFileSize)(files, 1);
    expect(invalidFiles.length).toBe(3);
  });
  it('should validate file type => no invalid files', function () {
    var invalidFiles = (0, _helpers.validateFileType)(files, ['image/jpg', 'text/plain']);
    expect(invalidFiles.length).toBe(0);
  });
  it('should fail validate file type => 2 invalid files', function () {
    var invalidFiles = (0, _helpers.validateFileType)(files, ['image/jpg']);
    expect(invalidFiles.length).toBe(2);
  });
  it('should return empty error', function () {
    expect((0, _helpers.clearError)()).toEqual({
      error: ''
    });
  });
  it('should set error', function () {
    expect((0, _helpers.setError)('error message')).toEqual({
      error: 'error message'
    });
  });
  it('should reorder array elements', function () {
    expect((0, _helpers.setDndPositions)(_objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      images: images
    }), '2', '4')).toEqual({
      images: reorderedImages
    });
  });
  it('should delete an item', function () {
    expect((0, _helpers.deleteFile)('1')).toEqual({
      deleteUuid: '1'
    });
  });
  it('should mergeImages return images', function () {
    expect((0, _helpers.mergeImages)(_objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      images: [{
        url: 'first',
        uuid: '1'
      }, {
        url: 'second',
        uuid: '2'
      }]
    }), [{
      url: 'third',
      uuid: '3'
    }])).toEqual({
      images: [{
        url: 'third',
        uuid: '3'
      }]
    });
  });
  it('should clear files', function () {
    expect((0, _helpers.clearFiles)()).toEqual({
      files: []
    });
  });
  it('should clear placeholders', function () {
    expect((0, _helpers.clearPlaceholders)(_objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      images: [{
        url: 'http://example.com/small.jpg',
        uuid: '3aabff97-3c8c-4bba-90c5-8fee70329395',
        placeholder: true
      }, {
        url: 'http://example.com/small.jpg',
        uuid: '3aabff97-3c8c-4bba-90c5-8fee70329399',
        placeholder: false
      }]
    }))).toEqual({
      images: [{
        placeholder: false,
        url: 'http://example.com/small.jpg',
        uuid: '3aabff97-3c8c-4bba-90c5-8fee70329399'
      }]
    });
  });
  it('should append placeholder images', function () {
    var _newCtx$images;
    var newCtx = (0, _helpers.appendPlaceholders)(_objectSpread(_objectSpread({}, _types.DefaultContext), {}, {
      files: files
    }));
    expect((_newCtx$images = newCtx.images) === null || _newCtx$images === void 0 ? void 0 : _newCtx$images.length).toBe(3);
  });
});