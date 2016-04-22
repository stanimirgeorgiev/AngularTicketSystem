'use strict';

angular.module('ticketSystemApp.router', [])

.factory('router', [
    '$http',
    '$q',
    '$cookies',
    'AUTHENTICATION_COOKIE_KEY',
    'BASE_URL',
    function(
        $http,
        $q,
        $cookies,
        AUTHENTICATION_COOKIE_KEY,
        BASE_URL
    ) {

        function persistAthenticationHeader() {
            if (!!$cookies.get(AUTHENTICATION_COOKIE_KEY)) {
                $http.defaults.headers.common.Authorization = $cookies.get(AUTHENTICATION_COOKIE_KEY);
            } else {
                $http.defaults.headers.common.Authorization = undefined;
            }
        }

        function getRoute(routeParams) {
            var deferred = $q.defer();
            persistAthenticationHeader();
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
            persistAthenticationHeader();
            $http.post(BASE_URL + routeParams, data)
                .then(function(result) {
                    deferred.resolve(result.data);
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        function putRoute(routeParams, data) {
            var deferred = $q.defer();
            persistAthenticationHeader();
            $http.put(BASE_URL + routeParams, data)
                .then(function(result) {
                    deferred.resolve(result.data);
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
        return {
            get: getRoute,
            post: postRoute,
            put: putRoute,
        };
    }
]);
