'use strict';

angular.module('ticketSystemApp.welcome', [])

.config([
    '$routeProvider',
    function(
        $routeProvider
    ) {
        $routeProvider.when('/', {
            templateUrl: 'app/welcome/Welcome.html',
            controller: 'WelcomeController',
        });
    }
])

.controller('WelcomeController', [
    '$scope',
    '$location',
    'authentication',
    'identity',
    function WelcomeController(
        $scope,
        $location,
        authentication,
        identity
    ) {
        if (authentication.isAuthenticated()) {
            $scope.isAuthenticated = true;
        }

        $scope.login = function(user) {
            authentication.loginUser(user)
                .then(function(result) {
                    $location.path('/');
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
