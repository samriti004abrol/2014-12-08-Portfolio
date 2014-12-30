// Defining Anguler module. Called on portfolioApp.js 
var resumeCtrs = angular.module('resumeCtrs', []);

var resumeHeadings = [];

// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
resumeCtrs.controller('ResumeBuildCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		// main navigation - set resume tab active
  		$scope.setActive('resume');

  		$scope.resume= {};

	    console.log($scope.config.resume);
	    
	    // read resume config file
	    $http.get($scope.config.resume).success(function(data) {
	    	for (var key in data) {
			   resumeHeadings.push(key);
			   $scope[key]={};
			   $scope[key].val = "value";
			}

			   console.log($scope.Skill.val);

			// demo($scope, $http);
		  //   $http.get('res/resume/skills.json').success(function(data) {
		  //   	for (var key in data) {
			 //   		resumeHeadings.push(key);
				// }
		  //   });

			$scope.resumeHeadings = resumeHeadings;
			$scope.resumeConfig = data;
	    	console.log(resumeHeadings);
	    });
}]);

var demo = function($scope, $http){
	$http.get('res/resume/skills.json').success(function(data) {
		for (var key in data) {
	   		resumeHeadings.push(key);
		}
    });	
};