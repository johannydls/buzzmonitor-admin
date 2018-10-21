var app = angular.module('buzzmonitor');

app.directive('toolbarElement', () => {
    return {
        restrict: "EAC",
        templateUrl: '/app/partials/toolbar.html'
    }
});