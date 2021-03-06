'use strict';

angular.module('ticketSystemApp.home', [])

.config([
    '$routeProvider',
    function(
        $routeProvider
    ) {
        // var routeChecks = {
        //     authenticated: [
        //         '$q',
        //         'authentication',
        //         function(
        //             $q,
        //             authentication
        //         ) {
        //             if (authentication.isAuthenticated()) {
        //                 return $q.when(true);
        //             }
        //             return $q.reject('Unauthorized Access');
        //         }
        //     ]
        // };

        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            // resolve: routeChecks.authenticated
        });
    }
])

.controller('HomeController', [
    '$scope',
    '$location',
    'authentication',
    'identity',
    function HomeController(
        $scope,
        $location,
        authentication,
        identity
    ) {
        if (authentication.isAuthenticated()) {
            $scope.isAuthenticated = true;
        } else {
            $scope.isAuthenticated = false;
        }

        $scope.login = function(user) {
            authentication.loginUser(user)
                .then(function(result) {
                    $location.path('/');
                    $scope.isAuthenticated = true;
                });
        };

        $scope.register = function(user) {
            authentication.registerUser(user)
                .then(function(result) {
                    authentication.loginUser(user)
                        .then(function(result) {
                            $location.path('/');
                        });
                });
        };
    }
]);
