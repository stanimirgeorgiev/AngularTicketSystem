'use strict';

angular.module('ticketSystemApp.projects', [])
    .config([
        '$routeProvider',
        function(
            $routeProvider
        ) {
            var routeChecks = {
                authenticated: [
                    '$q',
                    'authentication',
                    function(
                        $q,
                        authentication
                    ) {
                        if (authentication.isAuthenticated()) {
                            return $q.when(true);
                        }
                        return $q.reject('Unauthorized Access');
                    }
                ]
            };

            $routeProvider.when('/projects', {
                templateUrl: 'app/projects/projects.html',
                controller: 'ProjectsController',
                resolve: routeChecks.authenticated
            });
        }
    ])

.controller('ProjectsController', [
    '$scope',
    'projectService',
    function(
        $scope,
        projectService
        ) {
        projectService.getProjectsByFilter(10, 10)
        .then(function(result) {
            $scope.projects = result;
        });
        $scope.proba = 'Porblem li e tozi proekt';
    }
]);
