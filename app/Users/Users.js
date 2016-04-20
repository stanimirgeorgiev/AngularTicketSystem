'use strict';

angular.module('myApp.users', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
    });
}])

.factory('repos', ['$http', '$q', function($http, $q) {

    function getUsers(username) {
        var deferred = $q.defer();

        $http.get('http://softuni-issue-tracker.azurewebsites.net/' + username + '')
            .then(function(result) {
                deferred.resolve(result.data);
            }, function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    }

    return {
        getUsers: getUsers
    };
}])

.controller('UsersController', [
    '$scope', 'users',
    function UsersController($scope, users) {

        users.getUsers('me')
            .then(function(users) {
                $scope.repos = users;
            });
    }
]);
