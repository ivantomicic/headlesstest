"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploaderBase = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDeviceDetect = require("react-device-detect");
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactDndTouchBackend = require("react-dnd-touch-backend");
var _designTokens = require("@crowdhouse/design-tokens");
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _Alert = require("./../../Alert");
var _Button = require("./../../Button");
var _DropZone = require("./DropZone");
var _FileDialog = require("./FileDialog");
var _helpers = require("./../ImagesUploader/helpers");
var _lodash = require("lodash");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var Upload = function Upload(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M12.75 5.56V15a.75.75 0 0 1-1.5 0V5.56L8.03 8.78a.75.75 0 0 1-1.06-1.06L12 2.69l5.03 5.03a.75.75 0 0 1-1.06 1.06l-3.22-3.22zM18 18v-3.75a.75.75 0 0 1 1.5 0v5.25h-15v-5.25a.75.75 0 0 1 1.5 0V18h12z",
      fill: "currentColor"
    })
  }));
};
Upload.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function () {
  return {
    root: {
      width: '100%'
    },
    description: {
      color: _designTokens.colors.text.secondary
    },
    errorContainer: {
      width: '100%'
    }
  };
});
var UploaderBase = function UploaderBase(_ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    onUpload = _ref.onUpload,
    error = _ref.error,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Image, {}) : _ref$icon,
    messages = _ref.messages,
    allowedFileTypes = _ref.allowedFileTypes,
    fileSizeLimit = _ref.fileSizeLimit,
    _ref$validateFilesOnD = _ref.validateFilesOnDrop,
    validateFilesOnDrop = _ref$validateFilesOnD === void 0 ? false : _ref$validateFilesOnD,
    onFileTooLargeError = _ref.onFileTooLargeError,
    onFileTypeInvalidError = _ref.onFileTypeInvalidError,
    isUploading = _ref.isUploading;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var description = messages.description,
    fileUploadLabel = messages.fileUploadLabel,
    fileUploadHint = messages.fileUploadHint,
    title = messages.title;
  var backend = _reactDeviceDetect.isMobile ? _reactDndTouchBackend.TouchBackend : _reactDndHtml5Backend.HTML5Backend;
  var handleOnUpload = function handleOnUpload(files) {
    if (Array.isArray(files) && files.length > 0) {
      var filesInvalidType = (0, _helpers.validateFileType)(files, allowedFileTypes);
      if (onFileTypeInvalidError && !(0, _lodash.isEmpty)(filesInvalidType)) {
        onFileTypeInvalidError(filesInvalidType);
        return;
      }
      var filesTooLarge = (0, _helpers.validateFileSize)(files, fileSizeLimit);
      if (onFileTooLargeError && !(0, _lodash.isEmpty)(filesTooLarge)) {
        onFileTooLargeError(filesTooLarge);
        return;
      }
      if (onUpload) {
        onUpload(files);
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDnd.DndProvider, {
    backend: backend,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropZone.DropZone, {
      disabled: disabled,
      onUpload: onUpload,
      allowedFileTypes: allowedFileTypes,
      fileSizeLimit: fileSizeLimit,
      validateFilesOnDrop: validateFilesOnDrop,
      onFileTooLargeError: onFileTooLargeError,
      onFileTypeInvalidError: onFileTypeInvalidError,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        container: true,
        spacing: 1,
        direction: "column",
        alignItems: "center",
        children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          className: classes.errorContainer,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.Alert, {
            severity: "error",
            "data-testid": "uploader-alert",
            children: error
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          sm: 12,
          children: icon
        }), title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body1",
            "data-testid": "uploader-title",
            align: "center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: title
            })
          })
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          "data-testid": "uploader-description-section",
          children: typeof description === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            "data-testid": "uploader-description",
            align: "center",
            children: description
          }) : description
        }), !disabled && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileDialog.FileDialog, {
              onUpload: handleOnUpload,
              disabled: disabled,
              allowedFileTypes: allowedFileTypes,
              children: function children(openFileDialog) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
                  buttonProps: {
                    startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(Upload, {})
                  },
                  onClick: openFileDialog,
                  size: "medium",
                  variant: "secondary",
                  disabled: disabled,
                  loading: isUploading,
                  children: fileUploadLabel
                });
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body2",
              className: classes.description,
              "data-testid": "uploader-instruction",
              "align-text": "center",
              children: fileUploadHint
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          zeroMinWidth: true,
          className: classes.root,
          children: children
        })]
      })
    })
  });
};
exports.UploaderBase = UploaderBase;