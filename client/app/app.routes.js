angular.module('app.routes')

.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider

			.when('/', {
				controller: 'mainCtrl',
				templateUrl: 'views/contact.html'
			})

			.when('/web', {
				controller: 'mainCtrl',
				templateUrl: 'views/web.html'
			})

			.when('/graphic', {
				controller: 'mainCtrl',
				templateUrl: 'views/graphic.html'
			})

			.when('/about', {
				controller: 'mainCtrl',
				templateUrl: 'views/about.html'
			})

			.otherwise({
				redirectTo: '/'
			});
	}

]).run(['$rootScope', '$location', function($rootScope, $location) {
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal) { 
		$rootScope.activetab = newVal;
	});
}]);
