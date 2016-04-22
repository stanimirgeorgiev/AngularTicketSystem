'use strict';

angular.module('ticketSystemApp.users', [])

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

        $routeProvider.when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
            resolve: routeChecks.authenticated
        });
    }
])

.controller('UsersController', [
    '$scope',
    'userServices',
    'identity',
    function UsersController(
        $scope,
        userServices,
        identity
    ) {
        $scope.proba = 'Scopa raboti v users';
        identity.requestUserProfile()
            .then(function(user) {
                $scope.currentUser = user;

            });
    }
]);
