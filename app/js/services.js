angular.module('F1FeederApp.services', []).
	factory('ergastAPIservice', function($http) {
		// body...
		var ergastAPI = {};

		ergastAPI.getDrivers = function() {
			// body...
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		}
		
		return ergastAPI;

	});