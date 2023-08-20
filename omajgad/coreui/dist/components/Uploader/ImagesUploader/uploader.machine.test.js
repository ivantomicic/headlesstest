"use strict";

var _xstate = require("xstate");
var _mocks = require("./mocks");
var _types = require("./types");
/* eslint-disable jest/no-conditional-expect */

describe('Uploader Machine', function () {
  describe('Transitions', function () {
    it('Should go to state DISABLED after disabling it', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.DISABLE
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
    });
    it('Should go to state ENABLED after re-enabling it', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.ENABLE
      });
      expect(actualState.matches(_types.STATE.ACTIVE)).toBeTruthy();
    });
    it('Should go to state UPLOADING when calling upload', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.UPLOAD,
        files: []
      });
      expect(actualState.matches(_types.STATE.UPLOADING)).toBeTruthy();
    });
    it('Should go to state DELETING when calling delete', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.DELETE,
        uuid: '2'
      });
      expect(actualState.matches(_types.STATE.DELETING)).toBeTruthy();
    });
    it('Should go to state REORDERING when calling reordering', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.SORT
      });
      expect(actualState.matches(_types.STATE.SORTING)).toBeTruthy();
    });
    it('Should go to state ACTIVE when calling set_sortable', function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.ACTIVE, {
        type: _types.TRANSITION.SET_SORTABLE,
        draggedUuid: '1',
        droppedUuid: '2'
      });
      expect(actualState.matches(_types.STATE.ACTIVE)).toBeTruthy();
    });
    it("Should'nt change state after any action when DISABLED", function () {
      var actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.UPLOAD,
        files: []
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
      actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.FETCH
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
      actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.SORT
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
      actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.SET_SORTABLE,
        draggedUuid: '1',
        droppedUuid: '2'
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
      actualState = _mocks.fetchMachineSuccess.transition(_types.STATE.DISABLED, {
        type: _types.TRANSITION.DELETE,
        uuid: '2'
      });
      expect(actualState.matches(_types.STATE.DISABLED)).toBeTruthy();
    });
  });
  describe('Services', function () {
    it('Initial state should be ACTIVE', function () {
      var serviceOk = (0, _xstate.interpret)(_mocks.fetchMachineSuccess).start();
      expect(serviceOk.initialState.matches(_types.STATE.FETCHING)).toBeTruthy();
    });
    it('Should have images on state after succesful fetch', function (done) {
      var serviceOk = (0, _xstate.interpret)(_mocks.fetchMachineSuccess);
      serviceOk.onTransition(function (state) {
        if (state.context.images.length) {
          expect(state.context.images).toHaveLength(4);
          done();
        }
      });
      serviceOk.start();
      serviceOk.send({
        type: _types.TRANSITION.FETCH
      });
    });
    it('Should call transform function after a succesful fetch', function (done) {
      var transformFn = jest.fn().mockImplementation(function (images) {
        return images;
      });
      var serviceOk = (0, _xstate.interpret)((0, _mocks.fetchCustomMachineSuccess)(transformFn));
      serviceOk.onTransition(function (state) {
        if (state.context.images.length) {
          expect(transformFn).toHaveBeenCalled();
          done();
        }
      });
      serviceOk.start();
      serviceOk.send({
        type: _types.TRANSITION.FETCH
      });
    });
    it('Should fail with error after failing fetch', function (done) {
      var serviceFail = (0, _xstate.interpret)(_mocks.fetchMachineError);
      serviceFail.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Fetching error');
          done();
        }
      });
      serviceFail.start();
      serviceFail.send({
        type: _types.TRANSITION.FETCH
      });
    });
    it('Should fail when uploading wrong file types', function (done) {
      var service = (0, _xstate.interpret)(_mocks.uploadMachineError);
      service.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Filetype error');
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.UPLOAD,
        files: _mocks.invalidFiles
      });
    });
    it('Should set files when uploading valid files', function (done) {
      var service = (0, _xstate.interpret)(_mocks.uploadMachineSuccess);
      service.onTransition(function (state) {
        if (state.context.images.length) {
          expect(state.context.images).toHaveLength(4);
          done();
        }
      });
      service.start();
      service.send({
        type: _types.TRANSITION.UPLOAD,
        files: _mocks.validFiles
      });
    });
    it('Should fail with error after failing upload', function (done) {
      var service = (0, _xstate.interpret)(_mocks.uploadMachineError);
      service.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Error uploading');
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.UPLOAD,
        files: _mocks.validFiles
      });
    });
    it('Should sort images', function (done) {
      var service = (0, _xstate.interpret)(_mocks.sortMachineSuccess);
      service.onTransition(function (state) {
        if (state.changed) {
          expect(state.context.images).toEqual(_mocks.mockedReorderedImages.images);
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.SET_SORTABLE,
        draggedUuid: '4',
        droppedUuid: '1'
      });
    });
    it('Should fail with error after failing sorting', function (done) {
      var service = (0, _xstate.interpret)(_mocks.sortMachineError);
      service.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Error ordering');
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.SORT
      });
    });
    it('Should delete file after successful delete', function (done) {
      var service = (0, _xstate.interpret)(_mocks.deleteMachineSuccess);
      service.onTransition(function (state) {
        if (state.value === _types.STATE.ACTIVE && state.context.deleteUuid) {
          expect(service.state.context.images).toHaveLength(1);
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.DELETE,
        uuid: '1'
      });
    });
    it('Should fail with error after failing deleting', function (done) {
      var service = (0, _xstate.interpret)(_mocks.deleteMachineError);
      service.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Error deleting');
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.DELETE,
        uuid: '1'
      });
    });
    it('Should call transforationFunction after fetching data', function (done) {
      var service = (0, _xstate.interpret)(_mocks.deleteMachineError);
      service.onTransition(function (state) {
        if (state.context.error !== '') {
          expect(state.context.error).toBe('Error deleting');
          done();
        }
      });
      service.start(_types.STATE.ACTIVE);
      service.send({
        type: _types.TRANSITION.DELETE,
        uuid: '1'
      });
    });
  });
});