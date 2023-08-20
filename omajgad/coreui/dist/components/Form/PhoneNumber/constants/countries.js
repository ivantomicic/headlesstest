"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapFromRawCountries = exports.countriesMapEN = exports.countriesMapDE = void 0;
var _countriesRawDE = require("./countriesRawDE");
var _countriesRawEN = require("./countriesRawEN");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var byRawCountryTitle = function byRawCountryTitle(a, b) {
  return String(a[0]).localeCompare(b[0]);
};
var getMapFromRawCountries = function getMapFromRawCountries(rawCountries) {
  return new Map(_toConsumableArray(rawCountries).sort(byRawCountryTitle).map(function (countryRaw) {
    return [countryRaw[2].toUpperCase(), {
      title: countryRaw[0],
      isoCode: countryRaw[2].toUpperCase(),
      phoneCode: countryRaw[3],
      format: countryRaw[4]
    }];
  }));
};
exports.getMapFromRawCountries = getMapFromRawCountries;
var countriesMapDE = getMapFromRawCountries(_countriesRawDE.countriesRawDE);
exports.countriesMapDE = countriesMapDE;
var countriesMapEN = getMapFromRawCountries(_countriesRawEN.countriesRawEN);
exports.countriesMapEN = countriesMapEN;