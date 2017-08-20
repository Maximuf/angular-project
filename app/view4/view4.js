'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', 'userService', '$location', function($scope, userService, $location) {
  $scope.selectedTime = "Select a slot"
  $scope.timeSlots = [
    "11:00AM",
    "3:00PM",
    "7:00PM",
    "10:00AM"
  ];
  $scope.created = false;
  $scope.create = function () {
    $scope.created = true;
  }
  $scope.$watch(function () {
    return userService.getData();
}, function (newValue, oldValue) {
    if (newValue) {
        $scope.selectedItem = newValue;
    } else {
      $location.path('/view2');
    }
}, true);

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
  $scope.HandleTimeSelect = function(time, selectedUser) {
    const id = parseInt(selectedUser, 10);
   userService.updateSlot(time, id);
    $scope.timeSlots = $scope.timeSlots.filter(elem => elem !== time);
  };

}]);
