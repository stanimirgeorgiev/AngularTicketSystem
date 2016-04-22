'use strict';

angular.module('ticketSystemApp.projects.services', [])

.factory('projectService', [
    'router',
    function(
        router
    ) {
        function getByFilter(pageSize, pageNumber, filter, value) {
            //Projects/?pageSize={pageSize}&pageNumber={pageNumber}&{filter}={value}
            pageSize = pageSize || 10;
            pageNumber = pageSize || 10;
            return router.get('/projects/?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&' + filter + '=' + value);
        }

        function getById(id) {
            return router.get('/projects/' + id);
        }

        function postNew(projectData) {
            return router.post('/projects', projectData);
        }

        function editById(id, projectData) {
            return router.put('/projects/' + id, projectData);
        }

        return {
            getProjectsByFilter: getByFilter,
            getProjectsById: getById,
            postNewProject: postNew,
            editProjectsById: editById,
        };
    }
]);
