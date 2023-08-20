"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MapStaticExample = exports.MapStaticAddressExample = void 0;
var _ = require("./");
var _provider = require("./provider");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var apiKey = process.env.STORYBOOK_REACT_APP_GOOGLE_MAPS_KEY || '';
var _default = {
  title: 'Components/Map',
  component: _.Map,
  argTypes: {
    address: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    options: {
      defaultValue: {
        fullscreenControl: false,
        zoomControl: false,
        draggable: false
      }
    },
    disableTooltip: {
      defaultValue: false
    },
    zoom: {
      defaultValue: 15
    }
  }
};
exports.default = _default;
var MapStaticExample = function MapStaticExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_provider.MapProvider, {
    apiKey: apiKey,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        height: '400px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Map, _objectSpread(_objectSpread({}, args), {}, {
        coordinates: [{
          lat: 47.37,
          lng: 8.54,
          label: 'Address 1'
        }, {
          lat: 47.39,
          lng: 8.53,
          label: 'Address 2'
        }, {
          lat: 47.38,
          lng: 8.535,
          label: 'Address 3'
        }]
      }))
    })
  });
};
exports.MapStaticExample = MapStaticExample;
var MapStaticAddressExample = function MapStaticAddressExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_provider.MapProvider, {
    apiKey: apiKey,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        height: '400px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Map, _objectSpread(_objectSpread({}, args), {}, {
        address: "Lerchenstrasse 24, 8045 Z\xFCrich, Switzerland"
      }))
    })
  });
};
exports.MapStaticAddressExample = MapStaticAddressExample;