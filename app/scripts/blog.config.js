angular
	.module("blog")
	.config(["$locationProvider", "$stateProvider", "$urlRouterProvider",
		function($locationProvider, $stateProvider, $urlRouterProvider) {
			$locationProvider.html5Mode(false).hashPrefix("!");

			$stateProvider
			.state({
				name: "welcome",
				url: "/welcome",
				component: "welcomeComponent"
			});
		}]);