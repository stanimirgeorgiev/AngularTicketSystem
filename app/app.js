'use strict';

// Declare app level module which depends on views, and components
angular.module('ticketSystemApp', [
  'ngRoute',
  'ticketSystemApp.users',
  'ticketSystemApp.users.services',
  'ticketSystemApp.users.authentication',
  'ticketSystemApp.home',
  'ticketSystemApp.identity',
  'ticketSystemApp.projects',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])

.constant('BASE_URL','http://softuni-issue-tracker.azurewebsites.net/');
