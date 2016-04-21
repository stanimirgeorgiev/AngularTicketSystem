'use strict';

angular.module('ticketSystemApp.identity.authentication', [])

.factory('authentication', ['router', '$cookies', 'BASE_URL', '$http', '$q',
    function(router, $cookies, BASE_URL, $http, $q) {
        function setCookie(token, currentUser) {
            $cookies.put('!__accessUserToken__!', 'Bearer ' + token);
            $cookies.put('!__currentUser__!', currentUser);
        }

        function login(userData) {
            console.log(userData);
            var username = userData.Username || userData.Email;
            var newData = "grant_type=password&username=" + username + "&password=" + userData.Password;
            console.log(newData);
            $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
            var response = router.post('api/Token', newData);
            response.then(function(result) {
                setCookie(result.access_token, result.userName);
            });
            return response;
        }

        function logout() {
            console.log('Logout happened');

            // function() {
            // var deffered = $q.defer();
            console.log($cookies.remove('!__accessUserToken__!'));
                $cookies.remove('!__accessUserToken__!');
                console.log($cookies.remove('!__currentUser__!'));
                $cookies.remove('!__currentUser__!');
            // }
            // .then(function(result) {

            // }
                // deffered.resolve())
        }

        function register(userData) {
            return router.post('api/Account/Register', userData);
        }

        return {
            loginUser: login,
            registerUser: register,
            logoutUser: logout,
        };
    }
]);
