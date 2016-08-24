var kubikApp = angular.module('kubikApp', ['ngRoute', 'ui.router'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{|').endSymbol('|}');
});

kubikApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});

kubikApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('promo', {

            url: "/",
            templateUrl: "view/index.html"
        })
        .state('task', {
            url: '/task',
            templateUrl: "view/task.html"
        });
        $urlRouterProvider.otherwise('/');
    }
]);

kubikApp.controller('signupCtrl', ['$http', '$location', function ($http, $location) {
    this.activate = function () {
        if ($location.search().hasOwnProperty('code')) {
            this.code = true;
            var code = $location.search()['code'];
            $http.get('http://api.kubikvest.xyz/auth?code=' + code).then(function (res) {
                console.log(222);
                window.location = res.data.links.task;
            });

        }
    }
}]);

kubikApp.controller('taskCtrl', ['$http', '$location', function ($http, $location) {
    this.token = function () {
        if ($location.search().hasOwnProperty('t')) {
            var token = $location.search()['t'];
            $http.get('http://api.kubikvest.xyz/token?t=' + token);
        }
    }
}]);
