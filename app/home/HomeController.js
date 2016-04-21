'use strict';

angular.module('ticketSystemApp.home', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
    });
}])

.controller('HomeController', ['$scope', '$location', 'authentication',
    function HomeController($scope, $location, authentication) {

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

        $scope.logout = function() {
            authentication.logoutUser();
            $location.path('');
        };
    }
]);
