'use strict';

// Declare app level module which depends on views, and components
angular.module('ticketSystemApp', [
  'ngRoute',
  'ticketSystemApp.users',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
