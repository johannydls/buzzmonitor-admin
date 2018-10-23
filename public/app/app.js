var app = angular.module('buzzmonitor', ['ngRoute', 'ngStorage', 'ngResource', 'isteven-omni-bar']);

app.config(($routeProvider) => {

    $routeProvider
    .when('/admin_tools', {
        templateUrl: 'app/components/admin_tools/admin_tools.html',
        controller: 'adminToolsCtrl'
    })
    .otherwise({
        redirectTo: '/admin_tools'
    });
});