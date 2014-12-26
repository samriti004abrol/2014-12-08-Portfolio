// Defining Anguler module. Called on portfolioApp.js 
var resumeCtrs = angular.module('resumeCtrs', []);

// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
resumeCtrs.controller('ResumeBuildCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		// main navigation - set resume tab active
  		$scope.setActive('resume');

	    console.log($scope.config.resume);
	    $http.get($scope.config.resume).success(function(data) {
	    	for (var key in data) {
			   console.log(' name=' + key + ' value=' + data[key]);

			}
	    	console.log(data);
	    });
	}]);
