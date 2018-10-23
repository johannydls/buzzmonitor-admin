
angular.module('buzzmonitor')

.factory('adminToolsService', function($resource) {

    return $resource('/api/users/:id');

});