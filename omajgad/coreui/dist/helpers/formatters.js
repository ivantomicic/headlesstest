"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThousandSeparatorSymbol = exports.getDecimalSymbol = exports.formatTime = exports.formatSimpleCurrency = exports.formatCurrency = void 0;
var _luxon = require("luxon");
var formatTime = function formatTime(props) {
  var currentLocale = (props === null || props === void 0 ? void 0 : props.locale) || 'de';
  var startEndTime = _luxon.DateTime.fromJSDate(new Date(props.time));
  var dateFormatEN = startEndTime.month === 5 ? 'dd. MMM yyyy, H:mm' : 'dd. MMM. yyyy, H:mm';
  var dateFormatDE = 'dd. MMM yyyy, H:mm';
  var dateFormat = currentLocale === 'de' ? dateFormatDE : dateFormatEN;
  var timeFormat = currentLocale === 'de' ? 'HH:mm' : 'H:mm';
  var result = startEndTime.toFormat(dateFormat, {
    locale: currentLocale
  });
  if (props !== null && props !== void 0 && props.endTime) {
    result += " \u2013 ".concat(_luxon.DateTime.fromJSDate(new Date(props.endTime)).toFormat(timeFormat, {
      locale: currentLocale
    }));
  }
  return result;
};

/**
 * Get the thousand separator symbol by the current locale
 *
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns the thousand separator symbol or undefined (example: ".")
 */
exports.formatTime = formatTime;
var getThousandSeparatorSymbol = function getThousandSeparatorSymbol(locale) {
  var _numberParts$find;
  var number = 100000;
  var numberParts = new Intl.NumberFormat(locale).formatToParts(number);
  return (_numberParts$find = numberParts.find(function (part) {
    return part.type === 'group';
  })) === null || _numberParts$find === void 0 ? void 0 : _numberParts$find.value;
};

/**
 * Get the decimal symbol by the current locale
 *
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns the decimal symbol or undefined (example: ".")
 */
exports.getThousandSeparatorSymbol = getThousandSeparatorSymbol;
var getDecimalSymbol = function getDecimalSymbol(locale) {
  var _numberParts$find2;
  var number = 1.1;
  var numberParts = new Intl.NumberFormat(locale).formatToParts(number);
  return (_numberParts$find2 = numberParts.find(function (part) {
    return part.type === 'decimal';
  })) === null || _numberParts$find2 === void 0 ? void 0 : _numberParts$find2.value;
};

/**
 * Formats a currency amount following the Crowdhouse rules.
 *
 * @param amount The amount to format
 * @param currency The currency ("CHF", "EUR", etc.)
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @param options object with currencyDisplay to display symbol or code as currency (EUR or €)
 * @returns The formatted currency (example: "CHF 1’234.50")
 */
exports.getDecimalSymbol = getDecimalSymbol;
var formatCurrency = function formatCurrency(amount, currency, locale, options) {
  if (isNaN(amount)) {
    return '';
  }
  var currencyDisplay = (options === null || options === void 0 ? void 0 : options.currencyDisplay) || 'symbol';
  var nf = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: currencyDisplay
  });
  var parts = nf.formatToParts(amount).filter(function (part, i, parts) {
    return (
      // remove the minus sign part, we will take care of it later
      part.type !== 'minusSign' &&
      // remove the space part, we will take care of it later
      !(part.type === 'literal' && part.value === "\xA0") &&
      // remove the ".00" parts
      !(part.type === 'fraction' && part.value === '00') && !(part.type === 'decimal' && parts[i + 1].type === 'fraction' && parts[i + 1].value === '00')
    );
  }).map(function (part, i, parts) {
    if (part.type === 'currency') {
      if (currencyDisplay === 'symbol' && part.value === 'EUR') {
        // when the currencyDisplay is symbol, the native formatter will still place 'EUR' instead of '€'
        // in some locales while others locales will get '€'
        // so here we replace EUR by € regardless of the locale
        part.value = '€';
      }
      if (i === 0) {
        // the currency symbol is at the beginning, add a space after the symbol
        part.value = "".concat(part.value, "\xA0");
      } else if (i === parts.length - 1) {
        // the currency symbol is in the end, add a space before the symbol
        part.value = "\xA0".concat(part.value);
      }
    }
    return part;
  });
  if (amount < 0) {
    // always put the minus sign before the amount;
    var firstIntegerPosition = parts.findIndex(function (part) {
      return part.type === 'integer';
    });
    parts.splice(firstIntegerPosition, 0, {
      type: 'minusSign',
      value: '-'
    });
  }
  return parts.map(function (part) {
    return part.value;
  }).join('');
};

/**
 * Formats a currency amount following the Crowdhouse rules, but without the currency symbol
 *
 * @param amount The amount to format
 * @param locale The locale ("de-CH", "de-DE", "en-GB", etc.)
 * @returns The formatted currency (example: "1’234.50")
 */
exports.formatCurrency = formatCurrency;
var formatSimpleCurrency = function formatSimpleCurrency(amount, locale) {
  return isNaN(amount) ? '' : amount.toLocaleString(locale, {
    minimumFractionDigits: 2
  }).replace(/\D00$/, '');
};
exports.formatSimpleCurrency = formatSimpleCurrency;