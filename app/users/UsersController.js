'use strict';

angular.module('ticketSystemApp.users', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
        });
    }
])

.controller('UsersController', ['$scope', 'userServices',
    function UsersController($scope, userServices) {
        $scope.proba = 'Scopa raboti v users';

        // userServices.currentUser()
        //     .then(function(user) {
        //         $scope.currentUser = user;
        //     });

        userServices.allUsers()
            .then(function(users) {
                $scope.allUsers = users;
            });
    }
]);
