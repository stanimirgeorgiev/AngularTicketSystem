'use strict';

angular.module('ticketSystemApp.users', [])

.config([
    '$routeProvider',
    function(
        $routeProvider
    ) {
        $routeProvider.when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
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

        // identity.getCurrentUser()
        //     .then(function(getUser) {
        //         $scope.getUser = getUser;
        //     });
        identity.requestUserProfile()
            .then(function(user) {
                $scope.currentUser = user;

            });


        // userServices.allUsers()
        //     .then(function(users) {
        //         $scope.allUsers = users;
        //     });
    }
]);
