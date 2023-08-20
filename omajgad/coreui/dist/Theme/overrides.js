"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCoreComponents = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _designTokens = require("@crowdhouse/design-tokens");
var MuiColors = _interopRequireWildcard(require("@mui/material/colors"));
var _typography = require("./typography");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CheckboxBlank = function CheckboxBlank(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "checkboxBackground",
      stroke: "#555",
      fill: "#fff",
      d: "M4 .5A3.5 3.5 0 0 0 .5 4v16A3.5 3.5 0 0 0 4 23.5h16a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 20 .5H4z"
    })
  }));
};
CheckboxBlank.defaultProps = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
var CheckboxChecked = function CheckboxChecked(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "checkboxBackground",
      d: "M4 .5A3.5 3.5 0 0 0 .5 4v16A3.5 3.5 0 0 0 4 23.5h16a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 20 .5H4z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "checkboxIcon",
      d: "M18.22 7.72a.75.75 0 0 1 1.06 1.06l-9.026 9.027-4.034-4.035a.75.75 0 0 1 1.06-1.06l2.974 2.973L18.22 7.72z",
      fill: "#FFF"
    })]
  }));
};
CheckboxChecked.defaultProps = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
var CheckboxIndeterminate = function CheckboxIndeterminate(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M0 3.99A3.989 3.989 0 0 1 3.99 0h16.02A3.989 3.989 0 0 1 24 3.99v16.02A3.989 3.989 0 0 1 20.01 24H3.99A3.989 3.989 0 0 1 0 20.01V3.99z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M6.75 11.25h10.5c.415 0 .75.335.75.75s-.335.75-.75.75H6.75A.748.748 0 0 1 6 12c0-.415.335-.75.75-.75z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M4 .5A3.5 3.5 0 0 0 .5 4v16A3.5 3.5 0 0 0 4 23.5h16a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 20 .5H4z"
    })]
  }));
};
CheckboxIndeterminate.defaultProps = {
  className: "ch-checkboxIndeterminate",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
var RadioIcon = function RadioIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "11",
      cy: "11",
      r: "11.5",
      transform: "translate(1 1)",
      fill: "#FFF",
      stroke: "currentColor",
      fillRule: "evenodd"
    })
  }));
};
RadioIcon.defaultProps = {
  className: "ch-radio-icon-blank",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
};
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
var RadioIconChecked = function RadioIconChecked(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "11",
      cy: "11",
      r: "11.5",
      transform: "translate(1 1)",
      fill: "#FFF",
      stroke: "currentColor",
      fillRule: "evenodd"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "circle-checked",
      d: "M18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z",
      fill: "currentColor"
    })]
  }));
};
RadioIconChecked.defaultProps = {
  className: "ch-radio-icon-blank",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
};
var SuccessIcon = function SuccessIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 13.94l4.72-4.72a.75.75 0 0 1 1.06 1.06l-5.78 5.78-2.78-2.78a.75.75 0 1 1 1.06-1.06l1.72 1.72zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
      fill: "currentColor"
    })
  }));
};
SuccessIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.291 13.774l-.088-3.802a1.91 1.91 0 0 0-.002-.091 1.655 1.655 0 0 1-.003-.074c0-.505.313-.807.807-.807.49 0 .797.302.797.807 0 .044 0 .11-.005.165l-.083 3.802c-.016.467-.258.741-.714.741-.456 0-.698-.274-.709-.741zm-.186 2.548c0-.483.395-.862.895-.862s.895.379.895.862c0 .484-.395.863-.895.863s-.895-.38-.895-.863zM22.237 21H1.763L12 1.379 22.237 21zm-2.474-1.5L12 4.621 4.237 19.5h15.526z",
      fill: "currentColor"
    })
  }));
};
WarningIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var InfoIcon = function InfoIcon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.851 15.892c.04-.163.099-.38.178-.648l1.038-3.64c.011-.042.02-.084.025-.126a.459.459 0 0 0 .017-.119c0-.216-.073-.35-.22-.403-.146-.053-.413-.087-.801-.103v-.427c.326-.021.799-.064 1.418-.127a21.298 21.298 0 0 0 1.326-.174l.743-.134-1.343 4.612c-.112.395-.188.67-.228.823-.101.39-.152.643-.152.76 0 .115.028.192.085.229a.373.373 0 0 0 .185.047c.175 0 .392-.14.65-.42.26-.279.487-.572.684-.877l.38.23c-.563.774-.993 1.296-1.291 1.566-.49.443-1.014.664-1.57.664-.316 0-.6-.09-.854-.269-.247-.185-.371-.464-.371-.839 0-.131.034-.34.101-.625zm4.061-9.2c.225.21.338.466.338.767 0 .3-.113.559-.338.775a1.154 1.154 0 0 1-.819.317c-.32 0-.596-.106-.827-.317a1.038 1.038 0 0 1-.338-.775c0-.3.113-.557.338-.768.23-.21.507-.316.827-.316.321 0 .594.105.82.316zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
      fill: "currentColor"
    })
  }));
};
InfoIcon.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var makeCoreComponents = function makeCoreComponents(theme) {
  var _root4, _root6, _$concat, _objectSpread2, _tertiary, _root9, _objectSpread4, _objectSpread5, _root10, _standardError, _standardWarning, _standardSuccess, _standardInfo;
  return _objectSpread(_objectSpread({}, theme.components), {
    MuiIconButton: {
      defaultProps: {
        // backward change: https://mui.com/material-ui/guides/migration-v4/#iconbutton
        size: 'large',
        color: 'primary'
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          '& .strong, & strong': {
            fontWeight: _typography.fontWeightBoldExtra
          }
          /////
        })
      }
    },

    MuiButton: {
      styleOverrides: {
        startIcon: {
          marginLeft: '-0.125em' // needed to align custom SVG icons
        }
      }
    },

    // TODO see https://github.com/mui/material-ui/issues/30825
    MuiContainer: {
      styleOverrides: {
        root: function root(_ref) {
          var _ref2;
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _objectSpread({}, !ownerState.disableGutters && (_ref2 = {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
          }, _defineProperty(_ref2, theme.breakpoints.up('sm'), {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
          }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
          }), _ref2));
        }
      }
    },
    MuiBadge: {
      defaultProps: {
        max: 9,
        color: 'secondary'
      },
      styleOverrides: {
        anchorOriginTopRight: {
          right: theme.spacing(2)
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: theme.spacing(1)
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: _defineProperty({
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4),
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          margin: theme.spacing(4)
        })
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: _defineProperty({
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: _defineProperty({
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: _defineProperty({
          flexFlow: 'column-reverse',
          alignItems: 'stretch',
          paddingBottom: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          flexFlow: 'row',
          alignItems: 'flex-end',
          paddingBottom: theme.spacing(3),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        }),
        spacing: {
          '& > :not(:first-of-type)': _defineProperty({
            marginLeft: 0,
            marginBottom: theme.spacing(1)
          }, theme.breakpoints.up('sm'), {
            marginLeft: theme.spacing(2),
            marginBottom: 0
          })
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'default',
        checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckboxChecked, {}),
        indeterminateIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckboxIndeterminate, {}),
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckboxBlank, {})
      },
      styleOverrides: {
        root: (_root4 = {
          alignSelf: 'start',
          margin: '-9px 7px -9px 0',
          color: _designTokens.colors.base.grey400
        }, _defineProperty(_root4, "&.".concat(_material.checkboxClasses.checked), {
          color: _designTokens.colors.brand.primaryAccessible
        }), _defineProperty(_root4, "&.".concat(_material.checkboxClasses.disabled), {
          color: _designTokens.colors.base.grey300
        }), _defineProperty(_root4, "&.".concat(_material.checkboxClasses.disabled, " .checkboxBackground"), {
          fill: _designTokens.colors.base.grey300,
          stroke: _designTokens.colors.base.grey400
        }), _defineProperty(_root4, "&.".concat(_material.checkboxClasses.disabled, " .checkboxIcon"), {
          fill: _designTokens.colors.base.grey700
        }), _defineProperty(_root4, '&.error', {
          '& svg path': {
            background: _designTokens.colors.brand.primaryLight,
            stroke: _designTokens.colors.functional.error
          },
          '& svg circle': {
            stroke: _designTokens.colors.functional.error
          }
        }), _root4),
        indeterminate: {
          color: _designTokens.colors.brand.primary
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: _defineProperty({}, "&.".concat(_material.inputClasses.underline, ":after"), {
          borderBottomColor: _designTokens.colors.brand.secondary
        })
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      },
      styleOverrides: {
        root: (_root6 = {
          border: "1px solid ".concat(_designTokens.colors.base.grey300),
          overflow: 'hidden',
          borderRadius: 4,
          fontSize: '1rem',
          backgroundColor: _designTokens.colors.base.white,
          transition: theme.transitions.create(['border-color', 'box-shadow'])
        }, _defineProperty(_root6, "&:hover:not(.Mui-disabled)", {
          backgroundColor: _designTokens.colors.base.white
        }), _defineProperty(_root6, "&.".concat(_material.inputClasses.focused), {
          backgroundColor: _designTokens.colors.base.white,
          boxShadow: theme.shadows[1],
          borderColor: _designTokens.colors.brand.primaryAccessible,
          fontWeight: theme.typography.fontWeightRegular
        }), _defineProperty(_root6, "&.".concat(_material.inputClasses.error), {
          borderColor: _designTokens.colors.functional.error
        }), _defineProperty(_root6, "&.".concat(_material.inputClasses.disabled), {
          backgroundColor: _designTokens.colors.base.grey200
        }), _root6),
        input: _defineProperty({
          paddingBottom: 3
        }, "&.Mui-disabled", {
          backgroundColor: _designTokens.colors.base.grey200
        }),
        focused: {}
      }
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingBottom: 0,
          paddingTop: 0
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: _defineProperty({
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        }),
        gutters: _defineProperty({
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        }, theme.breakpoints.up('sm'), {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3)
        }),
        secondaryAction: _defineProperty({
          paddingRight: theme.spacing(5) + 12
        }, theme.breakpoints.up('sm'), {
          paddingRight: theme.spacing(6) + 12
        })
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0
        },
        primary: {
          fontFamily: theme.typography.body1.fontFamily,
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.fontWeightMedium
        },
        secondary: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          color: _designTokens.colors.text.secondary
        })
      }
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: _defineProperty({
          top: theme.spacing(0.5),
          right: theme.spacing(0.5),
          transform: 'none'
        }, theme.breakpoints.up('sm'), {
          top: theme.spacing(1.5),
          right: theme.spacing(1.5)
        })
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: _objectSpread(_objectSpread({}, theme.typography.body2), {}, (_objectSpread2 = {
          color: _designTokens.colors.base.grey700
        }, _defineProperty(_objectSpread2, "&.".concat(_material.inputLabelClasses.filled), _defineProperty({
          transform: 'translate(12px, 12px) scale(1)'
        }, "&.".concat(_material.inputLabelClasses.shrink), (_$concat = {
          fontWeight: theme.typography.fontWeightMedium,
          transform: 'translate(12px, 4px) scale(0.875)',
          color: _designTokens.colors.text.secondary,
          maxWidth: 'calc(113% - 24px)'
        }, _defineProperty(_$concat, "&.".concat(_material.inputLabelClasses.filled), {
          color: _designTokens.colors.text.primary
        }), _defineProperty(_$concat, "&.".concat(_material.inputLabelClasses.focused), {
          color: _designTokens.colors.brand.primaryAccessible
        }), _defineProperty(_$concat, "&.".concat(_material.inputLabelClasses.error), {
          color: _designTokens.colors.functional.error
        }), _$concat))), _defineProperty(_objectSpread2, "&.".concat(_material.inputLabelClasses.focused), {
          fontWeight: theme.typography.fontWeightMedium
        }), _defineProperty(_objectSpread2, "&.".concat(_material.inputLabelClasses.disabled), {
          backgroundColor: _designTokens.colors.base.grey200
        }), _objectSpread2)),
        filled: {
          color: _designTokens.colors.base.grey800
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // TODO deprecated? cant see any prop expecting tertiary as value (global class maybe?)
          '&.tertiary': (_tertiary = {
            backgroundColor: _designTokens.colors.functional.infoLight,
            color: _designTokens.colors.base.black
          }, _defineProperty(_tertiary, "&.".concat(_material.chipClasses.clickable), {
            '&:hover': {
              backgroundColor: MuiColors.teal[100],
              color: _designTokens.colors.base.black
            },
            '&:focus': {
              backgroundColor: MuiColors.teal[100],
              color: _designTokens.colors.base.black
            }
          }), _defineProperty(_tertiary, "& .".concat(_material.chipClasses.deleteIcon), {
            color: _designTokens.colors.brand.secondary,
            '&:hover': {
              color: _designTokens.colors.brand.secondary
            }
          }), _tertiary)
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: (_root9 = {}, _defineProperty(_root9, "& .".concat(_material.autocompleteClasses.inputRoot, "[class*=\"MuiFilledInput-root\"]"), {
          paddingTop: 12,
          paddingBottom: 0
        }), _defineProperty(_root9, "& .".concat(_material.filledInputClasses.root, " > .").concat(_material.gridClasses.root, ":first-of-type"), {
          marginTop: theme.spacing(1)
        }), _root9),
        listbox: _defineProperty({
          backgroundColor: _designTokens.colors.base.white,
          padding: 0
        }, "& .".concat(_material.autocompleteClasses.option), _defineProperty({
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          fontSize: theme.typography.body2.fontSize,
          backgroundColor: theme.palette.common.white,
          color: _designTokens.colors.text.primary,
          '&:hover': {
            backgroundColor: _designTokens.colors.base.blueLagoon100
          },
          '&[aria-selected="true"]': {
            backgroundColor: _designTokens.colors.brand.primary,
            color: _designTokens.colors.text.primaryInverse
          }
        }, "&.".concat(_material.autocompleteClasses.focused), {
          backgroundColor: _designTokens.colors.base.blueLagoon100,
          color: _designTokens.colors.text.primary
        }))
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& a': {
            color: _designTokens.colors.link.default,
            textDecoration: 'underline',
            '&:hover': {
              color: _designTokens.colors.base.black
            }
          }
        },
        gutterBottom: {
          marginBottom: theme.spacing(0.5)
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: _objectSpread({
          color: _designTokens.colors.text.primary
        }, theme.typography.body2),
        label: _objectSpread(_objectSpread({}, theme.typography.body2), {}, _defineProperty({}, "&.".concat(_material.formControlLabelClasses.disabled), {
          color: _designTokens.colors.text.primary
        }))
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.group .MuiFormControlLabel-root': {
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(-1)
          },
          '&.group legend': _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
            fontWeight: theme.typography.fontWeightMedium,
            color: _designTokens.colors.text.primary,
            marginBottom: theme.spacing(2)
          }),
          '&.group .MuiFormHelperText-root': {
            marginTop: theme.spacing(0)
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: _objectSpread(_objectSpread({}, theme.typography.body2), {}, (_objectSpread4 = {
          marginTop: theme.spacing(1),
          color: _designTokens.colors.text.secondary,
          fontWeight: theme.typography.fontWeightRegular
        }, _defineProperty(_objectSpread4, "&.".concat(_material.formHelperTextClasses.disabled), {
          color: _designTokens.colors.text.secondary
        }), _defineProperty(_objectSpread4, "&.".concat(_material.formHelperTextClasses.contained), {
          marginLeft: 0
        }), _defineProperty(_objectSpread4, '&.control-helper-text', {
          paddingLeft: '38px',
          marginTop: '1px'
        }), _objectSpread4))
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            color: _designTokens.colors.base.black
          }
        }
      }
    },
    MuiRadio: {
      defaultProps: {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioIcon, {}),
        color: 'primary',
        checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioIconChecked, {})
      },
      styleOverrides: {
        root: {
          alignSelf: 'start',
          margin: '-9px 7px -9px 0',
          '& input ~ svg circle': {
            color: _designTokens.colors.base.grey800
          },
          '& input:checked ~ svg circle': {
            color: 'currentColor'
          },
          '& input:disabled ~ svg circle': {
            fill: _designTokens.colors.base.grey300,
            color: _designTokens.colors.base.grey400
          },
          '& input:disabled ~ svg .circle-checked': {
            fill: _designTokens.colors.base.grey600
          },
          '&.error': {
            '& svg path': {
              background: _designTokens.colors.brand.primaryLight,
              stroke: _designTokens.colors.functional.error
            },
            '& svg circle': {
              stroke: _designTokens.colors.functional.error
            }
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: _defineProperty({
          minWidth: '288px'
        }, theme.breakpoints.up('sm'), {
          minWidth: '320px'
        }),
        list: _defineProperty({}, "& .".concat(_material.listItemClasses.root, ".").concat(_material.menuItemClasses.selected), {
          backgroundColor: _designTokens.colors.brand.primary,
          color: _designTokens.colors.text.primaryInverse,
          '&:hover': {
            backgroundColor: _designTokens.colors.brand.primaryLight,
            color: _designTokens.colors.text.primary,
            '@media (hover: none)': {
              backgroundColor: _designTokens.colors.brand.primaryLight,
              color: _designTokens.colors.text.primaryInverse
            }
          }
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: _objectSpread(_objectSpread({}, theme.typography.body2), {}, (_objectSpread5 = {
          display: 'flex',
          justifyContent: 'space-between',
          height: '48px',
          '&:hover': {
            backgroundColor: _designTokens.colors.brand.primaryLight,
            '@media (hover: none)': {
              color: _designTokens.colors.text.primary,
              backgroundColor: 'transparent'
            }
          }
        }, _defineProperty(_objectSpread5, "&.".concat(_material.menuItemClasses.focusVisible), {
          backgroundColor: _designTokens.colors.brand.primaryLight
        }), _defineProperty(_objectSpread5, '&.destructive', _defineProperty({
          color: _designTokens.colors.functional.error,
          '&:hover': {
            backgroundColor: _designTokens.colors.functional.errorLight
          }
        }, "&.".concat(_material.menuItemClasses.focusVisible), {
          backgroundColor: _designTokens.colors.functional.errorLight
        })), _objectSpread5))
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        size: 'small',
        fullWidth: true
      }
    },
    MuiTooltip: {
      defaultProps: {
        TransitionComponent: _material.Zoom,
        disableFocusListener: true,
        leaveDelay: 100,
        enterTouchDelay: 50,
        arrow: true,
        // 10 sec to be sure what people can read the tooltip content
        leaveTouchDelay: 10000,
        placement: 'top'
      },
      styleOverrides: {
        tooltip: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
          backgroundColor: _designTokens.colors.base.black,
          borderRadius: theme.spacing(1),
          boxShadow: '0 0 6px rgba(0, 0, 0, 0.35)',
          color: _designTokens.colors.base.white,
          padding: theme.spacing(1, 1),
          fontWeight: theme.typography.fontWeightMedium
        }),
        touch: _objectSpread({}, theme.typography.body2),
        arrow: {
          '&': {
            color: _designTokens.colors.base.black
          },
          '&::before': {
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.35)'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevronDownIcon
      },
      styleOverrides: {
        icon: {
          // our icons come with a inner padding, which we need to offset in this specific case
          marginTop: '-2px'
        },
        select: {
          '&:focus': {
            backgroundColor: 'inherit'
          }
        }
      }
    },
    MuiNativeSelect: {
      defaultProps: {
        IconComponent: ChevronDownIcon
      },
      styleOverrides: {
        icon: {
          // our icons come with a inner padding, which we need to offset in this specific case
          marginTop: '-2px'
        },
        select: {
          '&:focus': {
            backgroundColor: 'inherit'
          }
        }
      }
    },
    MuiSnackbar: {
      defaultProps: {
        autoHideDuration: 10000
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        // success is default
        root: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          backgroundColor: _designTokens.colors.functional.success,
          color: _designTokens.colors.base.white,
          '&.error': {
            backgroundColor: _designTokens.colors.functional.error
          },
          '&.info': {
            backgroundColor: _designTokens.colors.base.black
          }
        })
      }
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          '& svg path': {
            fill: _designTokens.colors.base.grey300
          }
        },
        iconFilled: {
          '& svg path': {
            fill: _designTokens.colors.base.yellow
          }
        }
      }
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          fontWeight: theme.typography.fontWeightMedium,
          paddingTop: theme.spacing(0.3)
        })
      }
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          success: /*#__PURE__*/(0, _jsxRuntime.jsx)(SuccessIcon, {}),
          info: /*#__PURE__*/(0, _jsxRuntime.jsx)(InfoIcon, {}),
          warning: /*#__PURE__*/(0, _jsxRuntime.jsx)(WarningIcon, {}),
          error: /*#__PURE__*/(0, _jsxRuntime.jsx)(WarningIcon, {})
        }
      },
      styleOverrides: {
        root: (_root10 = {
          borderRadius: theme.spacing(1),
          padding: theme.spacing(1.5, 2),
          paddingRight: theme.spacing(2.5)
        }, _defineProperty(_root10, "& .".concat(_material.alertClasses.message), _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          paddingLeft: theme.spacing(0.5)
        })), _defineProperty(_root10, "& .".concat(_material.alertClasses.action), {
          display: 'block'
        }), _defineProperty(_root10, '& a', {
          textDecoration: 'underline',
          color: 'inherit'
        }), _defineProperty(_root10, '& a:hover', {
          color: _designTokens.colors.base.black
        }), _root10),
        standardError: (_standardError = {
          color: _designTokens.colors.functional.errorDark,
          backgroundColor: _designTokens.colors.functional.errorLight
        }, _defineProperty(_standardError, "& .".concat(_material.alertClasses.icon, " svg"), {
          width: theme.spacing(3),
          height: theme.spacing(3),
          '& path': {
            fill: _designTokens.colors.functional.errorDark
          }
        }), _defineProperty(_standardError, "& .".concat(_material.alertClasses.icon, " svg"), {
          '& path': {
            fill: _designTokens.colors.functional.errorDark
          }
        }), _standardError),
        standardWarning: (_standardWarning = {
          color: _designTokens.colors.functional.warningDark,
          backgroundColor: _designTokens.colors.functional.warningLight
        }, _defineProperty(_standardWarning, "& .".concat(_material.alertClasses.icon, " svg"), {
          width: theme.spacing(3),
          height: theme.spacing(3),
          '& path': {
            fill: _designTokens.colors.functional.warningDark
          }
        }), _defineProperty(_standardWarning, "& .".concat(_material.alertClasses.action, " svg"), {
          '& path': {
            fill: _designTokens.colors.functional.warningDark
          }
        }), _standardWarning),
        standardSuccess: (_standardSuccess = {
          color: _designTokens.colors.functional.successDark,
          backgroundColor: _designTokens.colors.functional.successLight
        }, _defineProperty(_standardSuccess, "& .".concat(_material.alertClasses.icon, " svg"), {
          width: theme.spacing(3),
          height: theme.spacing(3),
          '& path': {
            fill: _designTokens.colors.functional.successDark
          }
        }), _defineProperty(_standardSuccess, "& .".concat(_material.alertClasses.action, " svg"), {
          '& path': {
            fill: _designTokens.colors.functional.successDark
          }
        }), _standardSuccess),
        standardInfo: (_standardInfo = {
          color: _designTokens.colors.functional.infoDark,
          backgroundColor: _designTokens.colors.functional.infoLight
        }, _defineProperty(_standardInfo, "& .".concat(_material.alertClasses.icon, " svg"), {
          width: theme.spacing(3),
          height: theme.spacing(3),
          '& path': {
            fill: _designTokens.colors.functional.infoDark
          }
        }), _defineProperty(_standardInfo, "& .".concat(_material.alertClasses.action, " svg"), {
          '& path': {
            fill: _designTokens.colors.functional.infoDark
          }
        }), _defineProperty(_standardInfo, '&.muted', {
          backgroundColor: _designTokens.colors.base.grey200,
          border: "1px solid ".concat(_designTokens.colors.base.grey300),
          color: _designTokens.colors.text.primary
        }), _defineProperty(_standardInfo, "&.muted .".concat(_material.alertClasses.icon, " svg path"), {
          fill: _designTokens.colors.text.primary
        }), _standardInfo)
      }
    }
  });
};
exports.makeCoreComponents = makeCoreComponents;