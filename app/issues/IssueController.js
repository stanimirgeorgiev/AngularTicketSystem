'use strict';

angular.module('ticketSystemApp.issues', [])
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

            $routeProvider.when('/projects/:id/issue', {
                templateUrl: 'app/issues/issues.html',
                controller: 'IssueController',
                resolve: routeChecks.authenticated
            });
        }
    ])

.controller('IssueController', [
    '$scope',
    'projectService',
    function(
        $scope,
        projectService
    ) {
        projectService.getIssuesByFilter(10, 10)
            .then(function(result) {
                $scope.issues = result;
            });
    }
]);
