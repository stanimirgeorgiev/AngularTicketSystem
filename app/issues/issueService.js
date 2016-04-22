'use strict';

angular.module('ticketSystemApp.issue.services', [])

.factory('issueService', [
    'router',
    function(
        router
    ) {
        function getByFilter(pageSize, pageNumber, filter, value) {
            //Issues/?pageSize={pageSize}&pageNumber={pageNumber}&{filter}={value}

            pageSize = pageSize || 10;
            pageNumber = pageSize || 10;
            return router.get('/issues/?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&' + filter + '=' + value);
        }

        function getAllByProjectId(id) {
            return router.get('/projects/' + id + '/issues');
        }
        function getById(id) {
            return router.get('/issues/' + id);
        }

        function postNew(projectData) {
            return router.post('/issues', projectData);
        }

        function editById(id, projectData) {
            return router.put('/issues/' + id, projectData);
        }

        return {
            getIssuesByFilter: getByFilter,
            getIssuesAllByProjectId: getAllByProjectId,
            getIssuesById: getById,
            postNewIssue: postNew,
            editIssuesById: editById,
        };
    }
]);
