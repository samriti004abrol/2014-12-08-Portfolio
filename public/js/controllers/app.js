// Defining Anguler module. Called on portfolioApp.js 
var appCtrs = angular.module('appCtrs', []);

// main controller. 
appCtrs.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {

  // logic for the main navigation 
  $scope.setActive = function(page){
  	$scope.homeActive='';
    $scope.resumeActive='';
    $scope.errorActive='';
    $scope[page+'Active'] = 'active';
  };

  $scope.setMainMenu = function(set){
    $scope.menuActive = set;
  };

  $http.get('res/config.json').success(function(data) {
  	$scope.config = data;
  });
}]);

// Defining controller for URL '/resume'. Called on portfolioApp.js routing.
appCtrs.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
  	// main navigation - set home tab active
  	$scope.setActive('home');
    $scope.setMainMenu('hide');
}]);


appCtrs.controller('ErrorCtrl', ['$scope', '$http',
  	function($scope, $http) {
  		// main navigation - set error tab active
  		$scope.setActive('error');
      $scope.setMainMenu('show');
}]);
