'use strict';

angular.module('ticketSystemApp.projets.services',[])

.factory('projectServices', ['identity', function (identity) {
    function getByFilter(argument) {
        return identity.
    }

    return {
        getProjectsByFilter: getByFilter
    };
}])