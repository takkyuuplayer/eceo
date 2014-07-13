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
      .otherwise({
        redirectTo: '/'
      });
  }]);
