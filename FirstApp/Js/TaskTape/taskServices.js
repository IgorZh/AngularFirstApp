angular.module('taskServices', ['ngResource']).
    factory('Task', function($resource) {
        return $resource('api/Task/:id', { },
            {
                update: { method: 'PUT' }
                //query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
            }
        );
    });