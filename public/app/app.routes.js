angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/logout', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		

		.when('/allStories', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllBusinessesController',
			controllerAs: 'business',
			/*resolve: {
				businesses: function(Business) {
					return Business.allBusinesses();
				}
			}*/

		})

	$locationProvider.html5Mode(true);

})