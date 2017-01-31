'use strict';

angular.module('DianaApp', ['ngSanitize', 'ui.router', 'ui.bootstrap'])

DianaApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

		.state('about', {
			url: '/',
			templateUrl: 'partials/about.html',
			controller: 'AboutCtrl'
		})

		.state('contact', {
			url: '/contact', 
			templateUrl: 'partials/contact.html',
			controller: 'ContactCtrl'
		})

		.state('portfolio', {
			url: '/portfolio',
            templateUrl: 'partials/portfolio.html',
			controller: 'PortfolioCtrl'
		})

	// Sends all false paths to about
	$urlRouterProvider.otherwise('/');
})

//For about view
.controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {

}])

//For contact view
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {

}])

//For portfolio view
.controller('PortfolioCtrl', ['$scope', '$http', function($scope, $http) {

}])