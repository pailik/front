var kubikApp = angular.module('kubikApp', ['ngRoute'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{|').endSymbol('|}');
});

kubikApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});

kubikApp.controller('signupCtrl', ['$http', '$location', function ($http, $location) {
    this.activate = function () {
        if ($location.search().hasOwnProperty('code')) {
            this.code = true;
            var token = $location.search()['code'];
            $http.get('http://api.kubikvest.xyz/token/' + token);
        }
    }
}]);
