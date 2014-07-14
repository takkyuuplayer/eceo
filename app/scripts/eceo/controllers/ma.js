'use strict';

angular.module('eceoApp')
.controller('MACtrl', function($scope, $http) {
  $http.get('/questions/sample/ma.json').success(function(response) {
    $scope.question = response.data;
  });
});

