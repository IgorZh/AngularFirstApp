angular.module('taskServices', ['ngResource']).
    factory('Task', function($resource) {
        return $resource('api/Task/:id', {}
            //{
            //query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
    //    }
        );
    });