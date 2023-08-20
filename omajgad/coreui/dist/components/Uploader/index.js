"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ImagesUploader = require("./ImagesUploader");
Object.keys(_ImagesUploader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ImagesUploader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ImagesUploader[key];
    }
  });
});
var _DocumentsUploader = require("./DocumentsUploader");
Object.keys(_DocumentsUploader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DocumentsUploader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DocumentsUploader[key];
    }
  });
});
var _types = require("./ImagesUploader/types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});