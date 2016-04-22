'use strict';

angular.module('ticketSystemApp.logout', [])

.config([
    '$routeProvider',
    function(
        $routeProvider
    ) {
        $routeProvider.when('/logout', {
            templateUrl: 'app/logout/logout.html',
            controller: 'LogoutController'
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
        $scope.isAuthenticated = authentication.isAuthenticated();

        $scope.logout = function() {
            authentication.logoutUser();
            $location.path('/');
        };
    }
]);
