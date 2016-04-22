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

.controller('ProjectsController', ['$scope',
    function($scope) {
        $scope.project = 'Porblem li e tozi proekt';
    }
]);
