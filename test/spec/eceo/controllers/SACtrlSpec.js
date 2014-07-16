'use strict';

describe('Controller: SACtrl', function() {

  // load the controller's module
  beforeEach(module('eceoApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('SACtrl', {
      $scope: scope
    });
  }));

  it('initialize values', function() {
    expect(scope.isCorrect).toBe(null);
    expect(scope.answer).toBe(null);
    expect(angular.isFunction(scope.score)).toBe(true);
  });

  describe('score', function() {
    var question = {
            "path": "/questions/sample/sa.json"
            ,"type": "SA"
            ,"title": "Choose correct word"
            ,"choices": ["apple", "banana", "chocolate"]
            ,"answer": ["apple"]
      };
    it('correct answer', function() {
      scope.question = question;
      scope.answer = "apple";
      scope.score();
      expect(scope.isCorrect).toBe(true);
    });
    it('score', function() {
      scope.question = question;
      scope.answer = "banana";
      scope.score();
      expect(scope.isCorrect).toBe(false);
    });
  });
});
