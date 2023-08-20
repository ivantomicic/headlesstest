"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormikExample = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _lodash = require("lodash");
var _addonActions = require("@storybook/addon-actions");
var _formik = require("formik");
var _reactRouterDom = require("react-router-dom");
var yup = _interopRequireWildcard(require("yup"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _ = require(".");
var _Button = require("./../Button");
var _FormikAutocompleteField = require("./FormikAutocompleteField");
var _FormikPrompt = require("./FormikPrompt");
var _FormikRadioField = require("./FormikRadioField");
var _SingleChoiceStack = require("./../SingleChoiceStack");
var _StackElement = require("./../SingleChoiceStack/StackElement");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["initialValues"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  title: 'Components/Formik',
  component: _formik.Formik,
  argTypes: {
    validateOnBlur: {
      control: {
        type: 'boolean'
      }
    },
    validateOnChange: {
      control: {
        type: 'boolean'
      }
    },
    validateOnMount: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports.default = _default;
yup.setLocale({
  mixed: {
    notType: 'Generic Error'
  }
});
var requiredString = function requiredString() {
  return yup.string().required('Required');
};
var requiredNumber = function requiredNumber() {
  return yup.number().typeError('Required');
};
var validationSchema = yup.object().shape({
  gender: requiredString(),
  name: requiredString(),
  surname: requiredString(),
  age: requiredString(),
  country: requiredString(),
  sumCHF: requiredNumber().min(0),
  sumEUR: requiredNumber().min(0),
  phone: yup.string().required().test('phone', function (str) {
    var number = (0, _libphonenumberJs.default)(String(str), str !== null && str !== void 0 && str.startsWith('0') ? 'CH' : undefined);
    return !!number && number.isValid();
  }),
  accepted: yup.bool().oneOf([true]).required(),
  pets: yup.array(yup.object().shape({
    name: requiredString()
  })),
  address: requiredString(),
  area: requiredNumber().min(0),
  numberOrProperties: requiredNumber().min(1, 'Min 1').max(10, 'Max 10'),
  propertyType: requiredString()
});
var SingleInputAutocompleteResults = [{
  uuid: '1',
  label: 'first',
  linkLabel: 'asdad'
}, {
  uuid: '2',
  label: 'second',
  linkLabel: 'asdad'
}];
var SingleInputAutocompleteDetailResults = [{
  uuid: '1',
  label: 'a',
  linkLabel: 'asdad'
}];
var FormikExample = function FormikExample(_ref) {
  var _ref$initialValues = _ref.initialValues,
    initialValues = _ref$initialValues === void 0 ? {
      address: '',
      name: '',
      surname: '',
      phone: '0787388282',
      gender: '',
      sumCHF: NaN,
      sumEUR: NaN,
      amount: NaN,
      country: '',
      numberOrProperties: NaN,
      accepted: false,
      area: NaN,
      propertyType: ''
    } : _ref$initialValues,
    args = _objectWithoutProperties(_ref, _excluded);
  var lookupFn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var _params$searchText;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _addonActions.action)('onLookup')(params);
              return _context.abrupt("return", params.searchText && ((_params$searchText = params.searchText) === null || _params$searchText === void 0 ? void 0 : _params$searchText.length) > 3 ? SingleInputAutocompleteResults : []);
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function lookupFn(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var lookupDetailsFn = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", SingleInputAutocompleteDetailResults);
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function lookupDetailsFn() {
      return _ref3.apply(this, arguments);
    };
  }();

  // Defined a custom component factory
  // const CustomSingleInputSingleInputAutocomplete = (props: SingleInputAutocompleteProps<SingleInputAutocompleteServiceReply, SingleInputAutocompleteServiceDetailReply>) => SingleInputAutocomplete<SingleInputAutocompleteServiceReply, SingleInputAutocompleteServiceDetailReply>(props)

  var handleItemNotFound = function handleItemNotFound(value) {
    (0, _addonActions.action)('onItemNotFound')(value);
  };
  var handleItemReset = function handleItemReset() {
    (0, _addonActions.action)('onItemReset')('');
  };
  var handleTrackUserItemManualClick = function handleTrackUserItemManualClick(value, options, trackingLabel) {
    (0, _addonActions.action)('onTrackUserItemManualClick')("".concat(value, ", ").concat(options, ", ").concat(trackingLabel));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, _objectSpread(_objectSpread({
      initialValues: initialValues,
      onSubmit: (0, _addonActions.action)('onSubmit'),
      validationSchema: validationSchema
    }, args), {}, {
      children: function children(_ref4) {
        var values = _ref4.values,
          errors = _ref4.errors,
          touched = _ref4.touched,
          setFieldValue = _ref4.setFieldValue;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_formik.Form, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormikPrompt.FormikPrompt, {
            message: "Changes that you made may not be saved."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Container, {
            maxWidth: "md",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                  variant: "h6",
                  children: "Form Data"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                  variant: "caption",
                  children: JSON.stringify(values)
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                  variant: "h6",
                  children: "Form Body"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  role: "group",
                  "aria-labelledby": "salutation",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
                    container: true,
                    spacing: 1,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                      item: true,
                      xs: 12,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormLabel, {
                        component: "legend",
                        id: "salutation",
                        className: "group",
                        children: "Salutation"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                      item: true,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                        component: _FormikRadioField.FormikRadioField,
                        label: "mr",
                        name: "gender",
                        value: "mr"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                      item: true,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                        component: _FormikRadioField.FormikRadioField,
                        label: "mrs",
                        name: "gender",
                        value: "mrs"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikTextField,
                  label: "name",
                  name: "name"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikTextField,
                  label: "surname",
                  name: "surname"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikTextField,
                  label: "age",
                  name: "age",
                  type: "number"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikTextField,
                  label: "firstPet",
                  name: "pets[0].name",
                  inputProps: {
                    'data-testid': 'firstPet'
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikPhoneNumberField,
                  name: "phone",
                  phoneNumberProps: {
                    phoneNumberTextFieldProps: {
                      placeholder: 'Telefonummer'
                    }
                  },
                  inputProps: {
                    'data-testid': 'phoneNumber'
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _FormikAutocompleteField.FormikAutocompleteField,
                  label: "Select Address",
                  name: "address",
                  helperText: "just a helper text",
                  autocompleteProps: {
                    lookupFn: lookupFn,
                    lookupDetailsFn: lookupDetailsFn,
                    onItemNotFound: handleItemNotFound,
                    onItemReset: handleItemReset,
                    onTrackUserItemManualClick: handleTrackUserItemManualClick,
                    labelNotFound: 'New Item'
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SingleChoiceStack.SingleChoiceStack, {
                  horizontal: true,
                  error: ((0, _lodash.get)(touched, 'propertyType') || '') && (0, _lodash.get)(errors, 'propertyType'),
                  onChange: function onChange(_ref5) {
                    var selectedValue = _ref5.selectedValue;
                    setFieldValue('propertyType', selectedValue, true);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
                    value: "i1",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      style: {
                        textAlign: 'center'
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                        variant: "body2",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                          children: "i1"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                        variant: "body2",
                        children: "some button subtitle"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StackElement.StackElement, {
                    value: "i2",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      style: {
                        textAlign: 'center'
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CityIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                        variant: "body2",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                          children: "i2"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                        variant: "body2",
                        children: "some button subtitle"
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikCurrencyField,
                  name: "sumCHFch",
                  label: "currency",
                  helperText: "define number with de-CH locale",
                  units: "CHF",
                  decimalsAllowed: true,
                  locale: "de-CH"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikCurrencyField,
                  name: "sumCHFde",
                  label: "currency",
                  helperText: "define number with de-DE locale",
                  units: "CHF",
                  locale: "de-DE"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikCurrencyField,
                  name: "sumEURch",
                  label: "currency",
                  helperText: "define number with de-CH locale",
                  units: "\u20AC",
                  locale: "de-CH"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikCurrencyField,
                  name: "sumEURde",
                  label: "currency",
                  helperText: "define number wit de-DE",
                  units: "\u20AC",
                  decimalsAllowed: true,
                  locale: "de-DE"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikNumberField,
                  name: "area",
                  label: "area",
                  helperText: "define number",
                  units: "m\xB2 "
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikNumberField,
                  name: "numberOrProperties",
                  label: "Number of properties",
                  helperText: "Please type a number here",
                  noThousandSeparators: true
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  component: _.FormikCheckboxField,
                  label: "Accept all conditions",
                  helperText: "Be aware that this information can be important",
                  name: "accepted"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
                  type: "submit",
                  "data-testid": "button",
                  children: "Submit"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                  href: "/",
                  children: "Navigate"
                })
              })]
            })]
          })]
        });
      }
    }))
  });
};
exports.FormikExample = FormikExample;
FormikExample.args = {
  validateOnBlur: true,
  validateOnChange: false,
  validateOnMount: false
};