"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testIdPhoneCode = exports.testIdOption = exports.testId = exports.SelectCountry = void 0;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _mui = require("tss-react/mui");
var _countries = require("./../constants/countries");
var _CountryIcon = require("./CountryIcon");
var _CountryOption = require("./CountryOption");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ChevronDownIcon = function ChevronDownIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 13.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L12 16.06 5.47 9.53a.75.75 0 0 1 1.06-1.06L12 13.94z",
      fill: "currentColor"
    })
  }));
};
ChevronDownIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var testId = 'select-country';
exports.testId = testId;
var testIdPhoneCode = 'phone-code';
exports.testIdPhoneCode = testIdPhoneCode;
var testIdOption = 'country-option';
exports.testIdOption = testIdOption;
var useStyles = (0, _mui.makeStyles)()(function (theme) {
  return {
    countrySelector: {
      position: 'relative'
    },
    countryIcon: {
      display: 'inline-block',
      zIndex: 999,
      left: theme.spacing(1),
      top: '14px',
      position: 'absolute',
      cursor: 'pointer'
    }
  };
});
var useStylesAutocomplete = (0, _mui.makeStyles)()(function (theme, _ref) {
  var width = _ref.width;
  return {
    root: {
      width: '120px',
      '&&&& input': {
        paddingLeft: '27px',
        paddingTop: '0',
        paddingBottom: '11px'
      }
    },
    popper: {
      width: "".concat(width, " !important"),
      marginLeft: '12px'
    },
    option: {
      fontSize: 15,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      '& > span': {
        marginRight: 10,
        fontSize: 18
      }
    },
    popupIndicator: {
      color: theme.colors.base.black
    }
  };
});
var SelectCountry = function SelectCountry(_ref2) {
  var _ref2$containerWidth = _ref2.containerWidth,
    containerWidth = _ref2$containerWidth === void 0 ? '300px' : _ref2$containerWidth,
    onChange = _ref2.onChange,
    selectedCountry = _ref2.selectedCountry,
    _ref2$ariaLabelCode = _ref2.ariaLabelCode,
    ariaLabelCode = _ref2$ariaLabelCode === void 0 ? 'phone country code' : _ref2$ariaLabelCode,
    textFieldProps = _ref2.textFieldProps,
    containerProps = _ref2.containerProps,
    error = _ref2.error,
    disabled = _ref2.disabled,
    _ref2$countriesMap = _ref2.countriesMap,
    countriesMap = _ref2$countriesMap === void 0 ? _countries.countriesMapDE : _ref2$countriesMap;
  var _useStyles = useStyles(),
    classes = _useStyles.classes;
  var countryDetails = countriesMap.get(selectedCountry);
  if (!countryDetails) {
    throw new Error("There is no country defined by key: ".concat(selectedCountry));
  }
  var _useStylesAutocomplet = useStylesAutocomplete({
      width: containerWidth
    }),
    stylesAutocomplete = _useStylesAutocomplet.classes;
  var handleChange = (0, _react.useCallback)(function (e, value) {
    onChange(value.isoCode);
  }, [onChange]);
  var filterOptions = (0, _react.useCallback)(function (options, _ref3) {
    var inputValue = _ref3.inputValue;
    return options.filter(function (_ref4) {
      var title = _ref4.title,
        phoneCode = _ref4.phoneCode;
      var titleNormalized = title.toLowerCase();
      return titleNormalized.startsWith(inputValue.toLowerCase()) || phoneCode.startsWith(inputValue) || "+".concat(phoneCode).startsWith(inputValue);
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    className: classes.countrySelector
  }, containerProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.countryIcon,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryIcon.CountryIcon, {
        code: countryDetails.isoCode
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
      id: "phone-number-select",
      options: Array.from(countriesMap.values()),
      autoHighlight: true,
      disableClearable: true,
      classes: _objectSpread({}, stylesAutocomplete),
      onChange: handleChange,
      value: countryDetails,
      disabled: disabled,
      popupIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronDownIcon, {}),
      getOptionLabel: function getOptionLabel(option) {
        return "+".concat(option.phoneCode);
      },
      renderOption: function renderOption(props, option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, _objectSpread(_objectSpread({}, props), {}, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryOption.CountryOption, {
            country: option
          })
        }));
      },
      filterOptions: filterOptions,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, _objectSpread(_objectSpread(_objectSpread({}, params), textFieldProps), {}, {
          error: error,
          inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
            inputMode: 'tel',
            autoComplete: 'new-password',
            // disable autocomplete and autofill
            'aria-label': ariaLabelCode,
            'data-testid': testIdPhoneCode
          }, textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.inputProps)
        }));
      }
    })]
  }));
};
exports.SelectCountry = SelectCountry;