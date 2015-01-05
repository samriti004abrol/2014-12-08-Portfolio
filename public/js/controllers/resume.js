// Defining Anguler module. Called on portfolioApp.js 
var resumeCtrs = angular.module('resumeCtrs', []);


// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
resumeCtrs.controller('ResumeBuildCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		// main navigation - set resume tab active
  		$scope.setActive('resume');
    	$scope.setMainMenu('show');

  		$scope.resume = [];
  		

	    console.log($scope.config.resume);
	    
	    // read resume config file
	    $http.get($scope.config.resume).success(function(data) {
	    	for (var key in data) {
	    		var resumeSubObj = {}
				resumeSubObj.key = key;
				console.log(data[key]);
				$scope.resume.push(resumeSubObj);
				getResumeSubObj( $scope, $http, data[key] , $scope.resume.length -1 );
			}

			console.log($scope.resume);

		  //   $http.get('res/resume/skills.json').success(function(data) {
		  //   	for (var key in data) {
			 //   		resumeHeadings.push(key);
				// }
		  //   });

			// $scope.resumeHeadings = resumeHeadings;
			// $scope.resumeConfig = data;
	  //   	console.log(resumeHeadings);
	    });
}]);


var getResumeSubObj = function($scope, $http, file, key){
	$http.get('res/resume/'+file+'.json').success(function(data) {
		$scope.resume[key].value = data;
    }).error(function(data){
    	console.error("file not found for " + file);
    });	
};