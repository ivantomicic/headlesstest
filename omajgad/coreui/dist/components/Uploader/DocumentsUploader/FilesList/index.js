"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilesList = void 0;
var _material = require("@mui/material");
var _FilesListItem = require("./FilesListItem");
var _jsxRuntime = require("react/jsx-runtime");
var FilesList = function FilesList(_ref) {
  var files = _ref.files,
    onDelete = _ref.onDelete,
    disabled = _ref.disabled,
    showImagePreviews = _ref.showImagePreviews;
  if (files.length === 0) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    "data-testid": "files-list",
    disablePadding: true,
    children: files.map(function (file) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilesListItem.FilesListItem, {
        onDelete: onDelete,
        disabled: disabled,
        file: file,
        showImagePreviews: showImagePreviews
      }, file.id);
    })
  });
};
exports.FilesList = FilesList;