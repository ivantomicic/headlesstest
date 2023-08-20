"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = void 0;
var _reactDnd = require("react-dnd");
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
var useStyles = (0, _mui.makeStyles)()(function (_, _ref) {
  var thumbnailURL = _ref.thumbnailURL,
    initialOffset = _ref.initialOffset,
    currentOffset = _ref.currentOffset;
  return {
    preview: {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 100,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    thumbnail: {
      backgroundImage: "url(".concat(thumbnailURL, ")"),
      backgroundSize: 'cover',
      width: '160px',
      height: '120px',
      borderRadius: '8px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: "".concat(!initialOffset ? 'none' : 'block'),
      transform: "translate(".concat(currentOffset === null || currentOffset === void 0 ? void 0 : currentOffset.x, "px, ").concat(currentOffset === null || currentOffset === void 0 ? void 0 : currentOffset.y, "px)")
    }
  };
});
var Preview = function Preview() {
  var _useDragLayer = (0, _reactDnd.useDragLayer)(function (monitor) {
      return {
        item: monitor.getItem(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
      };
    }),
    isDragging = _useDragLayer.isDragging,
    item = _useDragLayer.item,
    initialOffset = _useDragLayer.initialOffset,
    currentOffset = _useDragLayer.currentOffset;
  var _useStyles = useStyles({
      thumbnailURL: item && item.thumbnailURL,
      initialOffset: initialOffset,
      currentOffset: currentOffset
    }),
    classes = _useStyles.classes;
  if (!isDragging) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.preview,
    "data-testid": "uploader-mobile-preview",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.thumbnail
    })
  });
};
exports.Preview = Preview;