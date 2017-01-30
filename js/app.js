'use strict';

angular.module('DianaApp', ['ngSanitize', 'ui.router', 'ui.bootstrap', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

		.state('about', {
			url: '/',
			templateUrl: 'partials/about.html'
		})

		.state('contact', {
			url: '/contact', 
			templateUrl: 'partials/contact.html',
			// controller: 'ContactCtrl'
		})

		.state('portfolio', {
			url: '/portfolio',
            templateUrl: 'partials/portfolio.html'
		})

	// Sends all false paths to about
	$urlRouterProvider.otherwise('/');
})