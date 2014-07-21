'use strict';

angular.module('eceoApp')
.controller('ResourceCtrl', function($scope, $http, $location, $rootScope) {
  $rootScope.resource = {
    groups: []
    ,questions: []
    ,answerProgresses: []
  };

  $http.get('/questions/sample.json').success(function(response) {
    var group = {
      "host": $location.host()
      ,"href": $location.host() + "/questions/sample.json"
      ,"group": response.data
    };
    $rootScope.resource.groups.push(group);

    _.each(group.group.questions, function(path) {
      $http.get(path).success(function(response) {
        var question = {
          "host": $location.host()
          ,"path": path
          ,"question": response.data
        };
        $rootScope.resource.questions.push(question);
      });
    });
  });
});

