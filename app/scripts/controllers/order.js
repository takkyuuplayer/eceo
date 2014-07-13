'use strict';

angular.module('eceoApp')
.controller('OrderCtrl', function($scope, $http) {
  $http.get('/questions/sample/order.json').success(function(response) {
    $scope.question = response.data;
    $scope.randomized = _.shuffle($scope.question.choices);
  });
});


