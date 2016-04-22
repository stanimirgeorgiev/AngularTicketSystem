'use strict';

angular.module('ticketSystemApp.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'userServices',
        'BASE_URL',
        function(
            $http,
            $q,
            userServices,
            BASE_URL
        ) {

            var deferred = $q.defer(),
                currentUser;

            return {
                getCurrentUser: function() {
                    if (currentUser) {
                        return $q.when(currentUser);
                    } else {
                        return deferred.promise;
                    }
                },
                removeUserProfile: function() {
                    currentUser = undefined;
                },
                requestUserProfile: function() {
                    var userProfileDeferred = $q.defer();
                    userServices.getCurrentUser()
                        .then(function(response) {
                            currentUser = response;
                            deferred.resolve(currentUser);
                            userProfileDeferred.resolve(currentUser);
                        });
                    return userProfileDeferred.promise;
                }
            };
        }
    ]);
