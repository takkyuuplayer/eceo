'use strict';

angular.module('eceoApp')
.controller('MACtrl', function($scope) {
  $scope.question = {
    type: 'MA'
    ,title: 'Choose all countries'
    ,choices: ['America', 'Banana', 'Canada', 'Denmark']
    ,answer: ['America', 'Banana', 'Denmark']
  };
});

