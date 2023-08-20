"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;
Object.defineProperty(exports, "MapContext", {
  enumerable: true,
  get: function get() {
    return _provider.MapContext;
  }
});
Object.defineProperty(exports, "MapProvider", {
  enumerable: true,
  get: function get() {
    return _provider.MapProvider;
  }
});
Object.defineProperty(exports, "useMap", {
  enumerable: true,
  get: function get() {
    return _provider.useMap;
  }
});
var _googleMapReact = _interopRequireDefault(require("google-map-react"));
var _react = require("react");
var _mapIcon = require("./mapIcon");
var _provider = require("./provider");
var _styles = require("./styles");
var _useMarker2 = require("./useMarker");
var _jsxRuntime = require("react/jsx-runtime");
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
var Map = function Map(_ref) {
  var _ref$center = _ref.center,
    center = _ref$center === void 0 ? {
      lat: 47.37,
      lng: 8.54
    } : _ref$center,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? 15 : _ref$zoom,
    address = _ref.address,
    coordinates = _ref.coordinates,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {
      fullscreenControl: false,
      zoomControl: false,
      draggable: false
    } : _ref$options,
    disableTooltip = _ref.disableTooltip;
  var _useMap = (0, _provider.useMap)(),
    apiKey = _useMap.apiKey;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useMarker = (0, _useMarker2.useMarker)({
      coordinates: coordinates,
      address: address,
      zoom: zoom
    }),
    markers = _useMarker.markers,
    onMapLoad = _useMarker.onMapLoad;
  var _useMapStyle = (0, _styles.useMapStyle)(),
    classes = _useMapStyle.classes,
    cx = _useMapStyle.cx;
  var onLoaded = (0, _react.useCallback)(function () {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    "data-testid": "map-container",
    className: cx(classes.root, _defineProperty({}, classes.skeletonLoading, loading)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_googleMapReact.default, {
      bootstrapURLKeys: {
        key: apiKey
      },
      defaultCenter: center,
      defaultZoom: zoom,
      onGoogleApiLoaded: onMapLoad,
      onTilesLoaded: onLoaded,
      yesIWantToUseGoogleMapApiInternals: true,
      options: _objectSpread(_objectSpread({}, options), {}, {
        styles: _styles.DefaultGoogleMapStyles
      }),
      children: markers.map(function (marker) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_mapIcon.MapIcon, _objectSpread({
          disableTooltip: disableTooltip
        }, marker), marker.label);
      })
    })
  });
};
exports.Map = Map;