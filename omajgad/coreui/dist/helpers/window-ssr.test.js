"use strict";

var _window2 = require("./window");
describe('isMobileDevice', function () {
  var _window = window,
    orientation = _window.orientation;
  afterAll(function () {
    window.orientation = orientation;
  });
  it('should return false if orientation is undefined', function () {
    expect((0, _window2.isMobileDevice)()).toBeFalsy();
  });
  it('shuold return true if orientation is available', function () {
    window.orientation = 1;
    expect((0, _window2.isMobileDevice)()).toBeTruthy();
  });
});