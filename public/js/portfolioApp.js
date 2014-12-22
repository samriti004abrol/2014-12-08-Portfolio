var app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
        when('/resume', {
            templateUrl: 'partials/resume.html'
            // controller: 'MyCtrl'
        }).
        otherwise({
            template: '<h2>*Page not found</h2>'
        });
    }
]);