"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropZone = void 0;
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactDnd = require("react-dnd");
var _lodash = require("lodash");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _mui = require("tss-react/mui");
var _designTokens = require("@crowdhouse/design-tokens");
var _helpers = require("./../../ImagesUploader/helpers");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useStyles = (0, _mui.makeStyles)()(function () {
  return {
    root: {
      background: _designTokens.colors.base.grey100,
      borderRadius: '8px',
      border: "1px dashed ".concat(_designTokens.colors.base.grey400),
      padding: '1em',
      display: 'flex',
      flex: '1',
      alignItems: 'flex-start'
    },
    active: {
      borderColor: _designTokens.colors.base.grey800
    },
    disabled: {
      borderColor: _designTokens.colors.base.grey200,
      background: _designTokens.colors.base.grey200
    }
  };
});
var DropZone = function DropZone(_ref) {
  var _classnames;
  var children = _ref.children,
    disabled = _ref.disabled,
    onUpload = _ref.onUpload,
    fileSizeLimit = _ref.fileSizeLimit,
    allowedFileTypes = _ref.allowedFileTypes,
    validateFilesOnDrop = _ref.validateFilesOnDrop,
    onFileTooLargeError = _ref.onFileTooLargeError,
    onFileTypeInvalidError = _ref.onFileTypeInvalidError;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var _useDrop = (0, _reactDnd.useDrop)({
      accept: _reactDndHtml5Backend.NativeTypes.FILE,
      canDrop: function canDrop(item) {
        if (disabled) return false;
        if (validateFilesOnDrop && Array.isArray(item.files) && item.files.length > 0) {
          var filesInvalidType = (0, _helpers.validateFileType)(item.files, allowedFileTypes);
          if (onFileTypeInvalidError && !(0, _lodash.isEmpty)(filesInvalidType)) {
            onFileTypeInvalidError(filesInvalidType);
            return false;
          }
          var filesTooLarge = (0, _helpers.validateFileSize)(item.files, fileSizeLimit);
          if (onFileTooLargeError && !(0, _lodash.isEmpty)(filesTooLarge)) {
            onFileTooLargeError(filesTooLarge);
            return false;
          }
          return (0, _helpers.validation)(item.files, fileSizeLimit, allowedFileTypes);
        }
        return true;
      },
      drop: function drop(item) {
        if (onUpload && Array.isArray(item.files)) {
          onUpload(item.files);
        }
      },
      collect: function collect(monitor) {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        };
      }
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    canDrop = _useDrop2$.canDrop,
    isOver = _useDrop2$.isOver,
    drop = _useDrop2[1];
  var isActive = canDrop && isOver;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: drop,
    className: (0, _classnames2.default)(classes.root, (_classnames = {}, _defineProperty(_classnames, classes.active, isActive), _defineProperty(_classnames, classes.disabled, disabled), _classnames)),
    "data-testid": "uploader-drop-zone",
    children: children
  });
};
exports.DropZone = DropZone;