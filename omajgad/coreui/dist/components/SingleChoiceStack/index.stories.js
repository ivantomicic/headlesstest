"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SingleChoiceStackWithIconsHorizontal = exports.SingleChoiceStackWithIcons = exports.SingleChoiceStackWithDetailsMultiple = exports.SingleChoiceStackWithDetails = exports.SingleChoiceStackSeveralInstancesOnTheSamePage = exports.SingleChoiceStackExampleMultipleCustomWrap = exports.SingleChoiceStackExampleMultiple = exports.SingleChoiceStackExample = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _StackElement = require("./StackElement");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["disabled"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CityIcon = function CityIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 16.5v5.25a.75.75 0 0 1-1.5 0V18H9v3.75a.75.75 0 0 1-1.5 0V16.5H12zm4.5-4.71l4.219 3.374a.75.75 0 1 1-.938 1.172L16.5 13.71l-3.281 2.626a.75.75 0 0 1-.938-1.172L16.5 11.79zm-3 10.71v-5.25a.75.75 0 0 1 1.5 0V21h3v-3.75a.75.75 0 0 1 1.5 0v5.25h-6zm-9-21H15v9.75a.75.75 0 0 1-1.5 0V3H6v18.75a.75.75 0 0 1-1.5 0V1.5zM8.25 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3-9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z",
      fill: "currentColor"
    })
  }));
};
CityIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _default = {
  title: 'Components/SingleChoiceStack',
  component: _.SingleChoiceStack
};
exports.default = _default;
var SingleChoiceStackExample = function SingleChoiceStackExample(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      children: "Neubau, bis 10-j\xE4hrig"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      children: "Old one"
    })]
  }));
};
exports.SingleChoiceStackExample = SingleChoiceStackExample;
var SingleChoiceStackExampleMultiple = function SingleChoiceStackExampleMultiple(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      children: "lorem ipsum 1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      children: "lorem ipsum 2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i3",
      children: "lorem ipsum 3"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i4",
      disabled: true,
      children: "lorem ipsum 4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i5",
      children: "lorem ipsum 5"
    })]
  }));
};
exports.SingleChoiceStackExampleMultiple = SingleChoiceStackExampleMultiple;
var SingleChoiceStackExampleMultipleCustomWrap = function SingleChoiceStackExampleMultipleCustomWrap(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      style: {
        minWidth: '350px'
      },
      children: "lorem ipsum 1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      style: {
        minWidth: '350px'
      },
      children: "lorem ipsum 2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i3",
      style: {
        minWidth: '350px'
      },
      children: "lorem ipsum 3"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i4",
      style: {
        minWidth: '350px'
      },
      children: "lorem ipsum 4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i5",
      style: {
        minWidth: '350px'
      },
      children: "lorem ipsum 5"
    })]
  }));
};
exports.SingleChoiceStackExampleMultipleCustomWrap = SingleChoiceStackExampleMultipleCustomWrap;
var SingleChoiceStackWithDetails = function SingleChoiceStackWithDetails(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      details: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Professionelle Abwicklung durch Experten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Vollumf\xE4ngliche Dokumentation inklusive"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Ihre Wahl: Fixpreis oder Bieterverfahren"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Ohne Aufwand f\xFCr Sie"
        })]
      }),
      children: "Neubau, bis 10-j\xE4hrig"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      details: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "F\xFCr jede Immobilie gibt es den richtigen K\xE4ufer und f\xFCr jeden K\xE4ufer die richtige Immobilie. Unser Job besteht darin, diese Verbindung herzustellen. Unkompliziert, effizient und ohne Blabla. Dank unserer einzigartigen Technologie sind unsere Transaktionen effizienter und erfolgreicher als auf herk\xF6mmlichem Weg."
      }),
      children: "Old one"
    })]
  }));
};
exports.SingleChoiceStackWithDetails = SingleChoiceStackWithDetails;
var SingleChoiceStackWithDetailsMultiple = function SingleChoiceStackWithDetailsMultiple(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      details: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Professionelle Abwicklung durch Experten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Vollumf\xE4ngliche Dokumentation inklusive"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Ihre Wahl: Fixpreis oder Bieterverfahren"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: "Ohne Aufwand f\xFCr Sie"
        })]
      }),
      children: "Neubau, bis 10-j\xE4hrig"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      details: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "F\xFCr jede Immobilie gibt es den richtigen K\xE4ufer und f\xFCr jeden K\xE4ufer die richtige Immobilie. Unser Job besteht darin, diese Verbindung herzustellen. Unkompliziert, effizient und ohne Blabla. Dank unserer einzigartigen Technologie sind unsere Transaktionen effizienter und erfolgreicher als auf herk\xF6mmlichem Weg."
      }),
      children: "Old one"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i3",
      details: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "some lorem just for fun"
      }),
      disabled: true,
      children: "third option"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i4",
      details: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          style: {
            height: '150px'
          },
          src: "https://images.unsplash.com/photo-1552954877-e96a0f0728c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2820&q=80"
        })
      }),
      children: "Some very long title here i guess"
    })]
  }));
};
exports.SingleChoiceStackWithDetailsMultiple = SingleChoiceStackWithDetailsMultiple;
var SingleChoiceStackWithIcons = function SingleChoiceStackWithIcons(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h5",
          children: "Some button title"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "some button subtitle"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          textAlign: 'center',
          width: '100%'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h5",
          children: "Some button title"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "some button subtitle that is longer than one line when horizontal mobile."
        })]
      })
    })]
  }));
};
exports.SingleChoiceStackWithIcons = SingleChoiceStackWithIcons;
var SingleChoiceStackSeveralInstancesOnTheSamePage = function SingleChoiceStackSeveralInstancesOnTheSamePage(_ref) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: "1st Group"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
      groupName: 'the-first-radio-group',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
        value: "i1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h5",
            children: "Some button title"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            children: "some button subtitle"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
        value: "i2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            textAlign: 'center',
            width: '100%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h5",
            children: "Some button title"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            children: "some button subtitle that is longer than one line when horizontal mobile."
          })]
        })
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: "2nd Group"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
      groupName: 'the-second-radio-group',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
        value: "i1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h5",
            children: "Some button title"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            children: "some button subtitle"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
        value: "i2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            textAlign: 'center',
            width: '100%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h5",
            children: "Some button title"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            children: "some button subtitle that is longer than one line when horizontal mobile."
          })]
        })
      })]
    }))]
  });
};
exports.SingleChoiceStackSeveralInstancesOnTheSamePage = SingleChoiceStackSeveralInstancesOnTheSamePage;
var SingleChoiceStackWithIconsHorizontal = function SingleChoiceStackWithIconsHorizontal(_ref2) {
  var disabled = _ref2.disabled,
    args = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.SingleChoiceStack, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i1",
      disabled: disabled,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h5",
          children: "Some button title"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "some button subtitle"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
      value: "i2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          textAlign: 'center',
          width: '100%'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h5",
          children: "Some button title"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "body2",
          children: "some button subtitle that is longer than one line when horizontal mobile."
        })]
      })
    })]
  }));
};
exports.SingleChoiceStackWithIconsHorizontal = SingleChoiceStackWithIconsHorizontal;
SingleChoiceStackWithIconsHorizontal.parameters = {
  chromatic: {
    viewports: [320, 1200]
  }
};
SingleChoiceStackWithIconsHorizontal.args = {
  horizontal: true,
  displayButtons: false,
  disabled: true
};