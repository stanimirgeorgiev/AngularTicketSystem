angular.module('ticketSystemApp.home', [])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
     });
}])

.controller('HomeController', ['$scope', function HomeController($scope) {
     $scope.home = 'Tuka e home';
}]);