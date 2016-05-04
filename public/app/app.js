angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService','businessCtrl', 'businessService', 'storyService', 'storyCtrl', 'reverseDirective'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})