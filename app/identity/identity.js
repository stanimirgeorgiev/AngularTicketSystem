'use strict';

angular.module('ticketSystemApp.identity', [])

.factory('identity', ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL) {
    $http.defaults.headers.common.Authorization = "Bearer nCX1x4-569CYRpvfJrsesRl3NBWOF-idMWuIY3IYgU8HweFFH0rp2vPRdkERtDQGhPmH3pnDW7Hh_xGeCrnEFtBDNt7PKsr6ADuTSLf8URY3azZ34wM3LWjS1g6Vf5Qt7jjBBkHgGdjjvAC5PRgFu1_LpdUiaoOSNRXdOcencbB6Ti6x-3tHMAy8021PcLEUN4Ozlgxibsn8GZ46IzX-nkzA_5c0STqr4YzUXZx4l2HIG817EpzbGuVkCyyqWUVLv-G0mrN7HyONuSbavqX2wi-1jeHhL073X6yEL9dnEdpyf2imsAaPRoe7mCNsQF3POr-7M0Wnatw_JnyGxHQ32CzU0IO04Ay8jT4aGO9-Qbo4bi1XbcDIqKRRatEwa_bN0REEhQaDWWQXyOlCnOK-J5cbFutjyUm83DlqxHUAsLoY9WkpynUhph3pNjKeo2nMp2JMaE59JUDc7NFOw7rrtrPShPYnGnp6w7M9bOaTmZ8";

    function getRoute(routeParams) {
        var deferred = $q.defer();
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
}]);
