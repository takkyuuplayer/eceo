'use strict';

angular.module('eceoApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/group/:groupIndex/question/:questionIndex', {
        templateUrl: 'views/question.html'
        ,controller: 'QuestionCtrl'
      })
      .when('/sa', {
        templateUrl: 'views/sa.html'
        ,controller: 'SACtrl'
      })
      .when('/ma', {
        templateUrl: 'views/ma.html'
        ,controller: 'MACtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html'
        ,controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
