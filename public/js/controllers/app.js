// Defining Anguler module. Called on portfolioApp.js 
var appCtrs = angular.module('appCtrs', []);

// main controller. 
appCtrs.controller('AppCtrl', ['$scope', '$http',
  	function($scope, $http) {

  		$scope.setActive = function(page){
  			$scope.homeActive='';
		    $scope.resumeActive='';
		    $scope.errorActive='';

		    $scope[page+'Active'] = 'active';
  		};

	    $http.get('res/config.json').success(function(data) {
	    	$scope.config = data;
	    	console.log($scope.config);
	    	return data;
	    });
}]);

// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
appCtrs.controller('HomeCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		$scope.setActive('home');
	    console.log("inside the home controller");
}]);


appCtrs.controller('ErrorCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		$scope.setActive('error');
}]);
