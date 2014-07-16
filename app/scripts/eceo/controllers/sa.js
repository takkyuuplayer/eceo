'use strict';

angular.module('eceoApp')
.controller('SACtrl', function($scope, $http) {
  $http.get('/questions/sample/sa.json').success(function(response) {
    $scope.question = response.data;
  });
  $scope.answer = null;
  $scope.isCorrect = null;

  $scope.score = function() {
    $scope.isCorrect = ($scope.answer === $scope.question.answer[0]);
  };
});
