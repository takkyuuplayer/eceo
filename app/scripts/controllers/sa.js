'use strict';

angular.module('eceoApp')
.controller('SACtrl', function($scope) {
  $scope.question = {
    type: 'SA'
    ,title: 'Choose correct word'
    ,choices: ['apple', 'banana', 'chocolate']
    ,answer: ['apple']
  };
});
