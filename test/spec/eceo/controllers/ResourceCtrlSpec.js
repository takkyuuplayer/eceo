'use strict';

describe('Controller: ResourceCtrl', function() {

  // load the controller's module
  beforeEach(module('eceoApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('ResourceCtrl', {
      $scope: scope
    });
  }));

  it('defined', function() {
    expect(ctrl).not.toBeUndefined();
  });
});
