var app = angular.module('buzzmonitor', ['ngRoute', 'ngStorage']);

app.config(($routeProvider) => {

    $routeProvider
    .when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'homeCtrl'
    })
    .when('/admin_tools', {
        templateUrl: 'app/components/admin_tools/admin_tools.html',
        controller: 'adminToolsCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});