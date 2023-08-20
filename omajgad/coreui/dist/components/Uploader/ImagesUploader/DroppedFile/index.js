"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppedFile = void 0;
var _designTokens = require("@crowdhouse/design-tokens");
var _material = require("@mui/material");
var _mui = require("tss-react/mui");
var _classnames4 = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _IconButton = require("./../../../IconButton");
var _types = require("./../types");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Delete = function Delete(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 4.5v-3h6v3h4.5a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5H9zm1.5 0h3V3h-3v1.5zm6 16.5V8.25a.75.75 0 0 1 1.5 0V22.5H6V8.25a.75.75 0 0 1 1.5 0V21h9zm-3-12.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.25zm-4.5 0a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.25z",
      fill: "currentColor"
    })
  }));
};
Delete.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      boxSizing: 'border-box',
      cursor: 'move',
      opacity: 1,
      transition: 'opacity 150ms ease-in-out',
      '&:active': {
        '& button': {
          opacity: '0'
        },
        '& span': {
          opacity: '0'
        }
      },
      '&:hover': {
        opacity: 0.8
      },
      '&:before': {
        content: '""',
        paddingTop: '75%'
      }
    },
    disabled: {
      opacity: 0
    },
    mainImage: {
      '&:before': {
        paddingTop: '56%'
      }
    },
    dragging: {
      opacity: 0.8
    },
    button: {
      position: 'absolute',
      right: '0.5em',
      top: '0.5em',
      zIndex: 1
    },
    image: {
      alignItems: 'flex-end',
      objectFit: 'cover',
      borderRadius: '8px',
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    skeletonLoading: {
      backgroundColor: _designTokens.colors.base.grey300,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      animation: '$loading 1.5s ease-in-out 0.5s infinite'
    },
    '@keyframes loading': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.4
      },
      '100%': {
        opacity: 1
      }
    },
    placeholder: {
      borderColor: _designTokens.colors.base.grey800,
      borderStyle: 'dashed',
      borderWidth: '1px',
      borderRadius: '8px',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: _designTokens.colors.base.white
    },
    mainImageLabel: {
      position: 'absolute',
      left: '0.5em',
      top: '0.5em',
      zIndex: 2,
      backgroundColor: _designTokens.colors.base.white,
      borderRadius: '4px',
      paddingTop: '7px',
      paddingBottom: '7px',
      paddingLeft: '7px',
      paddingRight: '7px',
      boxShadow: theme.shadows[1],
      transition: 'opacity 150ms ease-in-out'
    },
    disabledImage: {
      opacity: 1,
      cursor: 'no-drop'
    },
    loader: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  };
});
var DroppedFile = function DroppedFile(_ref) {
  var _classnames;
  var uuid = _ref.uuid,
    index = _ref.index,
    isMainImage = _ref.isMainImage,
    thumbnailURL = _ref.thumbnailURL,
    uploaderContext = _ref.uploaderContext,
    isPlaceholder = _ref.isPlaceholder;
  var state = uploaderContext.state,
    setDndPositions = uploaderContext.setDndPositions,
    sort = uploaderContext.sort,
    deleteHandler = uploaderContext.deleteHandler;
  var value = state.value,
    _state$context = state.context,
    mainImageTitle = _state$context.mainImageTitle,
    deleteUuid = _state$context.deleteUuid;
  var _useStyles = useStyles({
      thumbnailURL: thumbnailURL
    }),
    classes = _useStyles.classes;
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loaded = _React$useState2[0],
    setLoaded = _React$useState2[1];
  var disabled = value === _types.STATE.DISABLED;
  (0, _react.useEffect)(function () {
    var tempImage = new Image();
    tempImage.onload = function () {
      return setLoaded(true);
    };
    tempImage.src = thumbnailURL;
  }, [thumbnailURL]);
  var _useDrag = (0, _reactDnd.useDrag)(function () {
      return {
        type: _types.DRAG_TYPE.IMAGE,
        item: function item() {
          return {
            uuid: uuid,
            index: index,
            thumbnailURL: thumbnailURL
          };
        },
        collect: function collect(monitor) {
          return {
            isDragging: monitor.isDragging()
          };
        },
        end: function end(item, monitor) {
          var didDrop = monitor.didDrop();
          if (didDrop && index !== item.index) {
            sort();
          }
        },
        canDrag: function canDrag() {
          return !disabled;
        }
      };
    }, [index, sort, uuid, thumbnailURL]),
    _useDrag2 = _slicedToArray(_useDrag, 2),
    isDragging = _useDrag2[0].isDragging,
    drag = _useDrag2[1];
  var _useDrop = (0, _reactDnd.useDrop)({
      accept: _types.DRAG_TYPE.IMAGE,
      collect: function collect(monitor) {
        return {
          handlerId: monitor.getHandlerId()
        };
      },
      hover: function hover(_ref2) {
        var draggedUuid = _ref2.uuid;
        if (draggedUuid !== uuid) {
          setDndPositions(draggedUuid, uuid);
        }
      }
    }, [uuid, setDndPositions]),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    handlerId = _useDrop2[0].handlerId,
    drop = _useDrop2[1];
  var handleDelete = function handleDelete() {
    deleteHandler(uuid);
  };
  var handleMouseDown = function handleMouseDown(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
    item: true,
    xs: isMainImage ? 12 : 6,
    sm: isMainImage ? 12 : 3,
    "data-testid": "uploader-drag-element",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames4.default)(classes.root, (_classnames = {}, _defineProperty(_classnames, classes.mainImage, isMainImage), _defineProperty(_classnames, classes.dragging, isDragging), _defineProperty(_classnames, classes.disabledImage, disabled), _classnames)),
      "data-testid": "uploader-dropped-file-".concat(isMainImage ? 'main' : 'thumbnail'),
      ref: function ref(element) {
        return drag(drop(element));
      },
      "data-handler-id": handlerId,
      children: [isPlaceholder && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames4.default)(classes.skeletonLoading)
      }), isMainImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames4.default)(classes.mainImageLabel, _defineProperty({}, classes.disabled, isDragging)),
        "data-testid": "uploader-main-image-label",
        children: mainImageTitle
      }), !isPlaceholder && !disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames4.default)(classes.button, _defineProperty({}, classes.disabled, isDragging)),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          variant: "secondary",
          size: "small",
          onClick: handleDelete,
          onMouseDown: handleMouseDown,
          "data-testid": "uploader-delete-file",
          loading: deleteUuid === uuid,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Delete, {})
        })
      }), isDragging ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes.placeholder
      }) : !loaded ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames4.default)(classes.skeletonLoading)
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        alt: "uploaderThumbnail",
        src: thumbnailURL,
        className: (0, _classnames4.default)(classes.image)
      })]
    })
  });
};
exports.DroppedFile = DroppedFile;