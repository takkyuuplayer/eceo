'use strict';

describe('Service: QuestionManager', function() {
  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('eceoApp'));

  var manager, mockBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_QuestionManager_, _$httpBackend_) {
    localStorage.clear();
    manager = _QuestionManager_;
    mockBackend = _$httpBackend_;
  }));

  it('Service is defined', function() {
    expect(manager).toBeDefined();
  });
  it('functions is defined', function() {
    expect(angular.isFunction(manager.getQuestion)).toBe(true);
  });
  var sa =
    {
      "meta":{ "code": 200 }
      ,"data":{
        "path": "/questions/sample/sa.json"
        ,"type": "SA"
        ,"title": "Choose correct word"
        ,"choices": ["apple", "banana", "chocolate"]
        ,"answer": ["apple"]
      }
    }
  it('save local storage for new questions', function() {
    mockBackend.expectGET('/questions/sample/sa.json').respond(sa);
    manager.getQuestion('/questions/sample/sa.json');
    mockBackend.flush();

    var questions = JSON.parse(localStorage.getItem('questions'));
    expect(questions).toBeDefined();
    var question = _.first(questions);
    expect(question).toEqualData({url:'//undefined/questions/sample/sa.json', question:sa.data});
  });
});
