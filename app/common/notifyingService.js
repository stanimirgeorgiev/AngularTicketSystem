'use strict';

angular.module('ticketSystemApp.common')
    .factory('notifyingService', [
        '$rootScope',
        function(
            $rootScope
        ) {
            return {
                //Subscribers
                subscribeIsUnauthorized: function(scope, callback) {
                    var handler = $rootScope.$on('userLogout', callback);
                    scope.$on('$destroy', handler);
                },
                subscribeIsAuthorized: function(scope, callback) {
                    var handler = $rootScope.$on('userLogin', callback);
                    scope.$on('$destroy', handler);
                },


                //Notifiers
                notifyIsUnauthorized: function() {
                    $rootScope.$emit('userLogout');
                },
                notifyIsAuthorized: function() {
                    $rootScope.$emit('userLogin');
                }
            };
        }
    ]);
