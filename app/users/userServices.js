'use strict';

angular.module('ticketSystemApp.users.services', [])
    .factory('userServices', ['identity', function(identity) {

        function getAllUsers() {
            return identity.get('/users');
        }

        function getCurrentUser() {
            return identity.get('users/me');
        }

        return {
            allUsers: getAllUsers,
            currentUser: getCurrentUser
        };
    }]);
