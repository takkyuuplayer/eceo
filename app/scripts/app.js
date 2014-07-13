'use strict';

angular.module('eceoApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sa', {
        templateUrl: 'views/sa.html'
        ,controller: 'SACtrl'
      })
      .when('/ma', {
        templateUrl: 'views/ma.html'
        ,controller: 'MACtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
