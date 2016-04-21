'use strict';

angular.module('ticketSystemApp.users', [
    // 'ngRoute',
    // 'ticketSystemApp.users.authentication',
    // 'ticketSystemApp.users.services'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
    });
}])

.controller('UsersController', [
    '$scope',
    'authentication', 'userServices',
    function UsersController($scope, authentication, userServices) {

        // userServices.allUsers()
        //     .then(function(users) {
        //         $scope.allUsers = users;
        //     });
        // debugger;
        $scope.proba = 'Scopa raboti v users';

        userServices.currentUser()
            .then(function(user) {
                $scope.currentUser = user;
            });
    }
]);
