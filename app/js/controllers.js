angular.module('F1FeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function (response) {
    	// dig into resp to get data
    	$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      });
});