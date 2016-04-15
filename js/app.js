(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/track', {
                controller: 'TrackController',
                templateUrl: 'track.html',
                controllerAs: 'vm'
            })

            .when('/addtrack', {
                controller: 'AddTrackController',
                templateUrl: 'addtrack.html',
                controllerAs: 'vm'
            })

            .when('/genre', {
                controller: 'GenreController',
                templateUrl: 'genre.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/track' });
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-W'];
    }

	
    run.$inject = ['$rootScope', '$location', '$http'];
    function run($rootScope, $location, $http) {

    }
	 angular.module('app').controller('MainCtrl', function($scope) {
		$scope.isHomeActive = "active";		
		$scope.changeMenu = function(tabName) {
			if(tabName === 'home') {
				$scope.isHomeActive = "active";
				$scope.isGenreActive = "";
			} else {
				$scope.isHomeActive = "";
				$scope.isGenreActive = "active";
			}
		}
	});
	
})();

