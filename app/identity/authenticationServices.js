'use strict';

angular.module('ticketSystemApp.users.authentication', [])
    .factory('authentication', ['identity', function(BASE_URL, identity) {

        function login(userData) {
            return identity.post('api/Token', userData);
        }

        function logout() {
            return identity.post('api/Token', userData);
        }

        function register() {
            return identity.post('api/Account/Register', userData);
        }

        return {
            loginUser: login,
            loginRegisterUser: register,
            logoutUser: logout,
        };
    }]);
