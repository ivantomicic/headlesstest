"use strict";

var _formatters = require("./formatters");
test('formatTime', function () {
  expect((0, _formatters.formatTime)({
    time: new Date('2021-05-22T08:00:00')
  })).toEqual('22. Mai 2021, 8:00');
  expect((0, _formatters.formatTime)({
    time: new Date('2021-06-22T08:00:00')
  })).toEqual('22. Juni 2021, 8:00');
  expect((0, _formatters.formatTime)({
    time: new Date('2021-06-22T08:00:00'),
    endTime: new Date('2021-06-22T10:30:00')
  })).toEqual('22. Juni 2021, 8:00 – 10:30');
  expect((0, _formatters.formatTime)({
    time: new Date('2021-05-22T08:00:00'),
    locale: 'en'
  })).toEqual('22. May 2021, 8:00');
  expect((0, _formatters.formatTime)({
    time: new Date('2021-06-22T08:00:00'),
    locale: 'en'
  })).toEqual('22. Jun. 2021, 8:00');
  expect((0, _formatters.formatTime)({
    time: new Date('2021-06-22T08:00:00'),
    endTime: new Date('2021-06-22T10:30:00'),
    locale: 'en'
  })).toEqual('22. Jun. 2021, 8:00 – 10:30');
});
describe('formatCurrency', function () {
  var testCases = [{
    locale: 'de-CH',
    currency: 'CHF',
    amount: 1234.5,
    formattedAmount: "CHF\xA01\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'CHF',
    amount: -1234.5,
    formattedAmount: "CHF\xA0-1\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'CHF',
    amount: 1234.0,
    formattedAmount: "CHF\xA01\u2019234"
  }, {
    locale: 'de-CH',
    currency: 'CHF',
    amount: -1234.0,
    formattedAmount: "CHF\xA0-1\u2019234"
  }, {
    locale: 'de-CH',
    currency: 'CHF',
    amount: -0.05,
    formattedAmount: "CHF\xA0-0.05"
  }, {
    locale: 'de-CH',
    currency: 'CHF',
    amount: 0.0,
    formattedAmount: "CHF\xA00"
  }, {
    locale: 'de-CH',
    currency: 'EUR',
    amount: 1234.5,
    formattedAmount: "\u20AC\xA01\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'EUR',
    amount: -1234.5,
    formattedAmount: "\u20AC\xA0-1\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'GBP',
    amount: 1234.5,
    formattedAmount: "\xA3\xA01\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'GBP',
    amount: -1234.5,
    formattedAmount: "\xA3\xA0-1\u2019234.50"
  }, {
    locale: 'de-CH',
    currency: 'GBP',
    amount: NaN,
    formattedAmount: ''
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: 1234.5,
    formattedAmount: "1.234,50\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: -1234.5,
    formattedAmount: "-1.234,50\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: 1234.0,
    formattedAmount: "1.234\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: -1234.0,
    formattedAmount: "-1.234\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: -0.05,
    formattedAmount: "-0,05\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'CHF',
    amount: 0.0,
    formattedAmount: "0\xA0CHF"
  }, {
    locale: 'de-DE',
    currency: 'EUR',
    amount: 1234.5,
    formattedAmount: "1.234,50\xA0\u20AC"
  }, {
    locale: 'de-DE',
    currency: 'EUR',
    amount: -1234.5,
    formattedAmount: "-1.234,50\xA0\u20AC"
  }, {
    locale: 'de-DE',
    currency: 'GBP',
    amount: 1234.5,
    formattedAmount: "1.234,50\xA0\xA3"
  }, {
    locale: 'de-DE',
    currency: 'GBP',
    amount: -1234.5,
    formattedAmount: "-1.234,50\xA0\xA3"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: 1234.5,
    formattedAmount: "CHF\xA01,234.50"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: -1234.5,
    formattedAmount: "CHF\xA0-1,234.50"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: 1234.0,
    formattedAmount: "CHF\xA01,234"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: -1234.0,
    formattedAmount: "CHF\xA0-1,234"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: -0.05,
    formattedAmount: "CHF\xA0-0.05"
  }, {
    locale: 'en-GB',
    currency: 'CHF',
    amount: 0.0,
    formattedAmount: "CHF\xA00"
  }, {
    locale: 'en-GB',
    currency: 'EUR',
    amount: 1234.5,
    formattedAmount: "\u20AC\xA01,234.50"
  }, {
    locale: 'en-GB',
    currency: 'EUR',
    amount: -1234.5,
    formattedAmount: "\u20AC\xA0-1,234.50"
  }, {
    locale: 'en-GB',
    currency: 'GBP',
    amount: 1234.5,
    formattedAmount: "\xA3\xA01,234.50"
  }, {
    locale: 'en-GB',
    currency: 'GBP',
    amount: -1234.5,
    formattedAmount: "\xA3\xA0-1,234.50"
  }];
  var _loop = function _loop() {
    var testCase = _testCases[_i];
    var locale = testCase.locale,
      currency = testCase.currency,
      amount = testCase.amount,
      formattedAmount = testCase.formattedAmount;
    it("correctly formats ".concat(amount, " as ").concat(formattedAmount, " in locale ").concat(locale), function () {
      expect((0, _formatters.formatCurrency)(amount, currency, locale)).toEqual(formattedAmount);
    });
  };
  for (var _i = 0, _testCases = testCases; _i < _testCases.length; _i++) {
    _loop();
  }
  it('correctly formats different displays', function () {
    expect((0, _formatters.formatCurrency)(1000, 'EUR', 'de-CH')).toEqual('€ 1’000');
    expect((0, _formatters.formatCurrency)(1000, 'EUR', 'de-CH', {
      currencyDisplay: 'code'
    })).toEqual('EUR 1’000');
  });
});
describe('formatSimpleCurrency', function () {
  var testCases = [{
    locale: 'de-CH',
    amount: 1234.5,
    formattedAmount: '1’234.50'
  }, {
    locale: 'de-CH',
    amount: -1234.5,
    formattedAmount: '-1’234.50'
  }, {
    locale: 'de-CH',
    amount: 1234.0,
    formattedAmount: '1’234'
  }, {
    locale: 'de-CH',
    amount: -1234.0,
    formattedAmount: '-1’234'
  }, {
    locale: 'de-CH',
    amount: -0.05,
    formattedAmount: '-0.05'
  }, {
    locale: 'de-CH',
    amount: 0.0,
    formattedAmount: '0'
  }, {
    locale: 'de-CH',
    amount: 1000.0,
    formattedAmount: '1’000'
  }, {
    locale: 'de-CH',
    amount: 1234.5,
    formattedAmount: '1’234.50'
  }, {
    locale: 'de-CH',
    amount: -1234.5,
    formattedAmount: '-1’234.50'
  }, {
    locale: 'de-CH',
    amount: 1234.5,
    formattedAmount: '1’234.50'
  }, {
    locale: 'de-CH',
    amount: -1234.5,
    formattedAmount: '-1’234.50'
  }, {
    locale: 'de-CH',
    amount: NaN,
    formattedAmount: ''
  }, {
    locale: 'de-DE',
    amount: 1234.5,
    formattedAmount: '1.234,50'
  }, {
    locale: 'de-DE',
    amount: -1234.5,
    formattedAmount: '-1.234,50'
  }, {
    locale: 'de-DE',
    amount: 1234.0,
    formattedAmount: '1.234'
  }, {
    locale: 'de-DE',
    amount: -1234.0,
    formattedAmount: '-1.234'
  }, {
    locale: 'de-DE',
    amount: -0.05,
    formattedAmount: '-0,05'
  }, {
    locale: 'de-DE',
    amount: 0.0,
    formattedAmount: '0'
  }, {
    locale: 'de-DE',
    amount: 1234.5,
    formattedAmount: '1.234,50'
  }, {
    locale: 'de-DE',
    amount: -1234.5,
    formattedAmount: '-1.234,50'
  }, {
    locale: 'de-DE',
    amount: 1234.5,
    formattedAmount: '1.234,50'
  }, {
    locale: 'de-DE',
    amount: -1234.5,
    formattedAmount: '-1.234,50'
  }, {
    locale: 'en-GB',
    amount: 1234.5,
    formattedAmount: '1,234.50'
  }, {
    locale: 'en-GB',
    amount: -1234.5,
    formattedAmount: '-1,234.50'
  }, {
    locale: 'en-GB',
    amount: 1234.0,
    formattedAmount: '1,234'
  }, {
    locale: 'en-GB',
    amount: -1234.0,
    formattedAmount: '-1,234'
  }, {
    locale: 'en-GB',
    amount: -0.05,
    formattedAmount: '-0.05'
  }, {
    locale: 'en-GB',
    amount: 0.0,
    formattedAmount: '0'
  }, {
    locale: 'en-GB',
    amount: 1234.5,
    formattedAmount: '1,234.50'
  }, {
    locale: 'en-GB',
    amount: -1234.5,
    formattedAmount: '-1,234.50'
  }, {
    locale: 'en-GB',
    amount: 1234.5,
    formattedAmount: '1,234.50'
  }, {
    locale: 'en-GB',
    amount: -1234.5,
    formattedAmount: '-1,234.50'
  }];
  var _loop2 = function _loop2() {
    var testCase = _testCases2[_i2];
    var locale = testCase.locale,
      amount = testCase.amount,
      formattedAmount = testCase.formattedAmount;
    it("correctly formats ".concat(amount, " as ").concat(formattedAmount, " in locale ").concat(locale), function () {
      expect((0, _formatters.formatSimpleCurrency)(amount, locale)).toEqual(formattedAmount);
    });
  };
  for (var _i2 = 0, _testCases2 = testCases; _i2 < _testCases2.length; _i2++) {
    _loop2();
  }
});
describe('getThousandSeparatorSymbol', function () {
  it('should return the german separator', function () {
    expect((0, _formatters.getThousandSeparatorSymbol)('de-DE')).toBe('.');
  });
  it('should return the swiss separator', function () {
    expect((0, _formatters.getThousandSeparatorSymbol)('de-CH')).toBe('’');
  });
  it('should return the UK separator', function () {
    expect((0, _formatters.getThousandSeparatorSymbol)('en-UK')).toBe(',');
  });
});
describe('getDecimalSymbol', function () {
  it('should return the german decimal symbol', function () {
    expect((0, _formatters.getDecimalSymbol)('de-DE')).toBe(',');
  });
  it('should return the swiss decimal symbol', function () {
    expect((0, _formatters.getDecimalSymbol)('de-CH')).toBe('.');
  });
  it('should return the UK decimal symbol', function () {
    expect((0, _formatters.getDecimalSymbol)('en-UK')).toBe('.');
  });
});