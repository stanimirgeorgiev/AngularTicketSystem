'use strict';

angular.module('ticketSystemApp.users.authentication', [])
    .factory('authentication', ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL) {

        function login(userData) {
            var deferred = $q.defer();
            $http.post(BASE_URL + 'api/Token', userData)
                .then(function(result) {
                    console.log(result.data);
                    deferred.resolve(result.data);
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
        return {
            loginUser: login
        };
    }]);
