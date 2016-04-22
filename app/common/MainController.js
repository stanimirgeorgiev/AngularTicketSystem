'use strict';

angular.module('ticketSystemApp.common', [])
    .controller('MainController', [
        '$scope',
        '$cookies',
        'identity',
        'authentication',
        'notifyingService',
        function(
            $scope,
            $cookies,
            identity,
            authentication,
            notifyingService
        ) {
            identity.getCurrentUser()
                .then(function(user) {
                    $scope.currentUser = user;
                    $scope.isAuthenticated = true;
                });

            notifyingService.subscribeIsAuthorized($scope, function() {
                $scope.isAuthenticated = true;
            });

            notifyingService.subscribeIsUnauthorized($scope, function() {
                $scope.isAuthenticated = false;
            });
        }
    ]);
