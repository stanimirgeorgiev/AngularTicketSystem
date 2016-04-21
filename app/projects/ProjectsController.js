'use strict';

angular.module('ticketSystemApp.projects', ['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
     $routeProvider.when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController'
     });
}])

.controller('ProjectsController', ['$scope', function($scope){
    $scope.project = 'Porblem li e tozi proekt';
}]);