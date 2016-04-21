'use strict';

angular.module('ticketSystemApp.identity.router', [])

.factory('router', ['$http', '$q', 'BASE_URL', '$cookies',
    function($http, $q, BASE_URL, $cookies) {

        function getRoute(routeParams, isSecure) {
            var deferred = $q.defer();
            if (isSecure) {
                $http.defaults.headers.common.Authorization = $cookies.get('!__accessUserToken__!');
            }

            $http.get(BASE_URL + routeParams)
                .then(function(result) {
                    deferred.resolve(result.data);
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        function postRoute(routeParams, data) {
            var deferred = $q.defer();

            $http.post(BASE_URL + routeParams, data)
                .then(function(result) {
                    deferred.resolve(result.data);
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
        return {
            get: getRoute,
            post: postRoute
        };
    }
]);
