// App defination.

var app = angular.module('portfolio', [
    // support for routing.
    'ngRoute',
    // defined in resume.js file.
    'resumeCtrs',
    'appCtrs'
]);

// defining routing
app.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        // Resume Page.
        when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'ResumeBuildCtrl'
        }).
        // handelling InValid URL.
        otherwise({
            template: '<h2>*Page not found</h2>',
            controller: 'ErrorCtrl'
        });
    }
]);
