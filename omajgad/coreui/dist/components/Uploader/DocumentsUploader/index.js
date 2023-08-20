"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsUploader = void 0;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("./../ImagesUploader/helpers");
var _UploaderBase = require("./../UploaderBase");
var _FilesList = require("./FilesList");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["files", "fileSizeLimit", "icon", "onDelete", "disabled", "showImagePreviews"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DocumentIcon = function DocumentIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 21V9.75a.75.75 0 0 1 1.5 0V22.5h-15v-21h6.75a.75.75 0 0 1 0 1.5H6v18h12zm1.28-14.78a.75.75 0 0 1-.53 1.28H13.5V2.25a.75.75 0 0 1 1.28-.53l4.5 4.5zM15 4.06V6h1.94L15 4.06z",
      fill: "currentColor"
    })
  }));
};
DocumentIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var DocumentsUploader = function DocumentsUploader(_ref) {
  var files = _ref.files,
    fileSizeLimit = _ref.fileSizeLimit,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(DocumentIcon, {}) : _ref$icon,
    onDelete = _ref.onDelete,
    disabled = _ref.disabled,
    showImagePreviews = _ref.showImagePreviews,
    uploaderBaseProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploaderBase.UploaderBase, _objectSpread(_objectSpread({}, uploaderBaseProps), {}, {
    icon: icon,
    validateFilesOnDrop: true,
    fileSizeLimit: (0, _helpers.getFileSizeInByte)(fileSizeLimit),
    disabled: disabled,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilesList.FilesList, {
      files: files,
      onDelete: onDelete,
      disabled: disabled,
      showImagePreviews: showImagePreviews
    })
  }));
};
exports.DocumentsUploader = DocumentsUploader;