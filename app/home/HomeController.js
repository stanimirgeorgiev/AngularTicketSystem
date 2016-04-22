'use strict';

angular.module('ticketSystemApp.home', [])

.config([
    '$routeProvider',
    function(
        $routeProvider
    ) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'
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
        }

        $scope.login = function(user) {
            authentication.loginUser(user)
                .then(function(result) {
                    $location.path('/users');
                });
        };

        $scope.register = function(user) {
            authentication.registerUser(user)
                .then(function(result) {
                    authentication.loginUser(user)
                        .then(function(result) {
                            $location.path('/users');
                        });
                });
        };

        // $scope.logout = function() {
        //     authentication.logoutUser();
        //     identity.removeUserProfile();
        //     $location.path('/');
        // };
    }
]);
