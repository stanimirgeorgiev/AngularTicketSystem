'use strict';

angular.module('ticketSystemApp.common', [])
    .controller('MainController', [
        '$scope',
        '$cookies',
        'identity',
        'authentication',
        'AUTHENTICATION_COOKIE_KEY',
        function(
            $scope,
            $cookies,
            identity,
            authentication,
            AUTHENTICATION_COOKIE_KEY
        ) {
            $scope.isAuthenticated = authentication.isAuthenticated();
            console.log('V maina scopa e : ' + $scope.isAuthenticated);

            identity.getCurrentUser()
                .then(function(user) {
                    console.log('V main controlera sym');
                    console.log(authentication.isAuthenticated());
                    console.log(user);
                    $scope.currentUser = user;
                    $scope.isAuthenticated = authentication.isAuthenticated();

                });
        }
    ]);
