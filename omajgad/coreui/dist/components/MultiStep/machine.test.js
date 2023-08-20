"use strict";

var _types = require("./types");
var _mocks = require("./mocks");
describe('MultiStep Machine', function () {
  describe('Transitions', function () {
    it('Should go to state DISABLED after disabling it', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({}).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.DISABLE
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
    });
    it('Should go to state ACTIVE after enabling it', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({}).transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.ENABLE
      });
      expect(actualState.matches(_types.STATE.ACTIVE)).toBeTruthy();
    });
    it('Should go to state UPDATING_ROUTE after transition GOTO_NEXT', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({
        currentStep: _mocks.MockSteps[0]
      }).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.GOTO_NEXT
      });
      expect(actualState.matches(_types.STATE.UPDATING_ROUTE)).toBeTruthy();
    });
    it('Should go to state UPDATING_ROUTE after transition GOTO_PREVIOUS', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({
        currentStep: _mocks.MockSteps[1]
      }).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.GOTO_PREVIOUS
      });
      expect(actualState.matches(_types.STATE.UPDATING_ROUTE)).toBeTruthy();
    });
    it('Should not go to state UPDATING_ROUTE after transition GOTO_PREVIOUS if step is the first one', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({
        currentStep: _mocks.MockSteps[0]
      }).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.GOTO_PREVIOUS
      });
      expect(actualState.matches(_types.STATE.ACTIVE)).toBeTruthy();
    });
    it('Should go to state UPDATING_ROUTE after transition GOTO_STEP width valid step id', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({
        currentStep: _mocks.MockSteps[0]
      }).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.GOTO_STEP,
        stepId: 'step2'
      });
      expect(actualState.matches(_types.STATE.UPDATING_ROUTE)).toBeTruthy();
    });
    it('Should not go to state UPDATING_ROUTE after transition GOTO_STEP width invalid step id', function () {
      var actualState = (0, _mocks.multiStepMachineSuccessWithContext)({
        currentStep: _mocks.MockSteps[0]
      }).transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.GOTO_STEP,
        stepId: 'step3'
      });
      expect(actualState.matches(_types.STATE.ACTIVE)).toBeTruthy();
    });
  });
});