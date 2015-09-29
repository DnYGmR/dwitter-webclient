var dwitter = angular.module('dwitter', ['ngRoute']);

dwitter.config(function($routeProvider) {
	$routeProvider.
		when('/login', {templateUrl:'views/login.html'}).
		when('/posts', {templateUrl:'views/posts.html'}).
		when('/profile', {templateUrl:'views/profile.html'}).
		when('/register', {templateUrl:'views/register.html'}).
		when('/menu', {templateUrl:'views/menu.html'}).
		otherwise({redirectTo:'/login'});
});

dwitter.controller("siteCtrl", function($scope) {

});
