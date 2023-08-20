"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMapStyle = exports.DefaultGoogleMapStyles = void 0;
var _mui = require("tss-react/mui");
var useMapStyle = (0, _mui.makeStyles)()(function (theme) {
  return {
    root: {
      position: 'relative',
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%'
    },
    skeletonLoading: {
      backgroundColor: theme.colors.base.grey300,
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
    }
  };
});
exports.useMapStyle = useMapStyle;
var DefaultGoogleMapStyles = [{
  elementType: 'geometry',
  stylers: [{
    color: '#f5f5f5'
  }]
}, {
  elementType: 'labels.icon',
  stylers: [{
    visibility: 'off'
  }]
}, {
  elementType: 'labels.text',
  stylers: [{
    visibility: 'on'
  }]
}, {
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#616161'
  }]
}, {
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#f5f5f5'
  }]
}, {
  featureType: 'administrative',
  elementType: 'geometry',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.country',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#787878'
  }, {
    visibility: 'on'
  }, {
    weight: 3
  }]
}, {
  featureType: 'administrative.country',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#bdbdbd'
  }]
}, {
  featureType: 'administrative.locality',
  elementType: 'labels.icon',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.locality',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'on'
  }]
}, {
  featureType: 'administrative.province',
  elementType: 'labels.icon',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.province',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'simplified'
  }]
}, {
  featureType: 'poi',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi',
  elementType: 'geometry',
  stylers: [{
    color: '#eeeeee'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#757575'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'geometry',
  stylers: [{
    color: '#e5e5e5'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#9e9e9e'
  }]
}, {
  featureType: 'road',
  elementType: 'geometry',
  stylers: [{
    color: '#ffffff'
  }]
}, {
  featureType: 'road',
  elementType: 'labels.icon',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#757575'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry',
  stylers: [{
    color: '#dadada'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#616161'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#9e9e9e'
  }]
}, {
  featureType: 'transit',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'geometry',
  stylers: [{
    color: '#e5e5e5'
  }]
}, {
  featureType: 'transit.station',
  elementType: 'geometry',
  stylers: [{
    color: '#eeeeee'
  }]
}, {
  featureType: 'water',
  elementType: 'geometry',
  stylers: [{
    color: '#c9c9c9'
  }]
}, {
  featureType: 'water',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#bfe1e5'
  }]
}, {
  featureType: 'water',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'water',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#9e9e9e'
  }]
}];
exports.DefaultGoogleMapStyles = DefaultGoogleMapStyles;