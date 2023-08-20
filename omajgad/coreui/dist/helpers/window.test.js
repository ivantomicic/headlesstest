"use strict";

var _window = require("./window");
/* eslint-disable @typescript-eslint/ban-ts-comment */

describe('window.js', function () {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  var userAgent;
  beforeEach(function () {
    userAgent = jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36');
  });
  it('isMobileDevice should return true', function () {
    userAgent.mockReturnValueOnce('chrome');
    // @ts-ignore
    window.orientation = {};
    expect((0, _window.isMobileDevice)()).toBeTruthy();
  });
  it('isMobileDevice should return false', function () {
    userAgent.mockReturnValueOnce('EFWE');
    // @ts-ignore
    window.orientation = undefined;
    expect((0, _window.isMobileDevice)()).toBeFalsy();
  });
  it.skip('isMobileDevice should return true because it is IEMobile', function () {
    userAgent.mockReturnValue('IEMobile');
    expect((0, _window.isMobileDevice)()).toBeTruthy();
  });
  it('isMobileDevice should return false because it is not IEMobile', function () {
    userAgent.mockReturnValueOnce('safari ios');
    expect((0, _window.isMobileDevice)()).toBeFalsy();
  });
});