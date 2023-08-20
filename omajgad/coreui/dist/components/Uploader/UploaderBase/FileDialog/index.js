"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileDialog = void 0;
var _mui = require("tss-react/mui");
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var useStyles = (0, _mui.makeStyles)()(function () {
  return {
    root: {
      display: 'none'
    }
  };
});
var FileDialog = function FileDialog(_ref) {
  var onUpload = _ref.onUpload,
    children = _ref.children,
    disabled = _ref.disabled,
    allowedFileTypes = _ref.allowedFileTypes;
  var inputFile = (0, _react.useRef)(null);
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var handleUpload = function handleUpload(event) {
    var files = event.target.files;
    if (files && onUpload) {
      var fileArray = Array.from(files);
      onUpload(fileArray);
    }
  };
  var openFileDialog = function openFileDialog() {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: classes.root,
      ref: inputFile,
      onChange: handleUpload,
      type: "file",
      disabled: disabled,
      "data-testid": "uploader-file-dialog",
      accept: allowedFileTypes.join(',')
    }), children(openFileDialog)]
  });
};
exports.FileDialog = FileDialog;