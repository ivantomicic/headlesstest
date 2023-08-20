"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagesUploader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _UploaderBase = require("./../UploaderBase");
var _DroppedFileList = require("./DroppedFileList");
var _types = require("./types");
var _useUploader = require("./useUploader");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Image = function Image(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 16.06V18h18V6H3v7.94l3-3 3 3 2.25-2.25 2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72L9 16.06l-3-3-3 3zM1.5 4.5h21v15h-21v-15zm15 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
      fill: "currentColor"
    })
  }));
};
Image.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ImagesUploader = function ImagesUploader(_ref) {
  var allowedFileTypes = _ref.allowedFileTypes,
    fileSizeLimit = _ref.fileSizeLimit,
    _ref$services = _ref.services,
    uploaderService = _ref$services.uploaderService,
    deleteService = _ref$services.deleteService,
    fetchService = _ref$services.fetchService,
    reorderService = _ref$services.reorderService,
    messages = _ref.messages,
    disabled = _ref.disabled,
    devTools = _ref.devTools,
    _ref$mainImage = _ref.mainImage,
    mainImage = _ref$mainImage === void 0 ? false : _ref$mainImage,
    icon = _ref.icon,
    _ref$transformSrc = _ref.transformSrc,
    transformSrc = _ref$transformSrc === void 0 ? function (images) {
      return images;
    } : _ref$transformSrc;
  var errorMessage = messages.errorMessage,
    mainImageTitle = messages.mainImageTitle;
  var uploaderContext = (0, _useUploader.useUploader)({
    allowedFileTypes: allowedFileTypes,
    fileSizeLimit: fileSizeLimit,
    uploaderService: uploaderService,
    deleteService: deleteService,
    fetchService: fetchService,
    reorderService: reorderService,
    errorMessage: errorMessage,
    devTools: devTools,
    mainImage: mainImage,
    mainImageTitle: mainImageTitle,
    transformSrc: transformSrc
  });
  var state = uploaderContext.state,
    disable = uploaderContext.disable;
  var error = state.context.error;

  // Bridging disabled flag
  (0, _react.useEffect)(function () {
    if (state.matches(_types.STATE.ACTIVE) && disabled) {
      disable();
    }
  }, [state, disabled, disable]);
  var isDisabled = state.matches(_types.STATE.DISABLED);
  var isLoading = state.matches(_types.STATE.UPLOADING);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploaderBase.UploaderBase, {
    messages: messages,
    onUpload: uploaderContext.uploadHandler,
    fileSizeLimit: fileSizeLimit,
    allowedFileTypes: allowedFileTypes,
    disabled: isDisabled,
    error: error ? error : undefined,
    icon: icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(Image, {}),
    isUploading: isLoading,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DroppedFileList.DroppedFileList, {
      uploaderContext: uploaderContext
    })
  });
};
exports.ImagesUploader = ImagesUploader;