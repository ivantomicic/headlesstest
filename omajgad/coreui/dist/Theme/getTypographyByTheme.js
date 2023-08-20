"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypographyByTheme = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getTypographyByTheme = function getTypographyByTheme(themeInstance, typographySet) {
  var typography = {};
  for (var _i = 0, _Object$entries = Object.entries(typographySet); _i < _Object$entries.length; _i++) {
    var _themeInstance$breakp;
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      typographyName = _Object$entries$_i[0],
      typographyDefinition = _Object$entries$_i[1];
    var def = {};
    if (typographyDefinition !== null && typographyDefinition !== void 0 && typographyDefinition.default) {
      def = _objectSpread({}, typographyDefinition.default);
    }
    if (typographyDefinition !== null && typographyDefinition !== void 0 && typographyDefinition.desktop && (_themeInstance$breakp = themeInstance.breakpoints) !== null && _themeInstance$breakp !== void 0 && _themeInstance$breakp.up) {
      def = _objectSpread(_objectSpread({}, def), {}, _defineProperty({}, themeInstance.breakpoints.up('md'), _objectSpread({}, typographyDefinition.desktop)));
    }
    typography[typographyName] = def;
  }
  return typography;
};
exports.getTypographyByTheme = getTypographyByTheme;