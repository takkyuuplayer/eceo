'use strict';

angular.module('eceoApp')
  .factory('QuestionManager', ['$http', '$q', function($http, $q) {
    var questions = localStorage.getItem('questions') || '[]';
    questions = JSON.parse(questions);

    return {
      getQuestion: function(path, host) {
        return $http.get(path).success(function(response) {
           var question = {
             url: '//' + host + path
             ,question: response.data
           };
          questions.push(question);
          localStorage.setItem('questions', JSON.stringify(questions));
        });
      }
    };
  }])
;
