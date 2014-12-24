// Defining Anguler module. Called on portfolioApp.js 
var resumeCtrs = angular.module('resumeCtrs', []);

// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
resumeCtrs.controller('ResumeBuildCtrl', ['$scope', '$http',
  	function($scope, $http) {
	    $http.get('res/config.json').success(function(data) {
	    	$scope.config = data;
	    	console.log($scope.config);
	    });
	}]);
