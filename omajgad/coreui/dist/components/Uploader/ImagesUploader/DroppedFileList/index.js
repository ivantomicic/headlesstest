"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppedFileList = void 0;
var _material = require("@mui/material");
var _reactDeviceDetect = require("react-device-detect");
var _DroppedFile = require("./../DroppedFile");
var _Preview = require("./../Preview");
var _types = require("./../types");
var _Loader = require("./../../../Loader");
var _jsxRuntime = require("react/jsx-runtime");
var DroppedFileList = function DroppedFileList(_ref) {
  var uploaderContext = _ref.uploaderContext;
  var state = uploaderContext.state;
  var _state$context = state.context,
    images = _state$context.images,
    mainImage = _state$context.mainImage;
  if (state.value === _types.STATE.FETCHING) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      width: "100%",
      textAlign: "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader.Loader, {})
    });
  }
  if (!images.length) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
    container: true,
    item: true,
    direction: "row",
    spacing: 2,
    "data-testid": "uploader-dropped-file-list",
    children: [_reactDeviceDetect.isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preview.Preview, {}) : null, images.map(function (_ref2, index) {
      var url = _ref2.url,
        uuid = _ref2.uuid,
        placeholder = _ref2.placeholder;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DroppedFile.DroppedFile, {
        uuid: uuid,
        thumbnailURL: url,
        index: index,
        isMainImage: index === 0 && mainImage,
        uploaderContext: uploaderContext,
        isPlaceholder: placeholder
      }, uuid);
    })]
  });
};
exports.DroppedFileList = DroppedFileList;