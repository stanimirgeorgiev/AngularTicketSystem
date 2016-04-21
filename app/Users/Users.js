'use strict';

angular.module('ticketSystemApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
    });
}])

.factory('requestAllUsers', ['$http', '$q', function($http, $q) {

    function getAllUsers() {
        var deferred = $q.defer();
        $http.defaults.headers.common.Authorization = "Bearer nCX1x4-569CYRpvfJrsesRl3NBWOF-idMWuIY3IYgU8HweFFH0rp2vPRdkERtDQGhPmH3pnDW7Hh_xGeCrnEFtBDNt7PKsr6ADuTSLf8URY3azZ34wM3LWjS1g6Vf5Qt7jjBBkHgGdjjvAC5PRgFu1_LpdUiaoOSNRXdOcencbB6Ti6x-3tHMAy8021PcLEUN4Ozlgxibsn8GZ46IzX-nkzA_5c0STqr4YzUXZx4l2HIG817EpzbGuVkCyyqWUVLv-G0mrN7HyONuSbavqX2wi-1jeHhL073X6yEL9dnEdpyf2imsAaPRoe7mCNsQF3POr-7M0Wnatw_JnyGxHQ32CzU0IO04Ay8jT4aGO9-Qbo4bi1XbcDIqKRRatEwa_bN0REEhQaDWWQXyOlCnOK-J5cbFutjyUm83DlqxHUAsLoY9WkpynUhph3pNjKeo2nMp2JMaE59JUDc7NFOw7rrtrPShPYnGnp6w7M9bOaTmZ8";
        $http.get('http://softuni-issue-tracker.azurewebsites.net/users')
            .then(function(result) {
                deferred.resolve(result.data);
                console.log('i az bqh tuk');
                console.log(result.data);
            }, function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    }

    return {
        allUsers: getAllUsers
    };
}])

.controller('UsersController', [
    '$scope', 'requestAllUsers',
    function UsersController($scope, requestAllUsers) {

        requestAllUsers.allUsers()
            .then(function(users) {
                $scope.allUsers = users;
            });
    }
]);
