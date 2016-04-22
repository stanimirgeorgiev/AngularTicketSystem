'use strict';

angular.module('ticketSystemApp.identity.authentication', [])

.factory('authentication', [
    '$cookies',
    '$http',
    '$q',
    '$location',
    'router',
    'identity',
    'BASE_URL',
    'AUTHENTICATION_COOKIE_KEY',
    'AUTHENTICATION_COOKIE_USERNAME',
    'notifyingService',
    function(
        $cookies,
        $http,
        $q,
        $location,
        router,
        identity,
        BASE_URL,
        AUTHENTICATION_COOKIE_KEY,
        AUTHENTICATION_COOKIE_USERNAME,
        notifyingService
    ) {
        function isAuthenticated() {
            return !!$cookies.get(AUTHENTICATION_COOKIE_KEY);
        }

        function setAuthenticationCookies(token, currentUser) {
            $cookies.put(AUTHENTICATION_COOKIE_KEY, 'Bearer ' + token);
            $cookies.put(AUTHENTICATION_COOKIE_USERNAME, currentUser);
        }

        function login(userData) {
            var username = userData.Username || userData.Email,
                newData = "grant_type=password&username=" + username + "&password=" + userData.Password,
                response = router.post('api/Token', newData);

            $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

            response.then(function(result) {
                setAuthenticationCookies(result.access_token, result.userName);
                notifyingService.notifyIsAuthorized();
                identity.requestUserProfile();
                toastr.success('Successful login')
            });
            return response;
        }

        function logout() {
            $cookies.remove(AUTHENTICATION_COOKIE_KEY);
            $cookies.remove(AUTHENTICATION_COOKIE_USERNAME);
            $http.defaults.headers.common.Authorization = undefined;
            identity.removeUserProfile();
            notifyingService.notifyIsUnauthorized();
            $location.path('/');
            toastr.success('successful logout')
        }

        function register(userData) {
            return router.post('api/Account/Register', userData);
        }

        function refreshCookie() {
            if (isAuthenticated()) {
                $http.defaults.headers.common.Authorization = $cookies.get(AUTHENTICATION_COOKIE_KEY);
                notifyingService.notifyIsAuthorized();
                identity.requestUserProfile();
            }
        }

        return {
            loginUser: login,
            registerUser: register,
            logoutUser: logout,
            isAuthenticated: isAuthenticated,
            refreshCookie: refreshCookie
        };
    }
]);
