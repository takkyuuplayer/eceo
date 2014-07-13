'use strict';

angular.module('eceoApp')
.controller('SACtrl', function($scope, $http) {
  $http.get('/questions/sample/sa.json').success(function(response) {
    $scope.question = response.data;
  });
});
