'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
  $scope.selectedTime = "Select a slot"
  $scope.timeSlots = [
    "11:00AM",
    "3:00PM",
    "7:00PM",
    "10:00AM"
  ];
  $scope.allServer = [
    {
        server: 1,
        patch: 'Patch 1',
        slot: 'Pick Slot'
    },
    {
        server: 2,
        patch: 'Patch 2',
        slot: 'Pick Slot'
    },
    {
        server: 3,
        patch: 'Patch 3',
        slot: 'Pick Slot'
    },
    {
        server: 4,
        patch: 'Patch 4',
        slot: 'Pick Slot'
    }
];
  $scope.HandleTimeSelect = function(time, selectedServer) {
    const id = parseInt(selectedServer, 10);
    $scope.allServer.map((server => {
      if (server.server === id) {
        server['slot'] = time;
      }
    }));
    $scope.timeSlots = $scope.timeSlots.filter(elem => elem !== time);
  };

}]);
