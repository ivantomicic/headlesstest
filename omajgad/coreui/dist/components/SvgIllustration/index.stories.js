"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SvgIllustrationExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
var _designTokens = require("@crowdhouse/design-tokens");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Mail = function Mail(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        className: "background",
        fill: "#FFEAE3",
        fillRule: "nonzero",
        d: "M84.64 64l.028-9.643L97 64.5v34.64H37V64l24.5 12.749L84.64 64zm-15-32.217L82.222 44H72.64a3 3 0 0 1-3-3v-9.217z"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        className: "foreground",
        fill: "#F76B1C",
        d: "M69.107 73.588l16.5 12.618a1 1 0 1 1-1.214 1.588l-17-13a1.001 1.001 0 0 1-.184-.182l-5.566 3.003-5.79-3.094a.998.998 0 0 1-.246.273l-17 13a1 1 0 1 1-1.214-1.588L53.98 73.52 33 62.31V91.64h57V62.316L69.107 73.588zM39.64 63.589l21.998 11.755 22.002-11.87V46h-11a5 5 0 0 1-5-5V30h-25a3 3 0 0 0-3 3v30.589zm-2-6.428l-3.872 3.29 3.872 2.07v-5.36zm48-.187v5.422l3.664-1.977-3.664-3.445zm-54.27 2.89l6.27-5.327V33a5 5 0 0 1 5-5h25.57a1 1 0 0 1 .214.023.98.98 0 0 1 .923.27l14.426 14.426 1.564 1.518a1 1 0 0 1 .303.685.992.992 0 0 1 0 .134v9.176l.045.04 5.983 5.624c.011.01.023.02.034.032l.298.28V93.64H31V60.66v-.482l.335-.285a.993.993 0 0 1 .035-.03zm22.27.636a1 1 0 1 1 0-2h22a1 1 0 0 1 0 2h-22zm0-8a1 1 0 1 1 0-2h22a1 1 0 0 1 0 2h-22zm-7 8a1 1 0 1 1 0-2h1.5a1 1 0 0 1 0 2h-1.5zm0-8a1 1 0 1 1 0-2h1.5a1 1 0 0 1 0 2h-1.5zm23-20.717V41a3 3 0 0 0 3 3h9.582L69.64 31.783z"
      })]
    })
  }));
};
Mail.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "128",
  height: "128",
  viewBox: "0 0 128 128"
};
var mapping = {
  primary: _designTokens.colors.brand.primary,
  primaryLight: _designTokens.colors.brand.primaryLight,
  secondary: _designTokens.colors.brand.secondary,
  secondaryLight: _designTokens.colors.brand.secondaryLight,
  black: _designTokens.colors.base.black,
  white: _designTokens.colors.base.white,
  red: _designTokens.colors.base.red,
  red100: _designTokens.colors.base.red100,
  green: _designTokens.colors.base.green,
  green100: _designTokens.colors.base.green100,
  ecstasy: _designTokens.colors.base.ecstasy,
  ecstasy100: _designTokens.colors.base.ecstasy100,
  'black-functional-warning': _designTokens.colors.functional.warningDark
};
var labels = {
  primary: 'primary',
  primaryLight: 'primaryLight',
  secondary: 'secondary',
  secondaryLight: 'secondaryLight',
  black: 'black',
  red: 'red',
  red100: 'red100',
  green: 'green',
  green100: 'green100',
  ecstasy: 'ecstasy',
  ecstasy100: 'ecstasy100',
  'black-functional-warning': 'black-functional-warning'
};
var fontSizeLabels = {
  small: 'small',
  default: 'default',
  large: 'large'
};
var _default = {
  title: 'Components/SvgIllustration',
  component: _index.SvgIllustration,
  argTypes: {
    foregroundColor: {
      options: Object.keys(labels),
      mapping: mapping,
      control: {
        type: 'select',
        labels: labels
      }
    },
    backgroundColor: {
      options: Object.keys(labels),
      mapping: mapping,
      control: {
        type: 'select',
        labels: labels
      }
    },
    fontSize: {
      options: Object.keys(fontSizeLabels),
      control: {
        type: 'radio',
        labels: fontSizeLabels,
        sort: 'requiredFirst'
      }
    },
    component: {
      control: {
        disable: true
      }
    },
    titleAccess: {
      control: {
        disable: true
      }
    },
    shapeRendering: {
      control: {
        disable: true
      }
    },
    viewBox: {
      control: {
        disable: true
      }
    },
    htmlColor: {
      control: {
        disable: true
      }
    },
    children: {
      control: {
        disable: true
      }
    },
    color: {
      control: {
        disable: true
      }
    },
    'data-testid': {
      control: false
    }
  }
};
exports.default = _default;
var SvgIllustrationExample = function SvgIllustrationExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.SvgIllustration, {
    foregroundColor: args.foregroundColor,
    backgroundColor: args.backgroundColor,
    component: Mail,
    fontSize: args.fontSize
  });
};
exports.SvgIllustrationExample = SvgIllustrationExample;