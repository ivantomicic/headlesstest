"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openURL = exports.isMobileDevice = void 0;
var isMobileDevice = function isMobileDevice() {
  return typeof window !== 'undefined' && typeof window.orientation !== 'undefined' || typeof navigator !== 'undefined' && navigator.userAgent.indexOf('IEMobile') !== -1;
};
exports.isMobileDevice = isMobileDevice;
var openURL = function openURL(url) {
  return window.open(url);
};
exports.openURL = openURL;