"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MultiStepExample = void 0;
var _reactRouterDom = require("react-router-dom");
var _inspect = require("@xstate/inspect");
var _Button = require("./../Button");
var _ = require("./");
var _Alert = require("./../Alert");
var _jsxRuntime = require("react/jsx-runtime");
var _default = {
  title: 'Components/MultiStep ⛔️',
  component: _.MultiStep,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    devTools: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
var component1 = function component1(_ref) {
  var goToNext = _ref.goToNext;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Step 1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      onClick: goToNext,
      children: "Weiter"
    })]
  });
};
var component2 = function component2(_ref2) {
  var goToNext = _ref2.goToNext;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Step 2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      onClick: goToNext,
      children: "Weiter"
    })]
  });
};
var steps = [{
  uuid: 'step1',
  component: component1
}, {
  uuid: 'step2',
  component: component2
}, {
  uuid: 'step3',
  component: function component() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        children: "Step 3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "This is a final step. No way to go back"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        children: "Thanks Bye!"
      })]
    });
  }
}];
var MultiStepExample = function MultiStepExample(_ref3) {
  var disabled = _ref3.disabled,
    devTools = _ref3.devTools;
  if (devTools) {
    (0, _inspect.inspect)({
      // url: 'https://statecharts.io/inspect', // (default)
      iframe: false // open in new window
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.BrowserRouter, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Alert.Alert, {
      severity: "error",
      children: ["This component is ", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "deprecated"
      }), ", please use FlowHeader and build the routing logic in the app scope."]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.MultiStep, {
      devTools: devTools,
      disabled: disabled,
      steps: steps,
      labels: {
        secure: 'Sichere Verbindung',
        pagination: function pagination(step, total) {
          return " Schritt ".concat(step, " von ").concat(total);
        }
      }
    })]
  });
};
exports.MultiStepExample = MultiStepExample;
MultiStepExample.args = {
  disabled: false,
  devTools: false
};