'use strict';

angular.module('ticketSystemApp.projets.services',[])

.factory('projectServices', ['router', function (router) {
    function getByFilter(argument) {
        // return router.
    }

    return {
        getProjectsByFilter: getByFilter
    };
}])