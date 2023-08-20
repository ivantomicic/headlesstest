"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _libphonenumberJs = require("libphonenumber-js");
var exposedLibrary = _interopRequireWildcard(require("./../../../../index"));
var _countries = require("./countries");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
describe('getMapFromRawCountries', function () {
  it('creates sorted map', function () {
    var testCountries = [['Yimbabwe', ['africa'], 'yw', '263'], ['Ambia', ['africa'], 'zm', '260']];
    var map = (0, _countries.getMapFromRawCountries)(testCountries);
    var values = Array.from(map.values());
    expect(values[0].title).toBe(testCountries[1][0]);
    expect(values[1].title).toBe(testCountries[0][0]);
  });
});
it('has exposed locale maps with library', function () {
  expect(exposedLibrary.countriesMapDE).toEqual(_countries.countriesMapDE);
  expect(exposedLibrary.countriesMapEN).toEqual(_countries.countriesMapEN);
});
it('has correct masks for the countries', function () {
  var checkCorrectMask = function checkCorrectMask(country) {
    if (country.format) {
      var nationalNumber = country.format.replace(/\s/g, '').replace(/\d/g, '9');
      var phoneNumberExample = "+".concat(country.phoneCode).concat(nationalNumber);
      var parsedNumber = (0, _libphonenumberJs.parsePhoneNumber)(phoneNumberExample);
      if (!parsedNumber.country) {
        console.log(country);
      }
      // eslint-disable-next-line jest/no-conditional-expect
      expect(parsedNumber.country).toBeTruthy();
    }
  };
  Array.from(_countries.countriesMapDE.values()).forEach(checkCorrectMask);
  Array.from(_countries.countriesMapEN.values()).forEach(checkCorrectMask);
});
it('has correct country code information', function () {
  var checkCorrectIsoCode = function checkCorrectIsoCode(country) {
    if (country.isoCode.length !== 2) {
      console.log(country);
    }
    expect(country.isoCode).toHaveLength(2);
  };
  Array.from(_countries.countriesMapDE.values()).forEach(checkCorrectIsoCode);
  Array.from(_countries.countriesMapEN.values()).forEach(checkCorrectIsoCode);
});