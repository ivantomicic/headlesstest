"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.centerMap = void 0;
exports.findAddress = findAddress;
exports.geocoderCallBack = void 0;
var geocoderCallBack = function geocoderCallBack(address, setItem, setMarkers) {
  return function (results) {
    if (!results || (results === null || results === void 0 ? void 0 : results.length) === 0) {
      return;
    }
    var _results$ = results[0],
      location = _results$.geometry.location,
      formatted_address = _results$.formatted_address;
    var position = {
      lat: location.lat(),
      lng: location.lng(),
      label: formatted_address
    };

    // cache result
    setItem(address, [position]);
    setMarkers([position]);
  };
};
exports.geocoderCallBack = geocoderCallBack;
function findAddress(mapData, address, setItem, getItem, setMarkers) {
  var maps = mapData.maps;
  var positions = getItem(address);
  if (positions) {
    setMarkers(positions);
  } else {
    var Geocoder = new maps.Geocoder();
    Geocoder.geocode({
      address: address
    }, geocoderCallBack(address, setItem, setMarkers));
  }
}
var centerMap = function centerMap(mapData, positions, zoom) {
  var map = mapData.map,
    maps = mapData.maps;
  if (positions.length > 1) {
    var bounds = new maps.LatLngBounds();
    positions.forEach(function (_ref) {
      var lat = _ref.lat,
        lng = _ref.lng;
      if (lat != null && lng != null) {
        bounds.extend(new maps.LatLng(lat, lng));
      }
    });
    map.fitBounds(bounds, {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    });
  } else {
    map.setCenter(positions[0]);
    map.setZoom(zoom);
  }
};
exports.centerMap = centerMap;