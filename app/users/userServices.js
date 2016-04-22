'use strict';

angular.module('ticketSystemApp.users.services', [])

.factory('userServices', [
    'router',
    function(
        router
    ) {
        function getAllUsers() {
            return router.get('/users');
        }

        function getCurrentUser() {
            return router.get('users/me');
        }
        return {
            getAllUsers: getAllUsers,
            getCurrentUser: getCurrentUser
        };
    }
]);
