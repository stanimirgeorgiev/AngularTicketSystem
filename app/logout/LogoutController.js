'use strict';

angular.module('ticketSystemApp.logout', [])

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

        $routeProvider.when('/logout', {
            templateUrl: 'app/logout/logout.html',
            controller: 'LogoutController',
            resolve: routeChecks.authenticated
        });
    }
])

.controller('LogoutController', [
    '$scope',
    '$location',
    'authentication',
    function HomeController(
        $scope,
        $location,
        authentication
    ) {
        // $scope.isAuthenticated = authentication.isAuthenticated();

        authentication.logoutUser();

    }
]);
