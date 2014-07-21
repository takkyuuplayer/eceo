'use strict';

angular.module('eceoApp')
.controller('QuestionCtrl', function($scope, $routeParams) {
  $scope.group = $scope.resource.groups[$routeParams.groupIndex];
  var questionPath  = $scope.group.group.questions[$routeParams.questionIndex];
  var query = {"host": $scope.group.host, "path": questionPath};
  $scope.question = _.findWhere($scope.resource.questions, query);
});
