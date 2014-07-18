'use strict';

angular.module('eceoApp')
.controller('ResourceCtrl', function($scope, $http, $location) {
  $scope.resource = {
    groups: []
    ,questions: []
    ,answerProgresses: []
  };

  $http.get('/questions/sample.json').success(function(response) {
    var group = {
      "href": $location.host() + '/questions/sample.json'
      ,"group": response.data
    };
    $scope.resource.groups.push(group);

    _.each(group.group.questions, function(path) {
      $http.get(path).success(function(response) {
        var question = {
          "href": $location.host() + path
          ,"question": response.data
        };
        $scope.resource.questions.push(question);
      });
    });
  });
});

