'use strict';

angular.module('myApp.view3', ['ngRoute', 'myApp.userService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', 'userService', '$filter', '$location', function($scope, userService, $filter, $location) {
    $scope.selectedItem = [];
    $scope.currentBundle = [];
    $scope.selectedBundle = '';
    $scope.currentHotfix = [];
    $scope.selectedHotfix = '';
    $scope.currentPage = 0;
    $scope.pageSize = 35;
    $scope.orderByField = 'id';
    $scope.reverseSort = false;
    $scope.$watch(function () {
        return userService.getItem();
    }, function (newValue, oldValue) {
        if (newValue) {
            $scope.selectedItem = newValue;
        } else {
          $location.path('/view2');
        }
    }, true);
    $scope.allBundles = [
      {
          id: 1,
          name: 'Bundle 1',
          description: 'a little description about bundle 1'
      },
      {
          id: 2,
          name: 'Bundle 2',
          description: 'a little description about bundle 2'
      },
      {
          id: 3,
          name: 'Bundle 3',
          description: 'a little description about bundle 3'
      },
      {
          id: 4,
          name: 'Bundle 4',
          description: 'a little description about bundle 4'
      },
      {
          id: 5,
          name: 'Bundle 5',
          description: 'a little description about bundle 5'
      },
      {
          id: 6,
          name: 'Bundle 6',
          description: 'a little description about bundle 6'
      }
  ];
  $scope.allHotfixs = [
    {
        id: 1,
        name: 'Hotfix 1',
        description: 'a little description about Hotfix 1'
    },
    {
        id: 2,
        name: 'Hotfix 2',
        description: 'a little description about Hotfix 2'
    },
    {
        id: 3,
        name: 'Hotfix 3',
        description: 'a little description about Hotfix 3'
    },
    {
        id: 4,
        name: 'Hotfix 4',
        description: 'a little description about Hotfix 4'
    },
    {
        id: 5,
        name: 'Hotfix 5',
        description: 'a little description about Hotfix 5'
    },
    {
        id: 6,
        name: 'Hotfix 6',
        description: 'a little description about Hotfix 6'
    }
];
  $scope.selectBundle = function (userId, bundle) {
    userService.updateBundle(userId, bundle);
  };
  $scope.selectHotfix = function (userId, hotfix) {
    userService.updateHotfix(userId, hotfix);
  };
  $scope.getData = function () {
    return $filter('filter')($scope.selectedItem, $scope.q);
  }
  $scope.numberOfPages=function(){
    $scope.totalPages = Math.ceil($scope.getData().length/$scope.pageSize);
    return $scope.totalPages;
  }
  $scope.submit = function () {
      userService.setData();
      $location.path('/view4');
  }
}])
.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
