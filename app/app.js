'use strict';

// Declare app level module which depends on views, and components
angular.module('ticketSystemApp', [
    'ngRoute',
    'ngCookies',
    'ticketSystemApp.users',
    'ticketSystemApp.users.services',
    'ticketSystemApp.identity',
    'ticketSystemApp.identity.authentication',
    'ticketSystemApp.router',
    'ticketSystemApp.home',
    'ticketSystemApp.logout',
    'ticketSystemApp.common',
    'ticketSystemApp.projects',
    'ticketSystemApp.libConfigs',
])

.config([
        '$routeProvider',
        '$httpProvider',
        function(
            $routeProvider,
            $httpProvider
        ) {
            $routeProvider.otherwise({ redirectTo: '/' });

            $httpProvider.interceptors.push([
                '$q',
                'toastr',
                function(
                    $q,
                    toastr
                ) {
                    return {
                        'response': function(response) {
                            console.log(response);
                            return response;
                        },
                        'responseError': function(rejection) {
                            if (rejection.data && rejection.data['error_description']) {
                                toastr.error(rejection.data['error_description']);
                            } else if (rejection.data && rejection.data.ModelState && rejection.data.ModelState[""]) {
                                var errors = rejection.data.ModelState[""];
                                if (errors.length > 0) {
                                    toastr.error(errors[0]);
                                }
                            }

                            return $q.reject(rejection);
                        }
                    };
                }
            ]);
        }
    ])
    .run([
        '$rootScope',
        '$location',
        'authentication',
        function(
            $rootScope,
            $location,
            authentication) {
            $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
                if (rejection == 'Unauthorized Access') {
                    $location.path('/');
                }
            });

            authentication.refreshCookie();
        }
    ])
    .constant('jQuery', $)
    .constant('toastr', toastr)
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/')
    .constant('AUTHENTICATION_COOKIE_KEY', '!__accessUserToken__!')
    .constant('AUTHENTICATION_COOKIE_USERNAME', '!__currentUser__!');
